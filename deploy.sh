#!/usr/bin/env bash
# Build the BodySense AI site and publish it to the gh-pages branch.
# Served at https://shashmanj.github.io/bodysense-site/ (or your custom domain).
set -euo pipefail
cd "$(dirname "$0")"

echo "› Building…"
npm run build

echo "› Publishing dist/ to gh-pages…"
TMP="$(mktemp -d)"
cp -R dist/. "$TMP/"
git -C "$TMP" init -q -b gh-pages
git -C "$TMP" add -A
git -C "$TMP" -c user.name="Shashi Kiran Manju" -c user.email="kiran.shashi47.sk@gmail.com" \
  commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git -C "$TMP" push -f "$(git -C "$(dirname "$0")" remote get-url origin)" gh-pages
rm -rf "$TMP"

echo "✓ Deployed → https://shashmanj.github.io/bodysense-site/"
