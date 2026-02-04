# ⚙️ Configuración Detallada de Netlify Identity

## Problema: El email muestra solo la URL del sitio, no el enlace de aceptación

Si en el email de invitación solo aparece la URL del sitio (ej: `https://tu-sitio.netlify.app`) en lugar del enlace completo con token, necesitas configurar correctamente las URLs en Netlify Identity.

---

## 🔧 Solución: Configurar URLs en Netlify Identity

### Paso 1: Acceder a la Configuración de Identity

1. Ve a tu sitio en Netlify: [https://app.netlify.com/](https://app.netlify.com/)
2. Selecciona tu sitio
3. Ve a **"Site settings"** → **"Identity"**
4. Haz clic en **"Settings and usage"** o **"Settings"**

### Paso 2: Configurar Site URL

1. Busca el campo **"Site URL"** o **"Base URL"**
2. Configura: `https://tu-sitio.netlify.app` (tu URL real de Netlify)
3. **IMPORTANTE:** Debe ser `https://` (no `http://`)
4. Debe ser la URL completa (no solo el dominio)

### Paso 3: Configurar Email Templates

1. En **"Identity"** → **"Email templates"**
2. Selecciona **"Invite user"** o **"Invitation email"**
3. Verifica que el template tenga algo como:

```
Haz clic en el siguiente enlace para aceptar la invitación:

{{ .ConfirmationURL }}

O visita: {{ .SiteURL }}/accept-invite?token={{ .Token }}
```

### Paso 4: Configurar Confirmation URL (Si está disponible)

1. En **"Identity"** → **"Settings"**
2. Busca **"Confirmation URL"** o **"Accept Invite URL"**
3. Configura: `https://tu-sitio.netlify.app/accept-invite`
4. Guarda los cambios

### Paso 5: Verificar Git Gateway

Asegúrate de que Git Gateway esté habilitado:

1. En **"Identity"** → **"Services"**
2. Verifica que **"Git Gateway"** esté **"Enabled"**
3. Si no lo está, haz clic en **"Enable Git Gateway"**

---

## ✅ Verificación de config.yml

Tu `public/admin/config.yml` debe tener exactamente:

```yaml
backend:
  name: git-gateway
  branch: main

site_url: https://tu-sitio.netlify.app  # Tu URL real de Netlify

media_folder: public/images
public_folder: /images

collections:
  - name: "noticias"
    label: "Noticias"
    folder: "src/content/noticias"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Título", name: "title", widget: "string" }
      - { label: "Fecha de publicación", name: "pubDate", widget: "datetime" }
      - { label: "Descripción", name: "description", widget: "string" }
      - { label: "Autor", name: "author", widget: "string", default: "Asociación Nadamos con la Diversidad" }
      - { label: "Imagen destacada", name: "heroImage", widget: "image", required: false }
      - { label: "Cuerpo", name: "body", widget: "markdown" }
```

**Puntos importantes:**
- ✅ `name: git-gateway` (NO `github`)
- ✅ `branch: main`
- ✅ `site_url` debe ser tu URL real de Netlify

---

## 🧪 Probar la Configuración

### 1. Enviar una Invitación de Prueba

1. En **"Identity"** → **"Invite users"**
2. Añade un email de prueba
3. Haz clic en **"Send invite"**

### 2. Verificar el Email

El email debe contener un enlace como:
```
https://tu-sitio.netlify.app/accept-invite?token=abc123xyz...
```

**NO debe ser solo:**
```
https://tu-sitio.netlify.app
```

### 3. Si el enlace es incorrecto

1. Verifica que **"Site URL"** esté configurado correctamente
2. Verifica que **"Confirmation URL"** esté configurado como `/accept-invite`
3. Revisa los **"Email templates"** y asegúrate de que usen `{{ .ConfirmationURL }}` o `{{ .SiteURL }}/accept-invite?token={{ .Token }}`

---

## 🔄 Si Nada Funciona

### Opción 1: Usar el Widget de Netlify Identity Directamente

Si los emails no funcionan, puedes usar el widget directamente:

1. Ve a `/admin`
2. Haz clic en **"Login"**
3. Si tienes una invitación pendiente, el widget debería detectarla automáticamente

### Opción 2: Verificar Logs

1. En Netlify, ve a **"Functions"** → **"Logs"**
2. Busca errores relacionados con Identity
3. Revisa si hay problemas con la configuración

### Opción 3: Contactar Soporte de Netlify

Si el problema persiste, contacta con el soporte de Netlify explicando que los emails de invitación no contienen el token correcto.

---

## 📝 Resumen de Configuración

- ✅ `config.yml` con `git-gateway`
- ✅ `site_url` configurado con tu URL de Netlify
- ✅ Identity habilitado
- ✅ Git Gateway habilitado
- ✅ Site URL configurado en Identity settings
- ✅ Email templates configurados correctamente
- ✅ Página `/accept-invite` creada

---

**Después de hacer estos cambios, vuelve a enviar una invitación de prueba para verificar que el enlace sea correcto.**

