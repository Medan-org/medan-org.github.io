#!/usr/bin/env sh

set -e

echo "Installing Medan..."

LATEST_URL="https://github.com/Medan-org/medan-cli/releases/latest/download/medan"

curl -L "$LATEST_URL" -o /usr/local/bin/medan
chmod +x /usr/local/bin/medan

echo "Medan installed successfully."
