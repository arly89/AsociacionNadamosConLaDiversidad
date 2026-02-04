# Asociación Nadamos con la Diversidad

Sitio web oficial de la Asociación Nadamos con la Diversidad, una organización sin ánimo de lucro dedicada a promover la inclusión y la diversidad a través de la natación.

## 🚀 Tecnologías

- **Astro** - Framework web moderno
- **Tailwind CSS** - Estilos utilitarios
- **Decap CMS** (Netlify CMS) - Sistema de gestión de contenido
- **Markdown** - Formato para las noticias del blog

## 📋 Requisitos previos

- Node.js 18 o superior
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio o descarga los archivos
2. Instala las dependencias:

```bash
npm install
```

## 🏃 Ejecutar en local

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 📝 Publicar una noticia

### Opción 1: Desde el panel de administración (Decap CMS)

**Nota importante:** Decap CMS requiere configuración adicional para funcionar con Cloudflare Pages. La forma más sencilla es editar directamente en GitHub (Opción 2).

Si quieres usar Decap CMS:

1. Configura OAuth en GitHub (ver `INSTRUCCIONES-DEPLOY.md`)
2. Actualiza `public/admin/config.yml` con tu información de repositorio
3. Accede a `/admin` en tu navegador
4. Inicia sesión con tu cuenta de GitHub
5. Haz clic en "Noticias" → "New Noticia"
6. Completa los campos:
   - Título
   - Fecha de publicación
   - Descripción
   - Autor (por defecto: "Asociación Nadamos con la Diversidad")
   - Imagen destacada (opcional)
   - Cuerpo de la noticia (en Markdown)
7. Haz clic en "Publish"

### Opción 2: Crear archivo Markdown manualmente

1. Crea un nuevo archivo en `src/content/noticias/` con el nombre que quieras (por ejemplo: `mi-noticia.md`)
2. Usa este formato:

```markdown
---
title: "Título de la noticia"
description: "Breve descripción"
pubDate: 2024-03-15
author: "Asociación Nadamos con la Diversidad"
heroImage: "/images/ruta-imagen.jpg"  # Opcional
---

Contenido de la noticia en Markdown aquí...
```

3. Guarda el archivo y la noticia aparecerá automáticamente en el sitio

## 🏗️ Construir para producción

Para generar la versión de producción:

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `dist/`

## 🌐 Desplegar en Cloudflare Pages

### Configuración inicial

1. **Preparar el repositorio:**
   - Asegúrate de que tu código está en un repositorio de GitHub
   - El repositorio debe ser público o tener acceso configurado para Cloudflare

2. **Configurar Cloudflare Pages:**
   - Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Selecciona "Pages" en el menú lateral
   - Haz clic en "Create a project"
   - Conecta tu repositorio de GitHub
   - Configura el build:
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Root directory:** `/` (o deja vacío)

3. **Variables de entorno (si es necesario):**
   - En la configuración del proyecto, ve a "Settings" → "Environment variables"
   - Añade las variables que necesites

4. **Desplegar:**
   - Cloudflare Pages desplegará automáticamente cada vez que hagas push a la rama principal
   - También puedes desplegar manualmente desde el dashboard

### Configurar Decap CMS con Cloudflare Pages

**Recomendación:** Para Cloudflare Pages, la forma más sencilla es editar las noticias directamente en GitHub (ver abajo). Decap CMS requiere configuración adicional de OAuth.

Si quieres usar Decap CMS:

1. **Configurar GitHub OAuth:**
   - Ve a GitHub → Settings → Developer settings → OAuth Apps
   - Crea una nueva OAuth App
   - Authorization callback URL: `https://tu-sitio.pages.dev/admin/`
   - Copia el Client ID

2. **Actualizar configuración:**
   - Edita `public/admin/config.yml`
   - Cambia `repo: tu-usuario/tu-repositorio` por tu información real
   - Cambia `base_url` por tu URL de Cloudflare Pages

3. **Alternativa más sencilla - Editar en GitHub:**
   - Ve a `src/content/noticias/` en GitHub
   - Crea o edita archivos `.md` directamente
   - Haz commit y push
   - Cloudflare Pages reconstruirá automáticamente
   - Esta es la opción más recomendada para Cloudflare Pages

## 📁 Estructura del proyecto

```
.
├── public/
│   ├── admin/          # Panel de administración Decap CMS
│   ├── estatutos.pdf   # Estatutos de la asociación
│   └── favicon.svg     # Icono del sitio
├── src/
│   ├── components/     # Componentes reutilizables
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/        # Contenido en Markdown
│   │   ├── config.ts   # Configuración de colecciones
│   │   └── noticias/   # Noticias del blog
│   ├── layouts/        # Plantillas base
│   │   └── BaseLayout.astro
│   └── pages/          # Páginas del sitio
│       ├── index.astro
│       ├── quienes-somos.astro
│       ├── hazte-socio.astro
│       ├── noticias/
│       ├── estatutos.astro
│       └── contacto.astro
├── astro.config.mjs    # Configuración de Astro
├── tailwind.config.mjs # Configuración de Tailwind
└── package.json
```

## 🎨 Personalización

### Colores

Los colores del arcoíris están definidos en `tailwind.config.mjs`. Puedes modificarlos según tus necesidades.

### Contenido

- **Cuota de socio:** Edita el archivo `src/pages/hazte-socio.astro` para cambiar el precio
- **Datos bancarios:** Actualiza la información en `src/pages/hazte-socio.astro`
- **Información de contacto:** Modifica `src/pages/contacto.astro` y `src/components/Footer.astro`

## 📞 Soporte

Si tienes problemas o preguntas sobre el sitio web, contacta con:
- Email: contacto@nadamosdiversidad.org
- Teléfono: +34 600 123 456

## 📄 Licencia

Este proyecto es propiedad de la Asociación Nadamos con la Diversidad.

---

**Desarrollado con ❤️ para promover la inclusión y la diversidad**

