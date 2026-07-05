const fs = require('node:fs');
const path = require('node:path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');
const routes = ['professor', 'research', 'projects', 'teaching', 'cv'];

if (!fs.existsSync(indexPath)) {
  throw new Error('dist/index.html was not found. Run vite build before creating GitHub Pages fallbacks.');
}

fs.copyFileSync(indexPath, path.join(distDir, '404.html'));

for (const route of routes) {
  const routeDir = path.join(distDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.copyFileSync(indexPath, path.join(routeDir, 'index.html'));
}

console.log('Created GitHub Pages fallbacks for SPA routes.');
