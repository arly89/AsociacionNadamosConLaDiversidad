# 🔧 Solución: Decap CMS debe redirigir a GitHub

## Problema

Cuando haces clic en "Iniciar sesión con GitHub", te lleva a:
```
https://asociacionnadamosconladiversidad.pages.dev/auth?provider=github&...
```

En lugar de redirigirte directamente a GitHub para autenticarte.

## Solución: Crear OAuth App en GitHub

Aunque PKCE técnicamente no requiere OAuth App, **crearla es necesario para que Decap CMS funcione correctamente** en sitios estáticos como Cloudflare Pages.

### Paso 1: Crear OAuth App en GitHub

1. Ve a: **https://github.com/settings/developers**
2. Haz clic en **"OAuth Apps"** (en el menú lateral izquierdo)
3. Haz clic en **"New OAuth App"**
4. Completa el formulario:
   - **Application name:** `Asociación Nadamos CMS`
   - **Homepage URL:** `https://asociacionnadamosconladiversidad.pages.dev`
   - **Authorization callback URL:** `https://asociacionnadamosconladiversidad.pages.dev/admin/`
5. Haz clic en **"Register application"**
6. **IMPORTANTE:** En la siguiente página, **NO necesitas copiar el Client Secret** (PKCE no lo usa), pero puedes copiar el **Client ID** por si acaso

### Paso 2: Verificar que el repositorio sea accesible

Asegúrate de que:
- El repositorio `arly89/AsociacionNadamosConLaDiversidad` sea **público**, O
- Si es privado, que la cuenta de GitHub que uses para autenticarte tenga acceso

### Paso 3: Hacer commit y push de los cambios

He actualizado la configuración para que funcione mejor. Ejecuta:

```bash
git add public/admin/config.yml public/admin/index.html
git commit -m "fix: configurar Decap CMS para redirección correcta a GitHub"
git push origin main
```

### Paso 4: Probar

1. Espera 1-2 minutos a que Cloudflare Pages reconstruya
2. Ve a: `https://asociacionnadamosconladiversidad.pages.dev/admin`
3. Haz clic en **"Iniciar sesión con GitHub"**
4. **Ahora debería redirigirte directamente a GitHub** para autorizar la aplicación
5. Autoriza la aplicación en GitHub
6. Serás redirigido de vuelta al panel de administración

## ¿Por qué funciona ahora?

1. **OAuth App creada:** GitHub ahora reconoce tu aplicación y puede procesar la autenticación
2. **Callback URL configurada:** GitHub sabe dónde redirigir después de la autenticación
3. **Configuración simplificada:** Eliminé el `base_url` del backend para que Decap CMS lo detecte automáticamente
4. **site_url añadido:** Esto ayuda a Decap CMS a construir las URLs correctamente

## Si aún no funciona

### Verificación 1: Revisar la consola del navegador

1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña "Console"
3. Intenta iniciar sesión
4. Revisa si hay errores en la consola

### Verificación 2: Verificar la OAuth App

1. Ve a: https://github.com/settings/developers
2. Verifica que la OAuth App tenga:
   - **Homepage URL:** `https://asociacionnadamosconladiversidad.pages.dev`
   - **Authorization callback URL:** `https://asociacionnadamosconladiversidad.pages.dev/admin/`

### Verificación 3: Verificar el repositorio

1. Ve a: https://github.com/arly89/AsociacionNadamosConLaDiversidad
2. Verifica que el repositorio sea accesible
3. Si es privado, asegúrate de que tu cuenta tenga acceso

### Solución alternativa: Usar Client ID explícitamente

Si después de crear la OAuth App sigue sin funcionar, puedes probar añadir el Client ID explícitamente:

```yaml
backend:
  name: github
  repo: arly89/AsociacionNadamosConLaDiversidad
  branch: main
  auth_type: pkce
  app_id: TU_CLIENT_ID_AQUI  # Añade esto si es necesario

site_url: https://asociacionnadamosconladiversidad.pages.dev
```

Pero primero prueba sin el `app_id`, ya que PKCE debería funcionar sin él.

## Resumen de cambios realizados

1. ✅ Eliminado `base_url` del backend (se detecta automáticamente)
2. ✅ Añadido `site_url` para ayudar a construir URLs
3. ✅ Simplificado `index.html` para carga automática
4. ✅ Configuración optimizada para PKCE

## Próximos pasos

1. **Crear la OAuth App en GitHub** (Paso 1 arriba)
2. **Hacer commit y push** (Paso 3 arriba)
3. **Probar la autenticación** (Paso 4 arriba)

Después de estos pasos, Decap CMS debería redirigirte correctamente a GitHub para autenticarte.

