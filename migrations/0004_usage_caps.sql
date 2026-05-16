-- Track only the counters needed for app-level free-tier circuit breakers.
-- These are daily keys, not analytics, so the table stays tiny.
CREATE TABLE IF NOT EXISTS app_usage_counters (
  key TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0 CHECK (count >= 0),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

-- Store image sizes so the admin upload endpoint can enforce a hard R2
-- storage budget before writing another object.
ALTER TABLE recipe_images
  ADD COLUMN size_bytes INTEGER NOT NULL DEFAULT 0 CHECK (size_bytes >= 0);

CREATE INDEX IF NOT EXISTS idx_recipe_images_size
  ON recipe_images (size_bytes);
