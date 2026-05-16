// Deliberately conservative app-level caps. They are far below Cloudflare's
// current free-tier allowances and keep the R2-backed recipe feature bounded.
export const DAILY_PUBLIC_API_LIMIT = 5_000;
export const DAILY_R2_IMAGE_MISS_LIMIT = 1_000;
export const DAILY_IMAGE_UPLOAD_LIMIT = 20;
export const MAX_STORED_IMAGE_COUNT = 40;
export const MAX_STORED_IMAGE_BYTES = 200 * 1024 * 1024;
