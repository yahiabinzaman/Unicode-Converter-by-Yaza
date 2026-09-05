#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
TARGET_DIR="$HOME/Library/Application Support/Adobe/CEP/extensions/com.yaza.converter"

echo "=========================================================="
echo " Converter by Yaza - 1-Click Installer for Mac           "
echo "=========================================================="
echo ""

defaults write com.adobe.CSXS.9 PlayerDebugMode 1
defaults write com.adobe.CSXS.10 PlayerDebugMode 1
defaults write com.adobe.CSXS.11 PlayerDebugMode 1
defaults write com.adobe.CSXS.12 PlayerDebugMode 1
defaults write com.adobe.CSXS.13 PlayerDebugMode 1
defaults write com.adobe.CSXS.14 PlayerDebugMode 1
defaults write com.adobe.CSXS.15 PlayerDebugMode 1
defaults write com.adobe.CSXS.16 PlayerDebugMode 1

mkdir -p "$HOME/Library/Application Support/Adobe/CEP/extensions"
rm -rf "$TARGET_DIR"

if [ -d "$DIR/Bornomala_Converter_Extension" ]; then
    cp -R "$DIR/Bornomala_Converter_Extension" "$TARGET_DIR"
elif [ -d "$DIR/Converter_by_Yaza" ]; then
    cp -R "$DIR/Converter_by_Yaza" "$TARGET_DIR"
elif [ -f "$DIR/index.html" ]; then
    cp -R "$DIR" "$TARGET_DIR"
fi

echo "=========================================================="
echo " [SUCCESS] Converter by Yaza installed successfully!"
echo " Restart Adobe Illustrator and open:"
echo " Window > Extensions > Converter by Yaza"
echo "=========================================================="
read -p "Press Enter to exit..."
