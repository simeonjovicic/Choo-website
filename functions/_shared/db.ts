import type { Env, Ingredient, Locale, Nutrition, RecipeInput, RecipeStep } from "./types";

interface RecipeRow {
  id: string;
  slug: string;
  status: "draft" | "published";
  servings: number;
  prep_minutes: number;
  cook_minutes: number;
  total_minutes: number;
  difficulty: "easy" | "medium" | "hard";
  created_at: string;
  updated_at: string;
  published_at: string | null;
  title: string;
  description: string;
  origin: string;
  occasion: string;
  notes: string;
  ingredients_json: string;
  steps_json: string;
  nutrition_json: string;
  image_id: string | null;
  r2_key: string | null;
  alt_text: string | null;
}

interface TagRow {
  tag: string;
}

interface ImageRow {
  id: string;
  recipe_id: string | null;
  r2_key: string;
  content_type: string;
  alt_text: string;
  size_bytes: number;
  sort_order: number;
  is_hero: number;
  created_at: string;
}

interface TranslationRow {
  recipe_id: string;
  locale: Locale;
  title: string;
  description: string;
  origin: string;
  occasion: string;
  notes: string;
  ingredients_json: string;
  steps_json: string;
  nutrition_json: string;
}

const parseJson = <T>(value: string | null | undefined, fallback: T): T => {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
};

const normalizeLocale = (locale: string | null): Locale => {
  if (locale === "de" || locale === "zh") return locale;
  return "en";
};

const recipeTime = (row: RecipeRow): string => {
  const minutes = row.total_minutes || row.prep_minutes + row.cook_minutes;
  return minutes > 0 ? `${minutes} min` : "";
};

function ingredientLabel(ingredient: Ingredient): string {
  return [ingredient.amount, ingredient.unit, ingredient.name].filter(Boolean).join(" ").trim() || ingredient.name;
}

function publicRecipe(row: RecipeRow, tags: string[] = [], images: ImageRow[] = []) {
  const ingredients = parseJson<Ingredient[]>(row.ingredients_json, []);
  const steps = parseJson<RecipeStep[]>(row.steps_json, []);
  const nutrition = parseJson<Nutrition>(row.nutrition_json, {});
  const hero = images.find((image) => image.is_hero) || images[0];
  const heroKey = hero?.r2_key || row.r2_key || "";

  return {
    id: row.slug,
    recipeId: row.id,
    slug: row.slug,
    status: row.status,
    name: row.title,
    title: row.title,
    blurb: row.description,
    description: row.description,
    origin: row.origin,
    occasion: row.occasion,
    notes: row.notes,
    time: recipeTime(row),
    prepMinutes: row.prep_minutes,
    cookMinutes: row.cook_minutes,
    totalMinutes: row.total_minutes,
    serves: row.servings,
    servings: row.servings,
    difficulty: row.difficulty,
    tags,
    ingredients: ingredients.map((ingredient) => ({
      ...ingredient,
      name: ingredientLabel(ingredient),
      rawName: ingredient.name,
    })),
    steps: steps.map((step) => step.text),
    stepDetails: steps,
    nutrition,
    imageUrl: heroKey ? `/api/images/${encodeURIComponent(heroKey)}` : "",
    imageAlt: hero?.alt_text || row.alt_text || row.title,
    images: images.map((image) => ({
      id: image.id,
      url: `/api/images/${encodeURIComponent(image.r2_key)}`,
      altText: image.alt_text,
      isHero: Boolean(image.is_hero),
    })),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    publishedAt: row.published_at,
  };
}

async function getTagsForRecipes(env: Env, recipeIds: string[]): Promise<Map<string, string[]>> {
  const map = new Map<string, string[]>();
  if (!recipeIds.length) return map;

  const statements = recipeIds.map((id) =>
    env.DB.prepare("SELECT tag FROM recipe_tags WHERE recipe_id = ? ORDER BY tag").bind(id),
  );
  const results = await env.DB.batch<TagRow>(statements);
  results.forEach((result, index) => {
    map.set(recipeIds[index], (result.results || []).map((row) => row.tag));
  });
  return map;
}

async function getImagesForRecipes(env: Env, recipeIds: string[]): Promise<Map<string, ImageRow[]>> {
  const map = new Map<string, ImageRow[]>();
  if (!recipeIds.length) return map;

  const statements = recipeIds.map((id) =>
    env.DB.prepare(
      "SELECT id, recipe_id, r2_key, content_type, alt_text, size_bytes, sort_order, is_hero, created_at FROM recipe_images WHERE recipe_id = ? ORDER BY sort_order, created_at",
    ).bind(id),
  );
  const results = await env.DB.batch<ImageRow>(statements);
  results.forEach((result, index) => {
    map.set(recipeIds[index], result.results || []);
  });
  return map;
}

