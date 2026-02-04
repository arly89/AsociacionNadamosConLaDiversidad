# Configuración para Cloudflare Pages

## Build Settings

Cuando configures el proyecto en Cloudflare Pages, usa estos valores:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (dejar vacío)

## Variables de entorno

No se requieren variables de entorno para el funcionamiento básico del sitio.

## Notas sobre Decap CMS

Cloudflare Pages no tiene soporte nativo para Git Gateway de Decap CMS. Opciones:

1. **Editar directamente en GitHub** (recomendado para simplicidad)
2. **Usar Netlify Identity** (requiere cuenta en Netlify)
3. **Configurar autenticación personalizada** (más complejo)

Para la mayoría de casos, editar las noticias directamente en GitHub es la opción más sencilla y funciona perfectamente con Cloudflare Pages.

