#!/usr/bin/env node
// Genera sitemap.xml automáticamente desde posts.json
// Colocado en la raíz del repositorio umana-salud-mental.github.io
// El workflow sitemap-auto-update.yml lo ejecuta automáticamente

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://umana-salud-mental.github.io';
const root = __dirname;

const posts = JSON.parse(fs.readFileSync(path.join(root, 'posts.json'), 'utf8'));

const staticPages = [
  { loc: '/',                  changefreq: 'monthly', priority: '1.0' },
  { loc: '/recursos.html',     changefreq: 'weekly',  priority: '0.9' },
  { loc: '/ayuda-crisis.html', changefreq: 'monthly', priority: '0.8' },
];

function urlEntry(u) {
  const lastmodTag = u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : '';
  return (
    `  <url>\n` +
    `    <loc>${BASE_URL}${u.loc}</loc>${lastmodTag}\n` +
    `    <changefreq>${u.changefreq}</changefreq>\n` +
    `    <priority>${u.priority}</priority>\n` +
    `  </url>`
  );
}

const postEntries = posts.map(p => ({
  loc:        `/posts/post-${p.id}.html`,
  changefreq: 'monthly',
  priority:   '0.7',
  lastmod:    p.date || new Date().toISOString().split('T')[0],
}));

const allEntries = [...staticPages, ...postEntries];

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  allEntries.map(urlEntry).join('\n') + '\n' +
  `</urlset>\n`;

fs.writeFileSync(path.join(root, 'sitemap.xml'), xml);
console.log(
  `✅ sitemap.xml generado: ${posts.length} artículos + ${staticPages.length} páginas = ${allEntries.length} URLs`
);