export async function listPublicRecipes(env: Env, locale: string | null, tag?: string | null) {
  const lang = normalizeLocale(locale);
  const tagFilter = tag && tag !== "all" ? tag : null;
  const baseSql = `
    SELECT
      r.id, r.slug, r.status, r.servings, r.prep_minutes, r.cook_minutes, r.total_minutes,
      r.difficulty, r.created_at, r.updated_at, r.published_at,
      COALESCE(t.title, te.title) AS title,
      COALESCE(t.description, te.description) AS description,
      COALESCE(t.origin, te.origin) AS origin,
      COALESCE(t.occasion, te.occasion) AS occasion,
      COALESCE(t.notes, te.notes) AS notes,
      COALESCE(t.ingredients_json, te.ingredients_json) AS ingredients_json,
      COALESCE(t.steps_json, te.steps_json) AS steps_json,
      COALESCE(t.nutrition_json, te.nutrition_json) AS nutrition_json,
      img.id AS image_id, img.r2_key, img.alt_text
    FROM recipes r
    LEFT JOIN recipe_translations t ON t.recipe_id = r.id AND t.locale = ?
    JOIN recipe_translations te ON te.recipe_id = r.id AND te.locale = 'en'
    LEFT JOIN recipe_images img ON img.recipe_id = r.id AND img.is_hero = 1
    WHERE r.status = 'published'
    ${tagFilter ? "AND EXISTS (SELECT 1 FROM recipe_tags rt WHERE rt.recipe_id = r.id AND rt.tag = ?)" : ""}
    ORDER BY COALESCE(r.published_at, r.created_at) DESC, r.created_at DESC
  `;
  const query = tagFilter
    ? env.DB.prepare(baseSql).bind(lang, tagFilter)
    : env.DB.prepare(baseSql).bind(lang);
  const result = await query.all<RecipeRow>();
  const rows = result.results || [];
  const ids = rows.map((row) => row.id);
  const tags = await getTagsForRecipes(env, ids);
  const images = await getImagesForRecipes(env, ids);
  return rows.map((row) => publicRecipe(row, tags.get(row.id) || [], images.get(row.id) || []));
}

export async function getPublicRecipe(env: Env, slug: string, locale: string | null) {
  const lang = normalizeLocale(locale);
  const row = await env.DB.prepare(`
    SELECT
      r.id, r.slug, r.status, r.servings, r.prep_minutes, r.cook_minutes, r.total_minutes,
      r.difficulty, r.created_at, r.updated_at, r.published_at,
      COALESCE(t.title, te.title) AS title,
      COALESCE(t.description, te.description) AS description,
      COALESCE(t.origin, te.origin) AS origin,
      COALESCE(t.occasion, te.occasion) AS occasion,
      COALESCE(t.notes, te.notes) AS notes,
      COALESCE(t.ingredients_json, te.ingredients_json) AS ingredients_json,
      COALESCE(t.steps_json, te.steps_json) AS steps_json,
      COALESCE(t.nutrition_json, te.nutrition_json) AS nutrition_json,
      img.id AS image_id, img.r2_key, img.alt_text
    FROM recipes r
    LEFT JOIN recipe_translations t ON t.recipe_id = r.id AND t.locale = ?
    JOIN recipe_translations te ON te.recipe_id = r.id AND te.locale = 'en'
    LEFT JOIN recipe_images img ON img.recipe_id = r.id AND img.is_hero = 1
    WHERE r.status = 'published' AND r.slug = ?
  `).bind(lang, slug).first<RecipeRow>();

  if (!row) return null;
  const [tags, images] = await Promise.all([
    getTagsForRecipes(env, [row.id]),
    getImagesForRecipes(env, [row.id]),
  ]);
  return publicRecipe(row, tags.get(row.id) || [], images.get(row.id) || []);
}

export async function listPublicTags(env: Env) {
  const result = await env.DB.prepare(`
    SELECT DISTINCT rt.tag
    FROM recipe_tags rt
    JOIN recipes r ON r.id = rt.recipe_id
    WHERE r.status = 'published'
    ORDER BY rt.tag
  `).all<TagRow>();
  return (result.results || []).map((row) => row.tag);
}

