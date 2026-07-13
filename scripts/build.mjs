import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'dist');
const entries = [
  'index.html',
  'about',
  'assets',
  'contact',
  'corrections',
  'disclosure',
  'insights',
  'privacy',
  'robots.txt',
  'scripts/main.js',
  'sitemap.xml',
  'styles',
  'subscribe',
  'terms',
];

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const entry of entries) {
  await mkdir(path.dirname(path.join(out, entry)), { recursive: true });
  await cp(path.join(root, entry), path.join(out, entry), { recursive: true });
}
console.log(`Built ${entries.length} deployable entries in dist/`);
