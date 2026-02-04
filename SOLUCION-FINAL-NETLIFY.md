# 🔧 Solución Final: Decap CMS sigue redirigiendo a Netlify

## Problema

Aunque ya tienes `app_id` configurado, Decap CMS sigue intentando usar `api.netlify.com/auth` en lugar de GitHub.

## Solución Aplicada

He actualizado `index.html` para **forzar explícitamente** que use GitHub backend con inicialización manual. Esto evita que Decap CMS detecte automáticamente Netlify.

## Pasos para Aplicar

### 1. Hacer commit y push

```bash
git add public/admin/index.html
git commit -m "fix: forzar inicialización GitHub backend para evitar Netlify"
git push origin main
```

### 2. Limpiar caché del navegador

**IMPORTANTE:** Después del deploy, debes:

1. **Abrir en modo incógnito** (Ctrl+Shift+N o Cmd+Shift+N)
2. O **limpiar caché completamente:**
   - Chrome/Edge: Ctrl+Shift+Delete → "Caché e imágenes"
   - Firefox: Ctrl+Shift+Delete → "Caché"
3. O **forzar recarga:** Ctrl+Shift+R (o Cmd+Shift+R en Mac)

### 3. Verificar OAuth App en GitHub

Asegúrate de que tu OAuth App en GitHub tenga:

- **Application name:** `Nadamos CMS` (o el que hayas puesto)
- **Homepage URL:** `https://asociacionnadamosconladiversidad.pages.dev`
- **Authorization callback URL:** `https://asociacionnadamosconladiversidad.pages.dev/admin/`
- **Client ID:** `Ov23liqpQCUYrZjykpK8` (debe coincidir con el de `config.yml`)

### 4. Probar

1. Espera 1-2 minutos después del push
2. Abre en **modo incógnito:** `https://asociacionnadamosconladiversidad.pages.dev/admin`
3. Haz clic en "Iniciar sesión con GitHub"
4. **Debería redirigirte a:** `https://github.com/login/oauth/authorize?...` (GitHub, NO Netlify)

## ¿Por qué funciona ahora?

1. **Inicialización manual explícita:** Forzamos que Decap CMS use GitHub desde el inicio
2. **app_id especificado:** Decap CMS sabe exactamente qué OAuth App usar
3. **No detecta Netlify:** Al especificar todo explícitamente, no intenta usar Netlify

## Si AÚN no funciona

### Verificación 1: Consola del navegador

1. Abre herramientas de desarrollador (F12)
2. Ve a la pestaña "Console"
3. Intenta iniciar sesión
4. Revisa si hay errores relacionados con:
   - `api.netlify.com`
   - `backend`
   - `auth`

### Verificación 2: Verificar archivo desplegado

1. Ve a: `https://asociacionnadamosconladiversidad.pages.dev/admin/config.yml`
2. Verifica que el archivo tenga:
   - `name: github`
   - `app_id: Ov23liqpQCUYrZjykpK8`
   - NO debe tener `base_url` en el backend

### Verificación 3: Verificar OAuth App

1. Ve a: https://github.com/settings/developers
2. Abre tu OAuth App
3. Verifica que:
   - **Authorization callback URL** sea exactamente: `https://asociacionnadamosconladiversidad.pages.dev/admin/`
   - **Client ID** sea: `Ov23liqpQCUYrZjykpK8`

### Verificación 4: Repositorio

1. Verifica que el repositorio `arly89/AsociacionNadamosConLaDiversidad` sea accesible
2. Si es privado, asegúrate de que la cuenta que uses para autenticarte tenga permisos de escritura

## Solución Alternativa: Verificar versión de Decap CMS

Si nada funciona, puede ser un problema con la versión de Decap CMS. Prueba cambiar la versión en `index.html`:

```html
<!-- Versión actual -->
<script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>

<!-- Prueba con versión específica -->
<script src="https://unpkg.com/decap-cms@3.0.0/dist/decap-cms.js"></script>
```

## Resumen

- ✅ Configuración actualizada con inicialización manual
- ✅ `app_id` configurado correctamente
- ⏳ **Pendiente:** Hacer commit y push
- ⏳ **Pendiente:** Limpiar caché del navegador
- ⏳ **Pendiente:** Probar en modo incógnito

