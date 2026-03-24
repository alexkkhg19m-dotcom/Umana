# 🚀 Blog de Umana — Guía completa de publicación y SEO automático

## 🧠 Cómo funciona (resumen)

```
Tú editas posts.json → GitHub Action se activa solo → sitemap.xml se regenera →
Google encuentra los nuevos artículos en su próximo rastreo (cada pocos días) ✅
```

**No necesitas indexar cada artículo manualmente.** Una vez configurado el sitemap en Google Search Console, Google lo re-rastrea automáticamente y descubre los artículos nuevos por su cuenta.

---

## 🔁 Flujo normal para publicar un artículo nuevo

Una vez que hayas hecho el **Setup Inicial** (abajo), publicar un artículo nuevo son **2 pasos**:

### Paso 1 — Agrega el artículo a `posts.json`

1. Ve a 👉 **https://github.com/Umana-Salud-Mental/umana-salud-mental.github.io/blob/main/posts.json**
2. Haz clic en el **lápiz ✏️** para editar el archivo
3. Agrega una nueva entrada al inicio del array `[...]`, siguiendo el mismo formato:

```json
{
  "id": "un-id-unico-aqui",
  "title": "Título de tu artículo",
  "category": "ansiedad",
  "categoryLabel": "Ansiedad",
  "readTime": 5,
  "date": "2026-04-01",
  "featured": false,
  "image": "https://images.unsplash.com/...",
  "imageAlt": "Descripción de la imagen",
  "summary": "Resumen de 1-2 oraciones para las tarjetas.",
  "content": "<p>Contenido HTML del artículo...</p>"
}
```

> **¿Cómo creo el `id`?** Puede ser cualquier texto sin espacios. Por ejemplo: `ansiedad-en-el-trabajo-2026`. Solo debe ser único (diferente a los otros IDs).

4. En "Commit changes": escribe un mensaje como `Nuevo artículo: título del post` → **"Commit directly to main"** → **"Commit changes"**

### Paso 2 — Listo, el sistema hace el resto

En cuanto guardas el commit:
- ✅ El workflow **"Auto-actualizar sitemap"** detecta el cambio en `posts.json`
- ✅ Regenera `sitemap.xml` con la nueva URL del artículo
- ✅ Google encuentra el nuevo artículo en su próximo rastreo (normalmente en pocos días)

**¿Cuándo aparece en Google?** Generalmente entre 3 y 14 días después de publicar.

---

## ⚙️ Setup inicial (hacer una sola vez)

Antes de que el flujo automático funcione, necesitas hacer el setup una vez. Son **3 pasos**.

### Paso 1 — Subir los archivos al sitio en vivo

Tienes dos opciones:

#### Opción A — Manual (no necesitas token) ✅ Recomendado para empezar

Descarga estos 6 archivos y súbelos al repositorio `umana-salud-mental.github.io`:

| Archivo | Descarga | Acción |
|---------|----------|--------|
| `post.html` | [⬇️ Descargar](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/post.html) | Archivo nuevo |
| `posts.json` | [⬇️ Descargar](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/posts.json) | Archivo nuevo |
| `robots.txt` | [⬇️ Descargar](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/robots.txt) | Archivo nuevo |
| `sitemap.xml` | [⬇️ Descargar](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/sitemap.xml) | Archivo nuevo |
| `recursos.html` | [⬇️ Descargar](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/recursos.html) | Reemplaza el existente |
| `generate-sitemap.js` | [⬇️ Descargar](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/generate-sitemap.js) | Archivo nuevo |

**Cómo guardar cada archivo:** Al hacer clic se abre el texto. Presiona `Ctrl + S` (Windows) o `Cmd + S` (Mac). Selecciona **"Todos los archivos"** en el tipo para que no agregue `.txt` al final.

**Subir los 5 archivos nuevos de una sola vez:**
1. Ve a 👉 **https://github.com/Umana-Salud-Mental/umana-salud-mental.github.io**
2. Clic en **"Add file"** → **"Upload files"**
3. Arrastra `post.html`, `posts.json`, `robots.txt`, `sitemap.xml` y `generate-sitemap.js`
4. Mensaje: `Setup inicial: blog, sitemap, robots.txt`
5. Clic en **"Commit changes"**

