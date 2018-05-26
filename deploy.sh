rm -rf build

npm run build

cd build

git init
git add .
git commit -m "Deploy to gh-pages"

git push --force --quiet git@github.com:vkbansal/introduction-to-typescript.git master:gh-pages
