#!/usr/bin/env bash
# build.sh -- convertit chaque README.md du portfolio en index.html dans son dossier.
# Les liens vers style.css et la page d'accueil sont rendus RELATIFS,
# donc le site fonctionne aussi bien a la racine qu'en sous-dossier /portfolio/.
set -euo pipefail

cd "$(dirname "$0")"
TODAY="$(date '+%m/%Y')"
n=0

while IFS= read -r md; do
  dir="$(dirname "$md")"

  # racine : la page d'accueil est ecrite a la main, on ne la genere pas
  [ "$dir" = "." ] && continue

  # profondeur -> prefixe relatif (projets/axone -> ../../)
  depth="$(awk -F/ '{print NF}' <<< "$dir")"
  root=""
  for _ in $(seq 1 "$depth"); do root="../$root"; done

  title="$(sed -n '1{/^# /{s/^# *//;p;q}}' "$md" || true)"
  [ -z "${title:-}" ] && { echo "  ⚠️  $md sans titre H1, ignore"; continue; }

  awk 'NR==1 && /^# / {next} {print}' "$md" > /tmp/_p.md

  echo "  ✅ $dir/index.html"
  pandoc /tmp/_p.md -o "$dir/index.html" -s --no-highlight \
    --template=tpl-doc.html \
    --metadata title="$title" \
    --metadata date="$TODAY" \
    --metadata root="$root"
  n=$((n+1))
done < <(find . -name 'README.md' -not -path './.git/*' | sort)

rm -f /tmp/_p.md
echo "  ✔ $n page(s) generee(s)"