**Reemplazar `recursos.html`:**
1. Ve a 👉 **https://github.com/Umana-Salud-Mental/umana-salud-mental.github.io/blob/main/recursos.html**
2. Clic en el **lápiz ✏️** → selecciona todo con `Ctrl + A` → borra → pega el contenido del archivo descargado
3. Mensaje: `Actualizar recursos.html` → **"Commit changes"**

**Agregar el workflow de auto-actualización:**
1. Ve a 👉 **https://github.com/Umana-Salud-Mental/umana-salud-mental.github.io**
2. Crea la carpeta `.github/workflows/` navegando a ella (GitHub la crea automáticamente)
3. Clic en **"Add file"** → **"Create new file"**
4. En el campo del nombre escribe: `.github/workflows/sitemap-auto-update.yml`
5. Pega el contenido del archivo [`sitemap-auto-update.yml`](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/.github/workflows/sitemap-auto-update.yml)
6. Mensaje: `Agregar workflow de auto-actualización de sitemap` → **"Commit changes"**

#### Opción B — Automático con token (si quieres hacerlo con un clic)

Requiere crear un Personal Access Token (PAT) para la cuenta `Umana-Salud-Mental`:
1. Ve a 👉 **https://github.com/settings/tokens/new** (con la cuenta `Umana-Salud-Mental`)
2. Nota: `Deploy Umana` | Expiration: `90 days` | Scope: ✅ `repo`
3. Copia el token (`ghp_...`)
4. Ve a 👉 **https://github.com/alexkkhg19m-dotcom/Umana/settings/secrets/actions/new**
5. Name: `LIVE_SITE_PAT` | Value: (pega el token) → **"Add secret"**
6. Ve a 👉 **https://github.com/alexkkhg19m-dotcom/Umana/actions/workflows/deploy-live.yml**
7. Clic en **"Run workflow"** → escribe `si` → **"Run workflow"**

---

### Paso 2 — Registrar el sitemap en Google Search Console (una sola vez)

1. Ve a 👉 **https://search.google.com/search-console/**
2. Selecciona la propiedad `umana-salud-mental.github.io`
3. En el menú izquierdo: **"Sitemaps"**
4. Escribe `sitemap.xml` y haz clic en **"Enviar"**

✅ ¡Hecho! Google ahora rastrea el sitemap automáticamente cada pocos días.

---

### Paso 3 — Pedir indexación para los artículos que ya existen (solo esta vez)

Para los 12 artículos que ya existen, Google los encontrará via sitemap, pero puedes acelerar el proceso:

1. En Search Console: **"Inspección de URL"**
2. Pega: `https://umana-salud-mental.github.io/post.html?id=mn3lqa3fk2gvdsqxajo`
3. Clic en **"Solicitar indexación"**
4. Repite para los demás artículos si quieres acelerar (opcional)

---

## ✅ Verificar que todo funciona

Espera 2 minutos después del setup y abre estas URLs:

| URL | Qué ver |
|-----|---------|
| https://umana-salud-mental.github.io/post.html?id=mn3lqa3fk2gvdsqxajo | Artículo completo del blog |
| https://umana-salud-mental.github.io/robots.txt | `User-agent: *` |
| https://umana-salud-mental.github.io/sitemap.xml | Lista de URLs en XML |

---

## ❓ Preguntas frecuentes

**¿Tengo que ir a Google Search Console cada vez que publico?**
No. Solo hay que registrar el sitemap una vez (Paso 2 del setup). Después, Google lo revisa automáticamente cada pocos días y encuentra los nuevos artículos solo.

**¿Cuánto tarda Google en indexar un artículo nuevo?**
Normalmente entre 3 y 14 días después de que el sitemap se actualiza. Depende de la frecuencia con que Google rastree tu sitio.

**¿Cómo creo un ID único para cada artículo?**
Usa el título del artículo en minúsculas, sin acentos, con guiones en lugar de espacios. Ejemplo: `como-superar-la-ansiedad-2026`. También puedes usar cualquier texto corto aleatorio.

**¿Qué pasa si me equivoco en posts.json?**
GitHub guarda todo el historial. Si algo falla, puedes hacer clic en "History" del archivo y revertir al commit anterior.

**¿El sitemap se actualiza solo cuando edito posts.json en el sitio en vivo?**
Sí — el workflow `sitemap-auto-update.yml` que se instaló en el setup hace exactamente eso.

