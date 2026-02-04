# Instrucciones de Despliegue - Cloudflare Pages

## Paso 1: Preparar el repositorio

1. Crea un repositorio en GitHub (público o privado)
2. Sube todos los archivos del proyecto
3. Asegúrate de que el repositorio tenga al menos un commit

## Paso 2: Configurar Cloudflare Pages

1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Inicia sesión o crea una cuenta
3. En el menú lateral, selecciona **"Pages"**
4. Haz clic en **"Create a project"**
5. Selecciona **"Connect to Git"**
6. Autoriza Cloudflare para acceder a tu cuenta de GitHub
7. Selecciona tu repositorio

## Paso 3: Configurar el Build

En la configuración del proyecto, establece:

- **Framework preset:** `Astro` (o deja en blanco)
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (dejar vacío)
- **Node version:** `18` o superior

## Paso 4: Configurar Decap CMS (Opcional)

### Opción A: Usar GitHub directamente (Recomendado)

1. Edita `public/admin/config.yml` y actualiza:
   - `repo: tu-usuario/tu-repositorio` (tu usuario y nombre del repo)
   - `base_url: https://tu-sitio.pages.dev` (tu URL de Cloudflare Pages)

2. Para autenticación con GitHub:
   - Ve a GitHub → Settings → Developer settings → OAuth Apps
   - Crea una nueva OAuth App
   - Authorization callback URL: `https://tu-sitio.pages.dev/admin/`
   - Copia el Client ID y Client Secret
   - Añádelos como variables de entorno en Cloudflare Pages (si es necesario)

### Opción B: Editar directamente en GitHub

La forma más sencilla es editar los archivos Markdown directamente en GitHub:
- Ve a `src/content/noticias/`
- Crea o edita archivos `.md`
- Cloudflare Pages reconstruirá automáticamente

## Paso 5: Desplegar

1. Cloudflare Pages desplegará automáticamente cuando hagas push a la rama principal
2. También puedes hacer clic en **"Retry deployment"** para forzar un nuevo despliegue
3. Una vez completado, tu sitio estará disponible en `https://tu-proyecto.pages.dev`

## Paso 6: Configurar dominio personalizado (Opcional)

1. En la configuración del proyecto, ve a **"Custom domains"**
2. Añade tu dominio
3. Sigue las instrucciones para configurar los DNS

## Solución de problemas

### El build falla
- Verifica que todas las dependencias estén en `package.json`
- Revisa los logs de build en Cloudflare Pages
- Asegúrate de que Node.js 18+ esté seleccionado

### Decap CMS no funciona
- Verifica la configuración de OAuth en GitHub
- Asegúrate de que `base_url` en `config.yml` sea correcta
- Considera usar la edición directa en GitHub como alternativa

### Las noticias no aparecen
- Verifica que los archivos `.md` estén en `src/content/noticias/`
- Asegúrate de que el frontmatter (metadatos) esté correcto
- Revisa que `src/content/config.ts` esté bien configurado