export async function listAdminRecipes(env: Env) {
  const result = await env.DB.prepare(`
    SELECT
      r.id, r.slug, r.status, r.servings, r.prep_minutes, r.cook_minutes, r.total_minutes,
      r.difficulty, r.created_at, r.updated_at, r.published_at,
      te.title, te.description, te.origin, te.occasion, te.notes,
      te.ingredients_json, te.steps_json, te.nutrition_json,
      img.id AS image_id, img.r2_key, img.alt_text
    FROM recipes r
    JOIN recipe_translations te ON te.recipe_id = r.id AND te.locale = 'en'
    LEFT JOIN recipe_images img ON img.recipe_id = r.id AND img.is_hero = 1
    ORDER BY r.updated_at DESC
  `).all<RecipeRow>();
  const rows = result.results || [];
  const tags = await getTagsForRecipes(env, rows.map((row) => row.id));
  return rows.map((row) => publicRecipe(row, tags.get(row.id) || []));
}

export async function getAdminRecipe(env: Env, id: string) {
  const recipe = await env.DB.prepare(`
    SELECT
      r.id, r.slug, r.status, r.servings, r.prep_minutes, r.cook_minutes, r.total_minutes,
      r.difficulty, r.created_at, r.updated_at, r.published_at,
      te.title, te.description, te.origin, te.occasion, te.notes,
      te.ingredients_json, te.steps_json, te.nutrition_json,
      img.id AS image_id, img.r2_key, img.alt_text
    FROM recipes r
    JOIN recipe_translations te ON te.recipe_id = r.id AND te.locale = 'en'
    LEFT JOIN recipe_images img ON img.recipe_id = r.id AND img.is_hero = 1
    WHERE r.id = ?
  `).bind(id).first<RecipeRow>();

  if (!recipe) return null;
  const [translationResult, tagResult, imageResult] = await Promise.all([
    env.DB.prepare("SELECT * FROM recipe_translations WHERE recipe_id = ? ORDER BY locale").bind(id).all<TranslationRow>(),
    env.DB.prepare("SELECT tag FROM recipe_tags WHERE recipe_id = ? ORDER BY tag").bind(id).all<TagRow>(),
    env.DB.prepare(
      "SELECT id, recipe_id, r2_key, content_type, alt_text, size_bytes, sort_order, is_hero, created_at FROM recipe_images WHERE recipe_id = ? ORDER BY sort_order, created_at",
    ).bind(id).all<ImageRow>(),
  ]);

  return {
    ...publicRecipe(recipe, (tagResult.results || []).map((row) => row.tag), imageResult.results || []),
    translations: (translationResult.results || []).map((translation) => ({
      locale: translation.locale,
      title: translation.title,
      description: translation.description,
      origin: translation.origin,
      occasion: translation.occasion,
      notes: translation.notes,
      ingredients: parseJson<Ingredient[]>(translation.ingredients_json, []),
      steps: parseJson<RecipeStep[]>(translation.steps_json, []),
      nutrition: parseJson<Nutrition>(translation.nutrition_json, {}),
    })),
  };
}

