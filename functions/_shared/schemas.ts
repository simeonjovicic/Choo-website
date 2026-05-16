import { z } from "zod";

export const localeSchema = z.enum(["en", "de", "zh"]);

export const loginSchema = z.object({
  password: z.string().min(1).max(512),
  turnstileToken: z.string().min(1).max(2048),
});

export const ingredientSchema = z.object({
  name: z.string().trim().min(1).max(180),
  amount: z.string().trim().max(60).optional().default(""),
  unit: z.string().trim().max(40).optional().default(""),
  note: z.string().trim().max(180).optional().default(""),
  aisle: z.string().trim().max(80).optional().default(""),
  inStore: z.boolean().optional().default(false),
});

export const stepSchema = z.object({
  text: z.string().trim().min(1).max(800),
  timerSeconds: z.number().int().min(0).max(24 * 60 * 60).optional(),
});

export const nutritionSchema = z.object({
  kcal: z.number().min(0).max(5000).optional(),
  protein: z.number().min(0).max(500).optional(),
  carbs: z.number().min(0).max(500).optional(),
  fat: z.number().min(0).max(500).optional(),
}).optional().default({});

export const recipeTranslationSchema = z.object({
  locale: localeSchema,
  title: z.string().trim().min(1).max(160),
  description: z.string().trim().max(800).default(""),
  origin: z.string().trim().max(120).optional().default(""),
  occasion: z.string().trim().max(120).optional().default(""),
  notes: z.string().trim().max(2000).optional().default(""),
  ingredients: z.array(ingredientSchema).min(1).max(80),
  steps: z.array(stepSchema).min(1).max(80),
  nutrition: nutritionSchema,
});

export const slugSchema = z.string()
  .trim()
  .min(2)
  .max(120)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export const tagSchema = z.string()
  .trim()
  .min(1)
  .max(40)
  .regex(/^[a-z0-9-]+$/);

export const recipePayloadSchema = z.object({
  slug: slugSchema,
  status: z.enum(["draft", "published"]).default("draft"),
  servings: z.number().int().min(1).max(50).default(2),
  prepMinutes: z.number().int().min(0).max(7 * 24 * 60).default(0),
  cookMinutes: z.number().int().min(0).max(7 * 24 * 60).default(0),
  totalMinutes: z.number().int().min(0).max(7 * 24 * 60).default(0),
  difficulty: z.enum(["easy", "medium", "hard"]).default("easy"),
  tags: z.array(tagSchema).max(20).default([]),
  imageIds: z.array(z.string().uuid()).max(20).default([]),
  heroImageId: z.string().uuid().optional(),
  translations: z.array(recipeTranslationSchema).min(1).max(3),
}).superRefine((value, ctx) => {
  const locales = new Set(value.translations.map((translation) => translation.locale));
  if (!locales.has("en")) {
    ctx.addIssue({ code: "custom", message: "English translation is required", path: ["translations"] });
  }
  if (locales.size !== value.translations.length) {
    ctx.addIssue({ code: "custom", message: "Translation locales must be unique", path: ["translations"] });
  }
  if (value.heroImageId && !value.imageIds.includes(value.heroImageId)) {
    ctx.addIssue({ code: "custom", message: "Hero image must be included in imageIds", path: ["heroImageId"] });
  }
});
