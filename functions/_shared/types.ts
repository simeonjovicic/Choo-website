export type Locale = "en" | "de" | "zh";
export type RecipeStatus = "draft" | "published";
export type Difficulty = "easy" | "medium" | "hard";

export interface Env {
  DB: D1Database;
  RATE_LIMIT: KVNamespace;
  IMAGES: R2Bucket;
  ASSETS?: Fetcher;
  ENVIRONMENT?: string;
  ADMIN_PATH?: string;
  ADMIN_PATH_DEFAULT?: string;
  ADMIN_HASH: string;
  ADMIN_SALT: string;
  JWT_SECRET: string;
  TURNSTILE_SECRET: string;
  TURNSTILE_SITE_KEY?: string;
}

export interface Ingredient {
  name: string;
  amount?: string;
  unit?: string;
  note?: string;
  aisle?: string;
  inStore: boolean;
}

export interface RecipeStep {
  text: string;
  timerSeconds?: number;
}

export interface Nutrition {
  kcal?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
}

export interface RecipeTranslationInput {
  locale: Locale;
  title: string;
  description: string;
  origin?: string;
  occasion?: string;
  notes?: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  nutrition?: Nutrition;
}

export interface RecipeInput {
  slug: string;
  status: RecipeStatus;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  totalMinutes: number;
  difficulty: Difficulty;
  tags: string[];
  imageIds: string[];
  heroImageId?: string;
  translations: RecipeTranslationInput[];
}

export interface SessionClaims {
  sub: "admin";
  sid: string;
  iat: number;
  exp: number;
}

export interface RouteDeps {
  now?: () => number;
  randomBytes?: (length: number) => Uint8Array;
  turnstileVerify?: (token: string, remoteIp: string | null, env: Env) => Promise<boolean>;
  jitter?: (minMs?: number, maxMs?: number) => Promise<void>;
}