function recipeStatements(env: Env, id: string, input: RecipeInput, isUpdate: boolean): D1PreparedStatement[] {
  const nowPublished = input.status === "published" ? "strftime('%Y-%m-%dT%H:%M:%fZ', 'now')" : "NULL";
  const statements: D1PreparedStatement[] = [];

  if (isUpdate) {
    statements.push(env.DB.prepare(`
      UPDATE recipes
      SET slug = ?, status = ?, servings = ?, prep_minutes = ?, cook_minutes = ?, total_minutes = ?,
          difficulty = ?, published_at = CASE
            WHEN ? = 'published' AND published_at IS NULL THEN strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
            WHEN ? = 'draft' THEN NULL
            ELSE published_at
          END
      WHERE id = ?
    `).bind(input.slug, input.status, input.servings, input.prepMinutes, input.cookMinutes, input.totalMinutes, input.difficulty, input.status, input.status, id));
    statements.push(env.DB.prepare("DELETE FROM recipe_translations WHERE recipe_id = ?").bind(id));
    statements.push(env.DB.prepare("DELETE FROM recipe_tags WHERE recipe_id = ?").bind(id));
  } else {
    statements.push(env.DB.prepare(`
      INSERT INTO recipes (id, slug, status, servings, prep_minutes, cook_minutes, total_minutes, difficulty, published_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ${nowPublished})
    `).bind(id, input.slug, input.status, input.servings, input.prepMinutes, input.cookMinutes, input.totalMinutes, input.difficulty));
  }

  input.translations.forEach((translation) => {
    statements.push(env.DB.prepare(`
      INSERT INTO recipe_translations
        (recipe_id, locale, title, description, origin, occasion, notes, ingredients_json, steps_json, nutrition_json)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id,
      translation.locale,
      translation.title,
      translation.description,
      translation.origin || "",
      translation.occasion || "",
      translation.notes || "",
      JSON.stringify(translation.ingredients),
      JSON.stringify(translation.steps),
      JSON.stringify(translation.nutrition || {}),
    ));
  });

  input.tags.forEach((tag) => {
    statements.push(env.DB.prepare("INSERT INTO recipe_tags (recipe_id, tag) VALUES (?, ?)").bind(id, tag));
  });

  statements.push(env.DB.prepare("UPDATE recipe_images SET recipe_id = NULL, is_hero = 0 WHERE recipe_id = ?").bind(id));
  input.imageIds.forEach((imageId, index) => {
    statements.push(env.DB.prepare("UPDATE recipe_images SET recipe_id = ?, sort_order = ?, is_hero = ? WHERE id = ?").bind(
      id,
      index,
      input.heroImageId === imageId ? 1 : 0,
      imageId,
    ));
  });

  return statements;
}

export async function createRecipe(env: Env, input: RecipeInput) {
  const id = crypto.randomUUID();
  await env.DB.batch(recipeStatements(env, id, input, false));
  return getAdminRecipe(env, id);
}

export async function updateRecipe(env: Env, id: string, input: RecipeInput) {
  const existing = await env.DB.prepare("SELECT id FROM recipes WHERE id = ?").bind(id).first<{ id: string }>();
  if (!existing) return null;
  await env.DB.batch(recipeStatements(env, id, input, true));
  return getAdminRecipe(env, id);
}

export async function deleteRecipe(env: Env, id: string) {
  const imageResult = await env.DB.prepare("SELECT r2_key FROM recipe_images WHERE recipe_id = ?").bind(id).all<{ r2_key: string }>();
  await env.DB.batch([
    env.DB.prepare("DELETE FROM recipe_images WHERE recipe_id = ?").bind(id),
    env.DB.prepare("DELETE FROM recipes WHERE id = ?").bind(id),
  ]);
  return (imageResult.results || []).map((row) => row.r2_key);
}

export async function createImageRecord(env: Env, params: {
  r2Key: string;
  contentType: string;
  altText: string;
  sizeBytes: number;
}) {
  const id = crypto.randomUUID();
  await env.DB.prepare(`
    INSERT INTO recipe_images (id, r2_key, content_type, alt_text, size_bytes)
    VALUES (?, ?, ?, ?, ?)
  `).bind(id, params.r2Key, params.contentType, params.altText, params.sizeBytes).run();
  return {
    id,
    r2Key: params.r2Key,
    contentType: params.contentType,
    altText: params.altText,
    sizeBytes: params.sizeBytes,
    url: `/api/images/${encodeURIComponent(params.r2Key)}`,
  };
}

export async function deleteImageRecord(env: Env, id: string) {
  const row = await env.DB.prepare("SELECT r2_key FROM recipe_images WHERE id = ?").bind(id).first<{ r2_key: string }>();
  if (!row) return null;
  await env.DB.prepare("DELETE FROM recipe_images WHERE id = ?").bind(id).run();
  return row.r2_key;
}

export async function getImageStorageUsage(env: Env) {
  const row = await env.DB.prepare(`
    SELECT COUNT(*) AS image_count, COALESCE(SUM(size_bytes), 0) AS total_bytes
    FROM recipe_images
  `).first<{ image_count: number; total_bytes: number }>();
  return {
    imageCount: Number(row?.image_count || 0),
    totalBytes: Number(row?.total_bytes || 0),
  };
}

export async function checkDailyUsageLimit(env: Env, key: string, limit: number, now = new Date()) {
  const day = now.toISOString().slice(0, 10);
  const counterKey = `${key}:${day}`;
  const row = await env.DB.prepare(`
    INSERT INTO app_usage_counters (key, count, updated_at)
    VALUES (?, 1, strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
    ON CONFLICT(key) DO UPDATE
      SET count = count + 1,
          updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now')
      WHERE count < ?
    RETURNING count
  `).bind(counterKey, limit).first<{ count: number }>();
  return Boolean(row);
}
