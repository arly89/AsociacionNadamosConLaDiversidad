# 📝 Cómo Publicar Noticias

Hay **3 formas** de publicar noticias en el sitio. Te explico cada una:

## 🎯 Opción 1: Panel de Administración (Para Producción)

El panel `/admin` está disponible en `http://localhost:4321/admin`, pero funciona mejor cuando el sitio está desplegado en producción.

### Para usar en producción:

1. **Despliega el sitio** en Cloudflare Pages
2. **Configura GitHub OAuth** (ver `INSTRUCCIONES-DEPLOY.md`)
3. **Actualiza** `public/admin/config.yml` con tu repositorio
4. **Accede a** `https://tu-sitio.pages.dev/admin`
5. **Inicia sesión** con GitHub
6. **Publica noticias** desde el panel

### ⚠️ Nota:
- En local, el panel requiere configuración adicional
- **Recomendación:** Para desarrollo local, usa la Opción 2 (editar .md directamente)

---

## 🎯 Opción 2: Editar Archivos Markdown Directamente (Más Simple)

Esta es la forma **más sencilla** y no requiere configuración:

1. **Crea un nuevo archivo** en `src/content/noticias/`
   - Nombre: `mi-noticia.md` (usa un nombre descriptivo)

2. **Copia este formato:**

```markdown
---
title: "Título de tu noticia"
description: "Breve descripción que aparecerá en el listado"
pubDate: 2024-03-15
author: "Asociación Nadamos con la Diversidad"
heroImage: "/images/mi-imagen.jpg"  # Opcional
---

Aquí escribes el contenido de la noticia en **Markdown**.

Puedes usar:
- **Negrita**
- *Cursiva*
- Listas
- Enlaces
- Imágenes

## Subtítulos

Y más contenido...
```

3. **Guarda el archivo**
4. **El servidor de desarrollo se recargará automáticamente**
5. **Ve a** `http://localhost:4321/noticias` para ver tu noticia

### Ventajas:
- ✅ No requiere configuración
- ✅ Funciona inmediatamente
- ✅ Puedes usar tu editor favorito
- ✅ Control total sobre el formato

---

## 🎯 Opción 3: Panel de Administración en Producción (Para el Sitio Desplegado)

Cuando el sitio esté desplegado en Cloudflare Pages:

1. **Configura GitHub OAuth** (ver `INSTRUCCIONES-DEPLOY.md`)
2. **Actualiza** `public/admin/config.yml` con tu repositorio
3. **Accede a** `https://tu-sitio.pages.dev/admin`
4. **Inicia sesión** con GitHub
5. **Publica noticias** desde el panel

### ⚠️ Nota:
Esta opción requiere configuración de OAuth y solo funciona cuando el sitio está desplegado.

---

## 📋 Resumen Rápido

| Método | Dificultad | Requiere Config | Mejor Para |
|--------|-----------|----------------|------------|
| **Editar .md directamente** | ⭐ Fácil | ❌ No | Desarrollo local |
| **Panel local con proxy** | ⭐⭐ Media | ✅ Sí (proxy) | Desarrollo local con UI |
| **Panel en producción** | ⭐⭐⭐ Avanzado | ✅ Sí (OAuth) | Producción |

---

## 💡 Recomendación

**Para empezar:** Usa la **Opción 2** (editar archivos .md directamente). Es la más simple y funciona perfectamente.

**Si prefieres una interfaz visual:** Configura la **Opción 1** (panel local con proxy).

---

## 🆘 Solución de Problemas

### El panel /admin no carga
- Verifica que el servidor de desarrollo esté corriendo (`npm run dev`)
- Asegúrate de que `public/admin/index.html` existe
- Revisa la consola del navegador para errores

### El proxy no funciona
- Asegúrate de que `netlify-cms-proxy-server` esté instalado
- Verifica que el proxy esté corriendo en otra terminal
- Usa la Opción 2 (editar .md directamente) como alternativa

### Las noticias no aparecen
- Verifica que el archivo esté en `src/content/noticias/`
- Revisa que el frontmatter (metadatos) esté correcto
- Asegúrate de que la fecha (`pubDate`) sea válida

