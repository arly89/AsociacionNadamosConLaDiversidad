# 🚀 Guía Completa: Subir a Git y Desplegar en Cloudflare Pages

Esta guía te llevará paso a paso desde el estado actual del proyecto hasta tenerlo publicado en Cloudflare Pages y poder publicar noticias.

## 📋 Estado Actual del Proyecto

✅ **Completado:**
- Proyecto Astro configurado
- Estructura de noticias con Content Collections
- Panel de administración Decap CMS configurado
- Repositorio Git inicializado y conectado a GitHub
- Documentación básica creada

⚠️ **Pendiente:**
- Hacer commit de todos los archivos nuevos
- Subir cambios a GitHub
- Configurar Cloudflare Pages
- Actualizar URL en configuración de Decap CMS
- Probar publicación de noticias

---

## 📝 PASO 1: Preparar y Subir a Git

### 1.1 Verificar archivos pendientes

Ejecuta en la terminal:
```bash
git status
```

Deberías ver archivos sin commitear. Vamos a añadirlos todos.

### 1.2 Añadir todos los archivos al staging

```bash
git add .
```

### 1.3 Hacer commit inicial

```bash
git commit -m "feat: configuración inicial del proyecto Astro con sistema de noticias"
```

### 1.4 Subir a GitHub

```bash
git push origin main
```

Si es la primera vez, GitHub puede pedirte autenticación. Usa un Personal Access Token si es necesario.

---

## 🌐 PASO 2: Configurar Cloudflare Pages

### 2.1 Crear cuenta en Cloudflare (si no tienes)

