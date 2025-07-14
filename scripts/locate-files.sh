#!/bin/bash
echo "=== Locating index.html files ==="
echo ""

echo "1. Checking public directory:"
if [ -f "public/index.html" ]; then
    echo "✅ Found: public/index.html"
    ls -la public/index.html
else
    echo "❌ Not found: public/index.html"
fi

echo ""
echo "2. Checking build output directory:"
if [ -f "out/index.html" ]; then
    echo "✅ Found: out/index.html (generated file)"
    ls -la out/index.html
else
    echo "❌ Not found: out/index.html (run 'npm run build' first)"
fi

echo ""
echo "3. Checking Next.js pages:"
if [ -f "app/page.tsx" ]; then
    echo "✅ Found: app/page.tsx (Next.js home page)"
    ls -la app/page.tsx
else
    echo "❌ Not found: app/page.tsx"
fi

echo ""
echo "=== File Structure ==="
tree -I 'node_modules|.git|.next' -L 3
