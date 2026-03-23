# 📋 Guía: Cómo subir los archivos a tu página web

Esta guía te explica **paso a paso** cómo poner los archivos necesarios en tu repositorio `umana-salud-mental.github.io` para que tu blog sea indexado correctamente por Google.

---

## 🗂️ Archivos que necesitas subir

Estos son los 5 archivos que debes agregar/reemplazar en tu repositorio:

| Archivo | Acción | Enlace de descarga |
|---------|--------|--------------------|
| `post.html` | ✅ Nuevo (créalo) | [⬇️ Descargar post.html](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/post.html) |
| `posts.json` | ✅ Nuevo (créalo) | [⬇️ Descargar posts.json](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/posts.json) |
| `robots.txt` | ✅ Nuevo (créalo) | [⬇️ Descargar robots.txt](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/robots.txt) |
| `sitemap.xml` | ✅ Nuevo (créalo) | [⬇️ Descargar sitemap.xml](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/sitemap.xml) |
| `recursos.html` | 🔄 Reemplazar el existente | [⬇️ Descargar recursos.html](https://raw.githubusercontent.com/alexkkhg19m-dotcom/Umana/copilot/fix-noindex-tag-issue/recursos.html) |

---

## 🔑 Opción A: Dar acceso a tu otra cuenta (recomendado)

Esta opción es la más práctica a largo plazo porque te permitirá hacer cambios desde cualquiera de tus dos cuentas.

### Paso 1 — Inicia sesión con la cuenta original

1. Abre tu navegador
2. Ve a **https://github.com**
3. Haz clic en **"Sign in"** (arriba a la derecha)
4. Ingresa con la cuenta **`Umana-Salud-Mental`** (la cuenta con la que creaste la página web)

### Paso 2 — Ve a la configuración del repositorio

1. Después de iniciar sesión, ve a:
   👉 **https://github.com/Umana-Salud-Mental/umana-salud-mental.github.io**
2. Haz clic en la pestaña **"Settings"** (Configuración) — es la última pestaña en la barra superior del repositorio
3. En el menú izquierdo, haz clic en **"Collaborators"** (Colaboradores)

### Paso 3 — Invita a tu otra cuenta

1. Haz clic en el botón verde **"Add people"**
2. En el cuadro de búsqueda, escribe: `alexkkhg19m-dotcom`
3. Selecciona el usuario que aparece en los resultados
4. Haz clic en **"Add alexkkhg19m-dotcom to this repository"**
5. ¡Listo! GitHub enviará una invitación

### Paso 4 — Acepta la invitación

1. Cierra sesión de la cuenta `Umana-Salud-Mental`
2. Inicia sesión con la cuenta `alexkkhg19m-dotcom`
3. Ve a **https://github.com/notifications** — deberías ver una notificación de invitación
4. Haz clic en la invitación y acepta
5. Ahora tienes acceso al repositorio desde `alexkkhg19m-dotcom`

---

## 📤 Opción B: Subir los archivos manualmente desde la web

Esta es la opción más sencilla si no quieres cambiar configuraciones de acceso. Solo necesitas iniciar sesión con la cuenta `Umana-Salud-Mental`.

### Antes de empezar: descarga los 5 archivos

1. Haz clic en cada enlace de la tabla de arriba (**"Descargar..."**)
2. Cuando se abra la página del archivo, presiona **`Ctrl + S`** (Windows/Linux) o **`Cmd + S`** (Mac) para guardar el archivo
3. **Importante:** Guarda cada archivo con exactamente el mismo nombre que tiene (por ejemplo, `post.html`, no `post.txt`)
4. Guárdalos en una carpeta que recuerdes (por ejemplo, en tu Escritorio)

> ⚠️ **Tip:** Cuando guardes desde el navegador, asegúrate de que el "Tipo de archivo" sea **"Todos los archivos"** y NO cambie la extensión automáticamente.

---

### 📄 Paso a paso: Subir `post.html` (archivo nuevo)

1. Ve a 👉 **https://github.com/Umana-Salud-Mental/umana-salud-mental.github.io**
2. Haz clic en el botón **"Add file"** (botón verde con un `+`, arriba a la derecha)
3. Selecciona **"Upload files"** del menú desplegable
4. Arrastra el archivo `post.html` al área que dice *"Drag files here to add them..."* o haz clic en **"choose your files"** y búscalo en tu computadora
5. Más abajo verás una sección **"Commit changes"**:
   - En el primer campo escribe: `Agregar post.html para entradas del blog`
   - Deja seleccionada la opción **"Commit directly to the `main` branch"**
6. Haz clic en el botón verde **"Commit changes"**
7. ✅ ¡Archivo subido!

---

### 📄 Repetir para `posts.json` (archivo nuevo)

Repite exactamente los mismos pasos del paso anterior, pero con el archivo `posts.json`:

1. Clic en **"Add file"** → **"Upload files"**
2. Sube `posts.json`
3. Mensaje del commit: `Agregar posts.json con datos de artículos`
4. Clic en **"Commit changes"**

---

### 📄 Repetir para `robots.txt` (archivo nuevo)

1. Clic en **"Add file"** → **"Upload files"**
2. Sube `robots.txt`
3. Mensaje del commit: `Agregar robots.txt para permitir indexación en Google`
4. Clic en **"Commit changes"**

---

### 📄 Repetir para `sitemap.xml` (archivo nuevo)

1. Clic en **"Add file"** → **"Upload files"**
2. Sube `sitemap.xml`
3. Mensaje del commit: `Agregar sitemap.xml para SEO`
4. Clic en **"Commit changes"**

---

### 🔄 Reemplazar `recursos.html` (archivo existente)

Este es diferente porque el archivo **ya existe** y necesitas **reemplazarlo**:

1. Ve a 👉 **https://github.com/Umana-Salud-Mental/umana-salud-mental.github.io/blob/main/recursos.html**
2. Haz clic en el ícono del **lápiz ✏️** (arriba a la derecha del contenido del archivo) — dice *"Edit this file"*
3. **Selecciona todo** el texto del editor con `Ctrl + A` (Windows/Linux) o `Cmd + A` (Mac) y bórralo
4. Ahora abre el archivo `recursos.html` que descargaste en tu computadora con un editor de texto (por ejemplo, Bloc de Notas en Windows, TextEdit en Mac)
5. **Selecciona todo** el contenido con `Ctrl + A` y cópialo con `Ctrl + C`
6. Vuelve a la pestaña de GitHub y **pega** el contenido con `Ctrl + V`
7. Más abajo verás **"Commit changes"**:
   - Mensaje: `Actualizar recursos.html con enlaces a artículos del blog`
   - Selecciona **"Commit directly to the `main` branch"**
8. Clic en **"Commit changes"**
9. ✅ ¡Archivo actualizado!

---

## ✅ Verificar que todo funciona

Después de subir los 5 archivos, espera 1-2 minutos para que GitHub Pages actualice el sitio y luego:

1. Abre en tu navegador: `https://umana-salud-mental.github.io/post.html?id=mn3lqa3fk2gvdsqxajo`
   - Debería mostrarte el artículo **"10 Técnicas Efectivas para Manejar la Ansiedad"** ✅
2. Abre: `https://umana-salud-mental.github.io/robots.txt`
   - Debería mostrar el texto `User-agent: *` ✅
3. Abre: `https://umana-salud-mental.github.io/sitemap.xml`
   - Debería mostrar una lista de URLs en formato XML ✅

---

## 🔍 Paso final: Volver a pedir indexación en Google Search Console

Una vez que los archivos estén subidos y el sitio esté funcionando:

1. Ve a 👉 **https://search.google.com/search-console/**
2. Selecciona tu propiedad (`umana-salud-mental.github.io`)
3. En el menú izquierdo, haz clic en **"Inspección de URL"**
4. En la barra de búsqueda superior, pega: `https://umana-salud-mental.github.io/post.html?id=mn3lqa3fk2gvdsqxajo`
5. Presiona Enter
6. Haz clic en **"Solicitar indexación"**
7. ¡Listo! Google revisará la página y la agregará a su índice en los próximos días

### También envía el Sitemap:
1. En el menú izquierdo de Search Console, haz clic en **"Sitemaps"**
2. En el campo "Agregar un sitemap nuevo", escribe: `sitemap.xml`
3. Haz clic en **"Enviar"**

---

## ❓ Preguntas frecuentes

**¿Cuánto tiempo tarda en indexarse?**
Google puede tardar entre unos días y 2 semanas en indexar la página después de que solicites la indexación.

**¿Tengo que hacer esto para cada artículo nuevo?**
No. Con `post.html` y `posts.json` ya configurados, solo necesitas agregar los nuevos artículos al archivo `posts.json` y automáticamente estarán disponibles en su URL correspondiente.

**¿Qué pasa si me equivoco al subir un archivo?**
No te preocupes. GitHub guarda un historial de todos los cambios y siempre puedes revertir a una versión anterior haciendo clic en "History" en el archivo.
