# 🚀 Guía Rápida: Panel de Administración

## ✅ Forma Más Sencilla (Recomendada)

**Edita los archivos Markdown directamente** - No necesitas el panel `/admin` para esto:

1. Ve a la carpeta `src/content/noticias/`
2. Crea un archivo nuevo: `mi-noticia.md`
3. Copia este formato:

```markdown
---
title: "Mi Noticia"
description: "Descripción breve"
pubDate: 2024-03-15
author: "Asociación Nadamos con la Diversidad"
---

Contenido de la noticia aquí...
```

4. Guarda y listo ✅

---

## 🎨 Panel `/admin` - Información

El panel de administración está disponible en:
- **URL local:** `http://localhost:4321/admin`
- **URL producción:** `https://tu-sitio.pages.dev/admin` (después de desplegar)

### ⚠️ Importante sobre el Panel en Local

El panel `/admin` (Decap CMS) está diseñado principalmente para funcionar en producción con GitHub. 

**Para desarrollo local:**
- ✅ **Recomendado:** Edita los archivos `.md` directamente (más simple y rápido)
- ⚠️ El panel en local requiere configuración adicional de OAuth o proxy

**Para producción:**
- El panel funcionará perfectamente cuando el sitio esté desplegado
- Necesitarás configurar GitHub OAuth (ver `INSTRUCCIONES-DEPLOY.md`)

---

## 💡 Recomendación

**En local:** Edita los archivos Markdown directamente en `src/content/noticias/`

**En producción:** Usa el panel `/admin` una vez desplegado y configurado

