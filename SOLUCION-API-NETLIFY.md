# 🔧 Solución: Decap CMS intenta usar API de Netlify

## Problema

Cuando haces clic en "Iniciar sesión con GitHub", Decap CMS intenta usar:
```
https://api.netlify.com/auth?provider=github&...
```

Y muestra "Not Found" porque tu sitio está en **Cloudflare Pages**, no en Netlify.

## Causa

Decap CMS está detectando incorrectamente que debería usar Netlify Identity o Git Gateway, cuando en realidad debería usar **GitHub directamente con PKCE**.

## Solución: Forzar uso de GitHub

He actualizado la configuración para forzar que Decap CMS use GitHub directamente:

### Cambios realizados:

1. **Actualizado `config.yml`** - Añadido `base_url` explícito
2. **Actualizado `index.html`** - Inicialización manual que fuerza el uso de GitHub backend

### Paso 1: Crear OAuth App en GitHub (OBLIGATORIO)

Aunque PKCE no requiere Client Secret, **SÍ necesitas crear la OAuth App**:

1. Ve a: **https://github.com/settings/developers**
2. Haz clic en **"OAuth Apps"** → **"New OAuth App"**
3. Completa:
   - **Application name:** `Asociación Nadamos CMS`
   - **Homepage URL:** `https://asociacionnadamosconladiversidad.pages.dev`
   - **Authorization callback URL:** `https://asociacionnadamosconladiversidad.pages.dev/admin/`
4. Haz clic en **"Register application"**
5. **Copia el Client ID** (lo necesitarás)

### Paso 2: Añadir Client ID a la configuración

Después de crear la OAuth App, actualiza `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: arly89/AsociacionNadamosConLaDiversidad
  branch: main
  base_url: https://asociacionnadamosconladiversidad.pages.dev
  auth_type: pkce
  app_id: TU_CLIENT_ID_AQUI  # ← Añade esto con tu Client ID

site_url: https://asociacionnadamosconladiversidad.pages.dev
```

Y también actualiza `public/admin/index.html` en la línea del `app_id`:

```javascript
window.CMS_MANUAL_INIT = true;
CMS.init({
  config: {
    backend: {
      name: 'github',
      repo: 'arly89/AsociacionNadamosConLaDiversidad',
      branch: 'main',
      base_url: 'https://asociacionnadamosconladiversidad.pages.dev',
      auth_type: 'pkce',
      app_id: 'TU_CLIENT_ID_AQUI'  // ← Añade esto
    },
    site_url: 'https://asociacionnadamosconladiversidad.pages.dev',
    load_config_file: true
  }
});
```

### Paso 3: Hacer commit y push

```bash
git add public/admin/config.yml public/admin/index.html
git commit -m "fix: forzar uso de GitHub backend en lugar de Netlify API"
git push origin main
```

### Paso 4: Probar

1. Espera 1-2 minutos a que Cloudflare Pages reconstruya
2. Ve a: `https://asociacionnadamosconladiversidad.pages.dev/admin`
3. Haz clic en **"Iniciar sesión con GitHub"**
4. **Ahora debería redirigirte a:** `https://github.com/login/oauth/authorize?...` (GitHub, no Netlify)

## ¿Por qué funciona ahora?

1. **Inicialización manual:** Forzamos que Decap CMS use GitHub backend desde el inicio
2. **No detecta Netlify:** Al especificar explícitamente el backend, no intenta usar Netlify
3. **OAuth App configurada:** GitHub sabe cómo manejar la autenticación
4. **PKCE habilitado:** Autenticación segura sin necesidad de Client Secret

## Verificación

Después de los cambios, cuando hagas clic en "Iniciar sesión", deberías ver:

✅ **Correcto:** `https://github.com/login/oauth/authorize?...`  
❌ **Incorrecto:** `https://api.netlify.com/auth?...`

## Si aún no funciona

1. **Verifica la consola del navegador** (F12 → Console) para ver errores
2. **Verifica que la OAuth App esté creada** con la callback URL correcta
3. **Verifica que el Client ID esté correcto** en ambos archivos
4. **Limpia la caché del navegador** y prueba en modo incógnito

## Resumen

- ✅ Configuración actualizada para forzar GitHub backend
- ⏳ **Pendiente:** Crear OAuth App en GitHub
- ⏳ **Pendiente:** Añadir Client ID a la configuración
- ⏳ **Pendiente:** Hacer commit y push
- ⏳ **Pendiente:** Probar autenticación

