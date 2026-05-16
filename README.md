# Choo Website

Static Cloudflare Pages SPA with a Pages Functions recipe backend.

## Recipe Backend And Admin

This repo adds only the recipe/admin layer to the existing SPA. Public visitors see recipes from D1 through `/api/recipes`; the admin UI is not linked anywhere and only boots on the secret `ADMIN_PATH` when the URL hash is an admin flag such as `#login`.

### Data Model

`recipes` stores queryable metadata: slug, status, servings, time fields, difficulty and timestamps. `recipe_translations` stores EN/DE/ZH copy and ordered recipe content as JSON (`ingredients_json`, `steps_json`, `nutrition_json`) because recipes are usually read and edited as whole documents. `recipe_tags` is normalized for fast public filtering. `recipe_images` stores R2 metadata and a random R2 key; the binary image never lives in D1.

Indexes cover public list reads by status/date, detail reads by unique slug, tag filtering and image lookup by recipe.

### Create Cloudflare Resources

Use the project-local Wrangler binary through `npx`; a global install is not required.

If `npx wrangler r2 bucket create ...` returns `Please enable R2 through the Cloudflare Dashboard`, open the Cloudflare Dashboard, select the same account, go to **R2 Object Storage**, and enable R2 once for the account. After that, rerun the bucket creation commands.

Preview:

```sh
npx wrangler d1 create recipes-preview
npx wrangler kv namespace create rate-limit-preview
npx wrangler r2 bucket create images-preview
```

Production:

```sh
npx wrangler d1 create recipes-prod
npx wrangler kv namespace create rate-limit-prod
npx wrangler r2 bucket create images-prod
```

Copy the returned D1 and KV IDs into `wrangler.toml` under `env.preview` and `env.production`. The R2 bucket names are already `images-preview` and `images-prod`.

### Run Migrations

Preview:

```sh
npx wrangler d1 migrations apply recipes-preview --remote --env preview
```

Production:

```sh
npx wrangler d1 migrations apply recipes-prod --remote --env production
```

### Turnstile

Create one Cloudflare Turnstile widget for the site. Use the same Site Key for preview and production in `TURNSTILE_SITE_KEY`, but set the Turnstile Secret separately per environment as `TURNSTILE_SECRET`.

### Password Hash

Generate the PBKDF2-SHA-256 hash locally:

```sh
npm install
npm run hash-password
```

Set `ADMIN_HASH` and `ADMIN_SALT` from the output. Generate a separate `JWT_SECRET` with at least 32 random bytes, for example:

```sh
openssl rand -base64 32
```

### Secrets

For separate Preview and Production values, set these in the Cloudflare Dashboard:

1. Go to **Workers & Pages**.
2. Open the connected Pages project.
3. Go to **Settings** → **Variables and Secrets**.
4. Add these secrets separately for **Preview** and **Production**:
   - `ADMIN_HASH`
   - `ADMIN_SALT`
   - `JWT_SECRET`
   - `TURNSTILE_SECRET`
   - `ADMIN_PATH`

Use different values for preview and production. Keep `ADMIN_PATH` under `/admin-*` or `/__admin*`; `_routes.json` only invokes Pages Functions for those admin prefixes, `/api/*`, and `/robots.txt` so static assets stay outside the billable Functions path. `npx wrangler pages secret put <KEY>` is available for Pages projects, but in Wrangler 4.92.0 it does not expose a Preview/Production selector, so the Dashboard is the safer path for environment-specific secrets. Do not commit `.dev.vars`.

### Local Development

Copy `.dev.vars.example` to `.dev.vars`, fill it, then run:

```sh
npm install
npx wrangler pages dev .
```

Apply the local migration through Wrangler D1 before testing local CRUD.

### Branch Workflow

Work on a feature branch. Push the branch, wait for the Cloudflare Pages preview deployment, test against preview D1/KV/R2/secrets, then merge to `main` only after confirming it works. Production uses the production resources and secrets.

### Security Notes

Admin password verification uses PBKDF2-SHA-256 with 210,000 iterations and timing-safe comparison. Sessions are HS256 JWTs in `HttpOnly`, `Secure`, `SameSite=Strict` cookies. Mutating admin requests require a double-submit CSRF token stored in KV and sent as `X-CSRF-Token`. Login uses Turnstile siteverify before password verification and KV rate limiting: 5 failed attempts per IP per 15 minutes, then a 1-hour lock. Admin mutations/uploads keep per-IP KV rate limits; public recipe/image routes use daily D1-backed caps plus edge caching.

All responses receive security headers in `functions/_middleware.ts`. CSP allows self scripts plus Turnstile, inline styles for the existing SPA style attributes, Google Fonts, and the existing Google Maps iframe. There are no inline scripts.

### Free-Tier Sanity Check

Expected usage is small: one admin, occasional recipe edits, and public reads for a small recipe collection. `_routes.json` keeps static HTML/CSS/JS/images as static Pages assets and only sends `/api/*`, `/robots.txt`, `/admin-*`, and `/__admin*` through Functions. Public recipe/image responses use edge cache headers and the Cache API where available.

The recipe backend also has conservative hard caps in `functions/_shared/limits.ts`:

- `DAILY_PUBLIC_API_LIMIT = 5_000` per public recipe API route.
- `DAILY_R2_IMAGE_MISS_LIMIT = 1_000` R2 image cache misses per day.
- `DAILY_IMAGE_UPLOAD_LIMIT = 20` admin image uploads per day.
- `MAX_STORED_IMAGE_COUNT = 40` and `MAX_STORED_IMAGE_BYTES = 200 MB` total recipe image storage.

These caps are intentionally far below Cloudflare's free allowances for the products used here. Code cannot prevent every possible account-level cost, because a request must reach Cloudflare before the app can reject it. In the Cloudflare Pages dashboard, set the Pages Functions free-plan exhaustion behavior to **Fail closed** and keep billing/usage notifications enabled if the account has a payment method attached.
