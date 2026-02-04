# 🔐 Solución: Problema de Autenticación en Decap CMS

## Problema Actual

Cuando intentas iniciar sesión en `/admin`, te redirige a:
```
https://asociacionnadamosconladiversidad.pages.dev/auth?provider=github&...
```

Y no muestra la página de inicio de sesión de GitHub.

## Causa

Decap CMS con PKCE en sitios estáticos (como Cloudflare Pages) puede tener problemas si no está correctamente configurado. Aunque PKCE no requiere OAuth App, crear una ayuda a que funcione correctamente.

## Solución: Crear OAuth App en GitHub

### Paso 1: Crear OAuth App en GitHub

1. Ve a tu cuenta de GitHub
2. Ve a **Settings** → **Developer settings** → **OAuth Apps**
   - O directamente: https://github.com/settings/developers
3. Haz clic en **"New OAuth App"**
4. Completa el formulario:
   - **Application name:** `Asociación Nadamos CMS`
   - **Homepage URL:** `https://asociacionnadamosconladiversidad.pages.dev`
   - **Authorization callback URL:** `https://asociacionnadamosconladiversidad.pages.dev/admin/`
5. Haz clic en **"Register application"**
6. **IMPORTANTE:** Copia el **Client ID** (lo verás en la página siguiente)

### Paso 2: Actualizar Configuración (Opcional con PKCE)

Con `auth_type: pkce`, técnicamente no necesitas el Client ID en la configuración, pero a veces ayuda. Si después de crear la OAuth App sigue sin funcionar, puedes probar añadir el Client ID.

### Paso 3: Verificar Configuración Actual

Tu `config.yml` debería verse así:

```yaml
backend:
  name: github
  repo: arly89/AsociacionNadamosConLaDiversidad
  branch: main
  base_url: https://asociacionnadamosconladiversidad.pages.dev
  auth_type: pkce
```

### Paso 4: Hacer Commit y Push

```bash
git add public/admin/config.yml
git commit -m "fix: actualizar configuración CMS para autenticación"
git push origin main
```

### Paso 5: Probar de Nuevo

1. Espera 1-2 minutos a que Cloudflare Pages reconstruya
2. Ve a `https://asociacionnadamosconladiversidad.pages.dev/admin`
3. Haz clic en "Iniciar sesión con GitHub"
4. Debería redirigirte correctamente a GitHub para autorizar

## Solución Alternativa: Si PKCE No Funciona

Si después de crear la OAuth App sigue sin funcionar, puedes cambiar a usar el Client ID directamente:

### Opción A: Usar Client ID (sin PKCE)

1. En `config.yml`, cambia a:
```yaml
backend:
  name: github
  repo: arly89/AsociacionNadamosConLaDiversidad
  branch: main
  base_url: https://asociacionnadamosconladiversidad.pages.dev
  # Elimina auth_type: pkce
  # Añade:
  app_id: TU_CLIENT_ID_AQUI
```

2. Necesitarás también el Client Secret, pero esto es más complejo en Cloudflare Pages.

### Opción B: Editar Directamente en GitHub (Más Simple) ⭐ RECOMENDADO

La forma más sencilla y que siempre funciona:

1. Ve a tu repositorio: https://github.com/arly89/AsociacionNadamosConLaDiversidad
2. Navega a `src/content/noticias/`
3. Haz clic en "Add file" → "Create new file"
4. Crea tu noticia en Markdown
5. Haz commit
6. Cloudflare Pages se reconstruirá automáticamente

**Ventajas:**
- ✅ No requiere configuración de OAuth
- ✅ Funciona inmediatamente
- ✅ Control total sobre el formato
- ✅ Puedes usar el editor de GitHub con preview

## Verificación

Después de crear la OAuth App y hacer push:

1. ✅ La OAuth App está creada en GitHub
2. ✅ El `base_url` en `config.yml` es correcto (con `https://`)
3. ✅ Los cambios están en GitHub
4. ✅ Cloudflare Pages se ha reconstruido
5. ✅ Intentas iniciar sesión en `/admin`

## Si Sigue Sin Funcionar

Si después de todo esto sigue sin funcionar, el problema puede ser que:

1. **Cloudflare Pages no soporta bien Decap CMS con autenticación** - Es un problema conocido
2. **La mejor solución es editar directamente en GitHub** (Opción B arriba)

## Recomendación Final

Para Cloudflare Pages, **la forma más confiable de publicar noticias es editar directamente en GitHub**. El panel de administración es útil, pero requiere configuración adicional que puede ser complicada en sitios estáticos.

¿Quieres que te ayude a configurar la OAuth App o prefieres usar la opción de editar directamente en GitHub?

