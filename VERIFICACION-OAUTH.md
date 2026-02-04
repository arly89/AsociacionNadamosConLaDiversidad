# 🔍 Verificación: Decap CMS sigue yendo a Netlify

## Problema Actual

Aunque el `config.yml` tiene `app_id` configurado, Decap CMS sigue intentando usar `api.netlify.com/auth`.

## Verificaciones Necesarias

### 1. Verificar OAuth App en GitHub

Ve a: https://github.com/settings/developers

Abre tu OAuth App y verifica:

- ✅ **Client ID:** Debe ser `Ov23liqpQCUYrZjykpK8`
- ✅ **Authorization callback URL:** Debe ser exactamente `https://asociacionnadamosconladiversidad.pages.dev/admin/` (con barra final)
- ✅ **Homepage URL:** `https://asociacionnadamosconladiversidad.pages.dev`

**IMPORTANTE:** La callback URL debe tener la barra final `/admin/` no `/admin`

### 2. Verificar que el archivo config.yml esté accesible

Abre en tu navegador:
```
https://asociacionnadamosconladiversidad.pages.dev/admin/config.yml
```

Debe mostrar el contenido YAML con:
- `name: github`
- `app_id: Ov23liqpQCUYrZjykpK8`
- `auth_type: pkce`

### 3. Limpiar caché completamente

1. **Abre en modo incógnito** (Ctrl+Shift+N)
2. O **limpia caché:**
   - Chrome: Ctrl+Shift+Delete → Marca "Caché e imágenes" → "Borrar datos"
   - Firefox: Ctrl+Shift+Delete → Marca "Caché" → "Limpiar ahora"
3. **Cierra todas las pestañas** del sitio
4. **Abre de nuevo:** `https://asociacionnadamosconladiversidad.pages.dev/admin`

### 4. Verificar repositorio

El repositorio `arly89/AsociacionNadamosConLaDiversidad` debe:
- Ser accesible públicamente, O
- Si es privado, la cuenta que uses para autenticarte debe tener permisos de escritura

## Solución Alternativa: Probar sin app_id

Si nada funciona, prueba temporalmente sin `app_id` (aunque esto puede no funcionar):

```yaml
backend:
  name: github
  repo: arly89/AsociacionNadamosConLaDiversidad
  branch: main
  auth_type: pkce
  # app_id: Ov23liqpQCUYrZjykpK8  # Comentar temporalmente
```

Pero esto probablemente no funcionará porque PKCE necesita el app_id.

## Posible Causa: Versión de Decap CMS

El problema puede ser la versión `^3.0.0`. He cambiado a `3.0.0` específica. Si sigue sin funcionar, prueba con:

```html
<script src="https://unpkg.com/decap-cms@2.15.0/dist/decap-cms.js"></script>
```

## Debug: Consola del Navegador

1. Abre herramientas de desarrollador (F12)
2. Ve a la pestaña "Console"
3. Intenta iniciar sesión
4. Busca errores que mencionen:
   - `netlify`
   - `backend`
   - `auth`
   - `github`

Copia esos errores y compártelos.

