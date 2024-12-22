#!/bin/bash

# Перейменування .js файлів на .ts
find . -type f -name '*.js' | while read -r file; do
    mv "$file" "${file%.js}.ts"
done

# Перейменування .jsx файлів на .tsx
find . -type f -name '*.jsx' | while read -r file; do
    mv "$file" "${file%.jsx}.tsx"
done