1. Ve a [https://dash.cloudflare.com/](https://dash.cloudflare.com/)
2. Crea una cuenta gratuita (si no tienes una)
3. Verifica tu email

### 2.2 Conectar repositorio

1. En el dashboard de Cloudflare, ve a **"Pages"** en el menú lateral
2. Haz clic en **"Create a project"**
3. Selecciona **"Connect to Git"**
4. Autoriza Cloudflare para acceder a tu cuenta de GitHub
5. Selecciona el repositorio: `arly89/AsociacionNadamosConLaDiversidad`

### 2.3 Configurar el Build

En la pantalla de configuración, establece:

- **Framework preset:** `Astro` (o déjalo en blanco)
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (dejar vacío)
- **Node version:** `18` o superior (selecciona la más reciente disponible)

### 2.4 Desplegar

1. Haz clic en **"Save and Deploy"**
2. Espera a que termine el build (puede tardar 2-5 minutos)
3. Una vez completado, tu sitio estará disponible en: `https://asociacion-nadamos-diversidad.pages.dev` (o similar)

**⚠️ IMPORTANTE:** Anota la URL que te asigne Cloudflare, la necesitarás en el siguiente paso.

---

## ⚙️ PASO 3: Actualizar Configuración de Decap CMS

### 3.1 Actualizar URL en config.yml

Una vez que tengas la URL de tu sitio en Cloudflare Pages:

1. Abre el archivo `public/admin/config.yml`
2. Busca la línea: `base_url: https://your-site.pages.dev`
3. Reemplázala con tu URL real, por ejemplo:
   ```yaml
   base_url: https://asociacion-nadamos-diversidad.pages.dev
   ```

### 3.2 Hacer commit y push de los cambios

```bash
git add public/admin/config.yml
git commit -m "fix: actualizar URL de Cloudflare Pages en configuración CMS"
git push origin main
```

Cloudflare Pages reconstruirá automáticamente el sitio con la nueva configuración.

---

## 🔐 PASO 4: Configurar GitHub OAuth (Opcional - Para Panel Admin)

**Nota:** Este paso es opcional. Puedes publicar noticias directamente editando archivos `.md` en GitHub sin necesidad de OAuth.

Si quieres usar el panel de administración `/admin` en producción:

### 4.1 Crear OAuth App en GitHub

1. Ve a GitHub → **Settings** → **Developer settings** → **OAuth Apps**
2. Haz clic en **"New OAuth App"**
3. Completa el formulario:
   - **Application name:** `Asociación Nadamos CMS`
   - **Homepage URL:** `https://tu-sitio.pages.dev` (tu URL de Cloudflare)
   - **Authorization callback URL:** `https://tu-sitio.pages.dev/admin/`
4. Haz clic en **"Register application"**
5. **Copia el Client ID** (lo necesitarás después)

### 4.2 Configurar en Cloudflare Pages (si es necesario)

Decap CMS con PKCE generalmente no requiere configuración adicional en Cloudflare, pero si tienes problemas, puedes añadir variables de entorno en Cloudflare Pages:
- Settings → Environment variables

---

## 📰 PASO 5: Probar Publicar Noticias

Tienes **3 opciones** para publicar noticias:

### Opción A: Editar directamente en GitHub (Más Simple) ⭐ RECOMENDADO

1. Ve a tu repositorio en GitHub: `https://github.com/arly89/AsociacionNadamosConLaDiversidad`
2. Navega a `src/content/noticias/`
3. Haz clic en **"Add file"** → **"Create new file"**
4. Nombre el archivo: `mi-primera-noticia.md`
5. Copia este contenido:

```markdown
---
title: "Mi Primera Noticia"
description: "Esta es una noticia de prueba para verificar que todo funciona correctamente"
pubDate: 2024-12-20
author: "Asociación Nadamos con la Diversidad"
heroImage: "/images/noticia-ejemplo.jpg"  # Opcional
---

¡Bienvenidos a nuestro sitio web!

Esta es una noticia de prueba. Puedes editar este contenido y añadir más información.

## Subtítulo

Puedes usar **negrita**, *cursiva*, y más formato Markdown.

- Lista de elementos
- Otro elemento
- Y más elementos
```

6. Haz clic en **"Commit new file"**
7. Espera 1-2 minutos a que Cloudflare Pages reconstruya el sitio
8. Visita `https://tu-sitio.pages.dev/noticias` para ver tu noticia

### Opción B: Panel de Administración (Requiere OAuth)

1. Ve a `https://tu-sitio.pages.dev/admin`
2. Inicia sesión con GitHub
3. Haz clic en **"Noticias"** → **"New Noticia"**
4. Completa el formulario
5. Haz clic en **"Publish"**

### Opción C: Editar localmente y hacer push

1. Crea un archivo en `src/content/noticias/mi-noticia.md`
2. Usa el mismo formato que en la Opción A
3. Haz commit y push:
   ```bash
   git add src/content/noticias/mi-noticia.md
   git commit -m "feat: añadir nueva noticia"
   git push origin main
   ```

---

## ✅ Checklist Final

Antes de considerar el proyecto completo, verifica:

- [ ] Todos los archivos están en GitHub
- [ ] El sitio está desplegado en Cloudflare Pages
- [ ] La URL en `config.yml` está actualizada
- [ ] Has probado publicar una noticia (al menos con la Opción A)
- [ ] El sitio se reconstruye automáticamente cuando haces push
- [ ] Las noticias aparecen correctamente en `/noticias`

---

## 🆘 Solución de Problemas

### El build falla en Cloudflare

- Verifica que `package.json` tenga todas las dependencias
- Revisa los logs de build en Cloudflare Pages
- Asegúrate de que Node.js 18+ esté seleccionado

### Las noticias no aparecen

- Verifica que los archivos `.md` estén en `src/content/noticias/`
- Revisa que el frontmatter (metadatos) esté correcto
- Asegúrate de que la fecha (`pubDate`) sea válida
- Espera 1-2 minutos después del push para que Cloudflare reconstruya

### El panel /admin no funciona

- Verifica que la URL en `config.yml` sea correcta
- Si usas OAuth, asegúrate de que la callback URL sea correcta
- Como alternativa, usa la Opción A (editar en GitHub directamente)

### El sitio no se actualiza después del push

- Verifica que Cloudflare Pages esté conectado a la rama `main`
- Revisa los deployments en Cloudflare Pages
- Puedes forzar un nuevo deployment desde el dashboard

---

## 📚 Recursos Adicionales

- [Documentación de Astro](https://docs.astro.build/)
- [Documentación de Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Documentación de Decap CMS](https://decapcms.org/)
- [Guía de Markdown](https://www.markdownguide.org/)

---

## 🎉 ¡Listo!

Una vez completados estos pasos, tendrás:
- ✅ Sitio web publicado en Cloudflare Pages
- ✅ Sistema de noticias funcionando
- ✅ Capacidad de publicar noticias desde GitHub
- ✅ Panel de administración (si configuraste OAuth)

**Próximos pasos sugeridos:**
- Personalizar el diseño y colores
- Añadir más contenido a las páginas
- Configurar un dominio personalizado
- Añadir más funcionalidades según necesites

---

**¿Necesitas ayuda?** Revisa los otros archivos de documentación:
- `README.md` - Información general del proyecto
- `COMO-PUBLICAR-NOTICIAS.md` - Guía detallada para publicar noticias
- `INSTRUCCIONES-DEPLOY.md` - Instrucciones de despliegue
- `GUIA-RAPIDA-ADMIN.md` - Guía rápida del panel de administración

