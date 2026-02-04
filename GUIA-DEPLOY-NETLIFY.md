# 🚀 Guía de Despliegue en Netlify

## Ventajas de Netlify para Decap CMS

✅ **Soporte nativo** para Git Gateway  
✅ **Netlify Identity** integrado  
✅ **Funciona sin OAuth App** de GitHub  
✅ **Configuración más simple**

---

## 📝 PASO 1: Preparar el Repositorio

Asegúrate de que todos los cambios estén en GitHub:

```bash
git add .
git commit -m "feat: configurar para Netlify con Git Gateway"
git push origin main
```

---

## 🌐 PASO 2: Crear Sitio en Netlify

### 2.1 Crear cuenta en Netlify (si no tienes)

1. Ve a [https://app.netlify.com/](https://app.netlify.com/)
2. Crea una cuenta gratuita (puedes usar GitHub para iniciar sesión)
3. Verifica tu email

### 2.2 Conectar repositorio

1. En el dashboard de Netlify, haz clic en **"Add new site"** → **"Import an existing project"**
2. Selecciona **"GitHub"** y autoriza Netlify
3. Busca y selecciona: `arly89/AsociacionNadamosConLaDiversidad`

### 2.3 Configurar Build Settings

Netlify debería detectar automáticamente Astro, pero verifica:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Base directory:** `/` (dejar vacío)

Si no se detecta automáticamente, configura manualmente en **"Site settings"** → **"Build & deploy"**.

### 2.4 Desplegar

1. Haz clic en **"Deploy site"**
2. Espera 2-5 minutos a que termine el build
3. Tu sitio estará disponible en: `https://random-name-12345.netlify.app` (o el nombre que elijas)

---

## ⚙️ PASO 3: Habilitar Git Gateway

### 3.1 Activar Git Gateway

1. En el dashboard de Netlify, ve a tu sitio
2. Ve a **"Site settings"** → **"Identity"**
3. Haz clic en **"Enable Identity"**
4. En la sección **"Services"**, busca **"Git Gateway"**
5. Haz clic en **"Enable Git Gateway"**
6. Autoriza el acceso a GitHub si se solicita

### 3.2 Configurar Invitaciones (Opcional)

Para permitir que otros usuarios accedan al panel:

1. En **"Identity"** → **"Invite users"**
2. Añade el email de los usuarios que quieras que tengan acceso
3. Ellos recibirán un email de invitación

---

## 🔐 PASO 4: Configurar Netlify Identity

### 4.1 Configurar Registro

1. En **"Identity"** → **"Registration"**
2. Selecciona **"Invite only"** (recomendado) o **"Open"**
3. Guarda los cambios

### 4.2 Configurar Providers (Opcional)

Puedes habilitar login con GitHub, Google, etc.:

1. En **"Identity"** → **"External providers"**
2. Habilita los proveedores que quieras
3. Configura las credenciales según las instrucciones

---

## 📝 PASO 5: Actualizar URL en config.yml

Una vez que tengas la URL de tu sitio en Netlify:

1. Abre `public/admin/config.yml`
2. Busca: `site_url: https://tu-sitio.netlify.app`
3. Reemplázala con tu URL real, por ejemplo:
   ```yaml
   site_url: https://asociacion-nadamos.netlify.app
   ```

4. Haz commit y push:
   ```bash
   git add public/admin/config.yml
   git commit -m "fix: actualizar URL de Netlify en configuración CMS"
   git push origin main
   ```

---

## ✅ PASO 6: Probar el Panel de Administración

1. Espera 1-2 minutos después del push
2. Ve a: `https://tu-sitio.netlify.app/admin`
3. Deberías ver el panel de Decap CMS
4. Haz clic en **"Login"** o **"Sign up"**
5. Crea una cuenta o inicia sesión
6. ¡Ya puedes publicar noticias!

---

## 🎯 Cómo Publicar Noticias

### Opción 1: Panel de Administración (Recomendado)

1. Ve a `/admin` en tu sitio
2. Inicia sesión con Netlify Identity
3. Haz clic en **"Noticias"** → **"New Noticia"**
4. Completa el formulario
5. Haz clic en **"Publish"**

### Opción 2: Editar en GitHub

1. Ve a tu repositorio en GitHub
2. Navega a `src/content/noticias/`
3. Crea o edita archivos `.md`
4. Netlify reconstruirá automáticamente

---

## 🔧 Configuración de Archivos

### netlify.toml

Ya está creado con:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirect para `/admin/*`

### config.yml

Configurado con:
- Backend: `git-gateway` (Netlify Identity)
- Branch: `main`
- Colecciones de noticias

---

## 🆘 Solución de Problemas

### El panel /admin no carga

- Verifica que `netlify.toml` esté en la raíz del proyecto
- Verifica que Git Gateway esté habilitado en Netlify
- Revisa los logs de build en Netlify

### No puedo iniciar sesión

- Verifica que Identity esté habilitado
- Verifica que Git Gateway esté habilitado
- Asegúrate de que el registro esté configurado (Invite only o Open)

### Las noticias no se publican

- Verifica que tu cuenta tenga permisos de escritura en el repositorio
- Revisa los logs de build en Netlify
- Verifica que los archivos `.md` estén en `src/content/noticias/`

### El build falla

- Verifica que todas las dependencias estén en `package.json`
- Revisa los logs de build en Netlify
- Asegúrate de que Node.js 18+ esté seleccionado

---

## 📚 Recursos Adicionales

- [Documentación de Netlify](https://docs.netlify.com/)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway](https://docs.netlify.com/visitor-access/git-gateway/)
- [Decap CMS con Netlify](https://decapcms.org/docs/netlify/)

---

## ✅ Checklist Final

- [ ] Repositorio conectado a Netlify
- [ ] Build configurado correctamente
- [ ] Git Gateway habilitado
- [ ] Netlify Identity habilitado
- [ ] URL actualizada en `config.yml`
- [ ] Probado acceso a `/admin`
- [ ] Probado crear una noticia

---

**¡Listo!** Tu sitio debería estar funcionando perfectamente con Decap CMS en Netlify. 🎉

