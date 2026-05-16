import type { Difficulty, Ingredient, Locale, Nutrition, RecipeInput, RecipeStatus, RecipeStep, RecipeTranslationInput } from "./types";

type ParseSuccess<T> = { success: true; data: T };
type ParseFailure = { success: false; error: ValidationError };

export class ValidationError extends Error {
  status = 400;

  constructor(message = "Invalid payload") {
    super(message);
    this.name = "ValidationError";
  }
}

function schema<T>(parser: (value: unknown) => T) {
  return {
    parse: parser,
    safeParse(value: unknown): ParseSuccess<T> | ParseFailure {
      try {
        return { success: true, data: parser(value) };
      } catch (error) {
        return { success: false, error: error instanceof ValidationError ? error : new ValidationError() };
      }
    },
  };
}

function fail(message?: string): never {
  throw new ValidationError(message);
}

function record(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) fail();
  return value as Record<string, unknown>;
}

function text(value: unknown, min: number, max: number, fallback?: string): string {
  if (value == null) {
    if (fallback !== undefined) return fallback;
    fail();
  }
  if (typeof value !== "string") fail();
  const trimmed = value.trim();
  if (trimmed.length < min || trimmed.length > max) fail();
  return trimmed;
}

function integer(value: unknown, min: number, max: number, fallback: number): number {
  const raw = value == null ? fallback : value;
  if (typeof raw !== "number" || !Number.isInteger(raw) || raw < min || raw > max) fail();
  return raw;
}

function optionalNumber(value: unknown, min: number, max: number): number | undefined {
  if (value == null) return undefined;
  if (typeof value !== "number" || !Number.isFinite(value) || value < min || value > max) fail();
  return value;
}

function booleanValue(value: unknown, fallback: boolean): boolean {
  if (value == null) return fallback;
  if (typeof value !== "boolean") fail();
  return value;
}

function arrayValue<T>(value: unknown, min: number, max: number, parser: (item: unknown) => T): T[] {
  if (!Array.isArray(value) || value.length < min || value.length > max) fail();
  return value.map(parser);
}

function optionalArray<T>(value: unknown, max: number, parser: (item: unknown) => T): T[] {
  if (value == null) return [];
  return arrayValue(value, 0, max, parser);
}

function oneOf<T extends string>(value: unknown, values: readonly T[], fallback?: T): T {
  if (value == null && fallback !== undefined) return fallback;
  if (typeof value !== "string" || !values.includes(value as T)) fail();
  return value as T;
}

function slug(value: unknown): string {
  const parsed = text(value, 2, 120);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(parsed)) fail();
  return parsed;
}

function tag(value: unknown): string {
  const parsed = text(value, 1, 40);
  if (!/^[a-z0-9-]+$/.test(parsed)) fail();
  return parsed;
}

function uuid(value: unknown): string {
  const parsed = text(value, 36, 36);
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(parsed)) fail();
  return parsed;
}

function ingredient(value: unknown): Ingredient {
  const item = record(value);
  return {
    name: text(item.name, 1, 180),
    amount: text(item.amount, 0, 60, ""),
    unit: text(item.unit, 0, 40, ""),
    note: text(item.note, 0, 180, ""),
    aisle: text(item.aisle, 0, 80, ""),
    inStore: booleanValue(item.inStore, false),
  };
}

function step(value: unknown): RecipeStep {
  const item = record(value);
  const timerSeconds = integer(item.timerSeconds, 0, 24 * 60 * 60, 0);
  return {
    text: text(item.text, 1, 800),
    ...(timerSeconds > 0 ? { timerSeconds } : {}),
  };
}

function nutrition(value: unknown): Nutrition {
  if (value == null) return {};
  const item = record(value);
  return {
    ...(item.kcal != null ? { kcal: optionalNumber(item.kcal, 0, 5000) } : {}),
    ...(item.protein != null ? { protein: optionalNumber(item.protein, 0, 500) } : {}),
    ...(item.carbs != null ? { carbs: optionalNumber(item.carbs, 0, 500) } : {}),
    ...(item.fat != null ? { fat: optionalNumber(item.fat, 0, 500) } : {}),
  };
}

function translation(value: unknown): RecipeTranslationInput {
  const item = record(value);
  return {
    locale: oneOf<Locale>(item.locale, ["en", "de", "zh"]),
    title: text(item.title, 1, 160),
    description: text(item.description, 0, 800, ""),
    origin: text(item.origin, 0, 120, ""),
    occasion: text(item.occasion, 0, 120, ""),
    notes: text(item.notes, 0, 2000, ""),
    ingredients: arrayValue(item.ingredients, 1, 80, ingredient),
    steps: arrayValue(item.steps, 1, 80, step),
    nutrition: nutrition(item.nutrition),
  };
}

export const loginSchema = schema((value: unknown) => {
  const item = record(value);
  return {
    password: text(item.password, 1, 512),
    turnstileToken: text(item.turnstileToken, 1, 2048),
  };
});

export const tagSchema = schema(tag);

export const recipePayloadSchema = schema((value: unknown): RecipeInput => {
  const item = record(value);
  const imageIds = optionalArray(item.imageIds, 20, uuid);
  const heroImageId = item.heroImageId == null ? undefined : uuid(item.heroImageId);
  const translations = arrayValue(item.translations, 1, 3, translation);
  const locales = new Set(translations.map((entry) => entry.locale));

  if (!locales.has("en")) fail("English translation is required");
  if (locales.size !== translations.length) fail("Translation locales must be unique");
  if (heroImageId && !imageIds.includes(heroImageId)) fail("Hero image must be included in imageIds");

  return {
    slug: slug(item.slug),
    status: oneOf<RecipeStatus>(item.status, ["draft", "published"], "draft"),
    servings: integer(item.servings, 1, 50, 2),
    prepMinutes: integer(item.prepMinutes, 0, 7 * 24 * 60, 0),
    cookMinutes: integer(item.cookMinutes, 0, 7 * 24 * 60, 0),
    totalMinutes: integer(item.totalMinutes, 0, 7 * 24 * 60, 0),
    difficulty: oneOf<Difficulty>(item.difficulty, ["easy", "medium", "hard"], "easy"),
    tags: optionalArray(item.tags, 20, tag),
    imageIds,
    ...(heroImageId ? { heroImageId } : {}),
    translations,
  };
});
