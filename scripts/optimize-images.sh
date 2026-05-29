#!/usr/bin/env bash
# Optimize images: resize + WebP next to original. Idempotent (re-run safely).
set -euo pipefail
cd "$(dirname "$0")/.."

q_photo=80
q_alpha=85

w_hero=1600
w_mobile_hero=800
w_lotus=1600
w_illustration=1200
w_cat_desktop=1200
w_cat_cover=600
w_social=96
w_fresh=264
w_marken=400
w_pmt=80
w_shelve=1200

# convert "$src" "$width" "$quality_flag"
convert() {
  local src="$1" width="$2" quality="${3:-photo}"
  [[ -f "$src" ]] || { echo "skip (missing): $src"; return; }
  local dst="${src%.*}.webp"
  local opts=( -q "$q_photo" -m 6 -mt -resize "$width" 0 -metadata none )
  if [[ "$quality" == "alpha" ]]; then
    opts=( -q "$q_alpha" -m 6 -mt -resize "$width" 0 -alpha_q 90 -metadata none )
  fi
  cwebp "${opts[@]}" "$src" -o "$dst" 2>&1 | tail -1 || true
  local osz nsz
  osz=$(stat -f "%z" "$src")
  nsz=$(stat -f "%z" "$dst")
  printf "  %-65s %6dKB -> %6dKB (-%d%%)\n" "$(basename "$src")" \
    $((osz/1024)) $((nsz/1024)) $(( (osz - nsz) * 100 / (osz>0?osz:1) ))
}

echo "## Hero"
convert "images/WhatsApp Image 2026-05-07 at 19.39.46.jpeg" "$w_hero" photo
convert "images/create_the_mobile_optimized_version,_202605072005.jpeg" "$w_mobile_hero" photo

echo "## Lotus background"
convert "images/lotus_BG.png" "$w_lotus" alpha

echo "## Storefront illustration + schema shelve"
convert "assets/storefront-illustration.png" "$w_illustration" alpha
convert "assets/shelve-c.png" "$w_shelve" alpha

echo "## Categories desktop (.jpeg)"
for f in assets/categories/desktop/*.jpeg; do convert "$f" "$w_cat_desktop" photo; done

echo "## Categories covers (.png)"
for f in assets/categories/covers/*.png; do
  ext="${f##*.}"
  [[ "$ext" == "png" ]] && convert "$f" "$w_cat_cover" alpha
done
# Also cover instant.jpeg
[[ -f "assets/categories/covers/instant.jpeg" ]] && convert "assets/categories/covers/instant.jpeg" "$w_cat_cover" photo

echo "## Social icons"
for f in assets/social/*.png; do convert "$f" "$w_social" alpha; done

echo "## Fresh icons"
for f in assets/fresh/*.png; do convert "$f" "$w_fresh" alpha; done

echo "## Brand logos (marken)"
for f in assets/marken/*.png; do convert "$f" "$w_marken" alpha; done

echo "## Payment icons"
for f in assets/pmt/*.png; do convert "$f" "$w_pmt" alpha; done

echo "## Video poster"
[[ -f "assets/video/intro-poster.jpg" ]] && convert "assets/video/intro-poster.jpg" 1600 photo

echo "Done."
