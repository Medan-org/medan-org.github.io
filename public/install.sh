#!/usr/bin/env sh

set -e

echo "Installing Medan..."
echo ""

# Detect platform
OS="$(uname -s | tr '[:upper:]' '[:lower:]')"

# Detect Termux
if [ -n "$TERMUX_VERSION" ] || [ -d "$PREFIX" ]; then
  INSTALL_DIR="$PREFIX/bin"
  echo "Detected Termux environment."
else
  # Default for Linux/macOS/Git Bash
  INSTALL_DIR="/usr/local/bin"
fi

echo "Installing to: $INSTALL_DIR"
mkdir -p "$INSTALL_DIR"

# Determine correct binary name based on OS
# (Future-proofing for separate builds)
case "$OS" in
  linux*)
    BINARY_NAME="medan-linux"
    ;;
  darwin*)
    BINARY_NAME="medan-macos"
    ;;
  msys*|mingw*)
    # Git Bash on Windows
    BINARY_NAME="medan-windows.exe"
    ;;
  *)
    echo "Unsupported OS: $OS"
    exit 1
    ;;
esac

# Download URL
LATEST_URL="https://github.com/Medan-org/medan-cli/releases/latest/download/$BINARY_NAME"

echo "Downloading Medan binary..."
curl -L "$LATEST_URL" -o "$INSTALL_DIR/medan"

chmod +x "$INSTALL_DIR/medan"

echo ""
echo "Medan installed successfully!"
echo "Run 'medan --help' to get started."
