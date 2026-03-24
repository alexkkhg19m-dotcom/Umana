# 📋 Instrucciones para subir los archivos al sitio web de Umana

Estos son los archivos que necesitas subir a tu repositorio en GitHub para que Google pueda indexar los artículos del blog. Son **5 archivos**. Tarda unos **10 minutos**.

Inicia sesión con la cuenta **`Umana-Salud-Mental`** antes de empezar.

---

## 📥 Paso 1 — Descarga los 5 archivos a tu computadora

Haz clic en cada enlace y guarda el archivo con su nombre original:

| # | Archivo | Descarga directa | Acción |
|---|---------|-----------------|--------|
| 1 | `post.html` | [⬇️ Descargar post.html](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/post.html) | Archivo nuevo |
| 2 | `posts.json` | [⬇️ Descargar posts.json](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/posts.json) | Archivo nuevo |
| 3 | `robots.txt` | [⬇️ Descargar robots.txt](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/robots.txt) | Archivo nuevo |
| 4 | `sitemap.xml` | [⬇️ Descargar sitemap.xml](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/sitemap.xml) | Archivo nuevo |
| 5 | `recursos.html` | [⬇️ Descargar recursos.html](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/recursos.html) | Reemplaza el existente |

> **Cómo guardar cada archivo:** Al hacer clic en el enlace se abrirá el texto en el navegador. Presiona **`Ctrl + S`** (Windows) o **`Cmd + S`** (Mac), elige la carpeta donde guardarlo y asegúrate de que el nombre sea exactamente como está en la tabla (por ejemplo `post.html`, no `post.txt`). En el diálogo de "Tipo", selecciona **"Todos los archivos"** para evitar que Windows agregue `.txt` al final.

---

## 📤 Paso 2 — Sube los primeros 4 archivos (nuevos)

Ve a 👉 **https://github.com/Umana-Salud-Mental/umana-salud-mental.github.io**

1. Haz clic en el botón **"Add file"** → **"Upload files"**

   ![Botón Add file](https://docs.github.com/assets/cb-77170/mw-1440/images/help/repository/upload-files-button.webp)

2. Arrastra los **4 archivos** de una vez al área punteada (o haz clic en "choose your files"):
   - `post.html`
   - `posts.json`
   - `robots.txt`
   - `sitemap.xml`

3. En la sección **"Commit changes"** que aparece abajo:
   - Mensaje: `Agregar archivos para indexación en Google`
   - Selecciona: **"Commit directly to the `main` branch"**

4. Haz clic en el botón verde **"Commit changes"**

✅ ¡Los 4 archivos están subidos!

---

## 🔄 Paso 3 — Reemplaza `recursos.html` (archivo existente)

Este paso es diferente porque el archivo ya existe y hay que reemplazar su contenido.

1. Ve a 👉 **https://github.com/Umana-Salud-Mental/umana-salud-mental.github.io/blob/main/recursos.html**

2. Haz clic en el ícono de **lápiz ✏️** (arriba a la derecha del contenido) — "*Edit this file*"

3. Selecciona **todo** el texto del editor con **`Ctrl + A`** (Windows) o **`Cmd + A`** (Mac) y bórralo con **`Delete`**

4. Abre el archivo `recursos.html` que descargaste en el Paso 1 con el Bloc de Notas (Windows) o TextEdit (Mac)

5. Selecciona todo con **`Ctrl + A`**, copia con **`Ctrl + C`**

6. Vuelve a la pestaña de GitHub y pega con **`Ctrl + V`**

7. En la sección **"Commit changes"**:
   - Mensaje: `Actualizar recursos.html con enlaces a los artículos`
   - Selecciona: **"Commit directly to the `main` branch"**

8. Haz clic en el botón verde **"Commit changes"**

✅ ¡`recursos.html` actualizado!

---

## ✅ Paso 4 — Verifica que todo funciona

Espera **2 minutos** para que GitHub Pages actualice el sitio y abre estas URLs:

| URL | Qué deberías ver |
|-----|-----------------|
| https://umana-salud-mental.github.io/post.html?id=mn3lqa3fk2gvdsqxajo | Artículo: "10 Técnicas Efectivas para Manejar la Ansiedad" |
| https://umana-salud-mental.github.io/robots.txt | Texto con `User-agent: *` |
| https://umana-salud-mental.github.io/sitemap.xml | Lista de URLs en formato XML |

Si las tres funcionan, ¡ya está todo listo! 🎉

---

## 🔍 Paso 5 — Solicitar indexación en Google Search Console

1. Ve a 👉 **https://search.google.com/search-console/**
2. Selecciona la propiedad `umana-salud-mental.github.io`
3. En el menú izquierdo: **"Inspección de URL"**
4. Pega en la barra: `https://umana-salud-mental.github.io/post.html?id=mn3lqa3fk2gvdsqxajo`
5. Presiona Enter y haz clic en **"Solicitar indexación"**

### Envía también el Sitemap:
1. En el menú izquierdo: **"Sitemaps"**
2. Escribe `sitemap.xml` en el campo y haz clic en **"Enviar"**

---

## ❓ Preguntas frecuentes

**¿Cuánto tarda Google en indexar?**
Entre unos días y 2 semanas después de solicitar la indexación.

**¿Tengo que repetir esto para cada artículo nuevo?**
No. Solo hay que agregar la entrada nueva en `posts.json` y automáticamente tendrá su URL.

**¿Me equivoqué al subir un archivo?**
Sin problema. GitHub guarda todo el historial. Puedes repetir el proceso y subir la versión correcta encima.

