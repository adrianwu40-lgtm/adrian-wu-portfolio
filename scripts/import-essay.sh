#!/usr/bin/env bash
# Import an essay from the Obsidian vault into the content/essays directory.
# Usage: ./scripts/import-essay.sh "essay name"
#
# The script copies the file, slugifies the name, and reminds you to add
# frontmatter and clean up Obsidian-specific syntax.

set -euo pipefail

VAULT_DIR="/Users/adrianwu/vibes/Obsidian Vault/1 — Finished"
DEST_DIR="$(cd "$(dirname "$0")/.." && pwd)/content/essays"

if [ $# -lt 1 ]; then
  echo "Usage: $0 \"essay name\""
  exit 1
fi

NAME="$1"
SOURCE="$VAULT_DIR/$NAME.md"

if [ ! -f "$SOURCE" ]; then
  echo "Error: file not found: $SOURCE"
  exit 1
fi

# Slugify: lowercase, replace spaces/underscores with hyphens, strip non-alphanumeric
SLUG=$(echo "$NAME" | tr '[:upper:]' '[:lower:]' | tr ' _' '-' | sed 's/[^a-z0-9-]//g' | sed 's/--*/-/g')
DEST="$DEST_DIR/$SLUG.md"

cp "$SOURCE" "$DEST"
echo "Copied to $DEST"
echo ""
echo "Next steps:"
echo "  1. Add frontmatter (title, date, description) at the top of the file"
echo "  2. Remove [[wikilinks]] — replace with plain text or markdown links"
echo "  3. Remove ==highlights== — replace with **bold** or *italic*"
echo "  4. git add content/essays/$SLUG.md && git commit && git push"
