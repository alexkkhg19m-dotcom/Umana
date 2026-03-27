#!/usr/bin/env node
// Genera archivos HTML estáticos para cada artículo del blog.
// Salida: posts/post-{id}.html
// Google indexa estas páginas directamente sin necesitar JavaScript.
// Ejecutado por los workflows auto-blog.yml y deploy-live.yml.

'use strict';

const fs   = require('fs');
const path = require('path');

const BASE_URL   = 'https://umana-salud-mental.github.io';
const root       = __dirname;
const postsDir   = path.join(root, 'posts');
const postsJson  = path.join(root, 'posts.json');

if (!fs.existsSync(postsDir)) fs.mkdirSync(postsDir);

const posts = JSON.parse(fs.readFileSync(postsJson, 'utf8'));

function esc(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr + 'T12:00:00');
    return d.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch (_) {
    return dateStr || '';
  }
}

function generateHtml(post) {
  const canon   = `${BASE_URL}/posts/post-${esc(post.id)}.html`;
  const dateStr = formatDate(post.date);
  const imgSrc  = esc(post.image  || `${BASE_URL}/assets/images/logo.png`);
  const imgAlt  = esc(post.imageAlt || post.title);

  return `<!DOCTYPE html>
<html lang="es-419">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
    <meta name="description" content="${esc(post.summary)}">
    <link rel="canonical" href="${canon}">

    <!-- Open Graph -->
    <meta property="og:type"        content="article">
    <meta property="og:site_name"   content="Umana - Salud Mental">
    <meta property="og:url"         content="${canon}">
    <meta property="og:title"       content="${esc(post.title)} | Umana">
    <meta property="og:description" content="${esc(post.summary)}">
    <meta property="og:image"       content="${imgSrc}">
    <meta property="og:locale"      content="es_419">

    <!-- Twitter Card -->
    <meta name="twitter:card"        content="summary_large_image">
    <meta name="twitter:title"       content="${esc(post.title)} | Umana">
    <meta name="twitter:description" content="${esc(post.summary)}">
    <meta name="twitter:image"       content="${imgSrc}">

    <title>${esc(post.title)} | Umana - Salud Mental</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles.css">
    <style>
        .post-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 1.5rem 4rem;
        }
        .post-breadcrumb {
            font-size: 0.875rem;
            color: #6B7280;
            margin-bottom: 1.5rem;
        }
        .post-breadcrumb a {
            color: #5D8064;
            text-decoration: none;
        }
        .post-breadcrumb a:hover { text-decoration: underline; }
        .post-category-badge {
            display: inline-block;
            background: #5D8064;
            color: #fff;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            margin-bottom: 1rem;
        }
        .post-title {
            font-size: 2.25rem;
            font-weight: 700;
            color: #1F2937;
            line-height: 1.25;
            margin-bottom: 1rem;
        }
        .post-meta {
            display: flex;
            gap: 1rem;
            font-size: 0.875rem;
            color: #6B7280;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }
        .post-hero-image {
            width: 100%;
            border-radius: 1rem;
            margin-bottom: 2rem;
            object-fit: cover;
            max-height: 450px;
        }
        .post-body {
            font-size: 1.0625rem;
            line-height: 1.8;
            color: #374151;
        }
        .post-body h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1F2937;
            margin: 2rem 0 0.75rem;
        }
        .post-body h3 {
            font-size: 1.125rem;
            font-weight: 600;
            color: #374151;
            margin: 1.5rem 0 0.5rem;
        }
        .post-body p  { margin-bottom: 1.25rem; }
        .post-body ul,
        .post-body ol { margin-bottom: 1.25rem; padding-left: 1.5rem; }
        .post-body li { margin-bottom: 0.5rem; }
        .post-cta {
            background: #F0F5F1;
            border-left: 4px solid #5D8064;
            border-radius: 0.5rem;
            padding: 1.5rem;
            margin-top: 3rem;
        }
        .post-cta h3 { color: #5D8064; font-size: 1.125rem; margin-bottom: 0.5rem; }
        .post-cta p  { color: #4B5563; margin-bottom: 1rem; }
        .post-cta .cta-button {
            display: inline-block;
            background: #5D8064;
            color: #fff;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            text-decoration: none;
            font-weight: 600;
            transition: background 0.2s;
        }
        .post-cta .cta-button:hover { background: #4a6850; }
        .post-back-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: #5D8064;
            text-decoration: none;
            font-weight: 500;
            margin-top: 2rem;
        }
        .post-back-link:hover { text-decoration: underline; }
        @media (max-width: 640px) {
            .post-title { font-size: 1.625rem; }
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <div class="container">
                <div class="logo">
                    <img src="../assets/images/logo-placeholder.svg" alt="Umana - Plataforma de Salud Mental" class="logo-img">
                </div>
                <ul class="nav-menu">
                    <li><a href="../index.html">Inicio</a></li>
                    <li><a href="../index.html#quienes-somos">Qui&#233;nes Somos</a></li>
                    <li><a href="../index.html#servicios">Servicios</a></li>
                    <li><a href="../recursos.html">Recursos</a></li>
                    <li><a href="../index.html#contacto">Contacto</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <div class="post-container">
            <div class="post-breadcrumb">
                <a href="../index.html">Inicio</a> /
                <a href="../recursos.html">Recursos</a> /
                <span>${esc(post.title)}</span>
            </div>

            <span class="post-category-badge">${esc(post.categoryLabel || post.category)}</span>
            <h1 class="post-title">${esc(post.title)}</h1>
            <div class="post-meta">
                <span>&#128197; ${esc(dateStr)}</span>
                <span>&#9200; ${esc(post.readTime || '')}</span>
            </div>

            <img class="post-hero-image" src="${imgSrc}" alt="${imgAlt}" loading="lazy">

            <div class="post-body">
                ${post.content || ''}
            </div>

            <div class="post-cta">
                <h3>&#191;Necesitas apoyo profesional?</h3>
                <p>Nuestros terapeutas certificados est&#225;n listos para acompa&#241;arte en tu camino hacia el bienestar. Sesiones 100% online, confidenciales y personalizadas.</p>
                <a href="../index.html#contacto" class="cta-button">Agenda tu consulta</a>
            </div>

            <a href="../recursos.html" class="post-back-link">&#8592; Volver a Recursos</a>
        </div>
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <p>&copy; 2026 Umana - Plataforma de Salud Mental. Todos los derechos reservados.</p>
                    <p class="privacy">Tu informaci&#243;n es confidencial y est&#225; protegida.</p>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
`;
}

let count = 0;
for (const post of posts) {
  if (!post.id) continue;
  const html = generateHtml(post);
  const out  = path.join(postsDir, `post-${post.id}.html`);
  fs.writeFileSync(out, html, 'utf8');
  count++;
}

console.log(`✅ ${count} archivos estáticos generados en posts/`);
