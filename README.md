# Conozcamos la Biblia — guía para publicar y administrar

Este sitio funciona igual que Club de Lectura: front-end estático en GitHub Pages
+ Firebase para guardar el contenido. Editas todo desde `admin.html`, sin tocar
código, y el sitio público se actualiza al instante.

## 1. Crear el proyecto de Firebase (10 min)

1. Entra a https://console.firebase.google.com y crea un proyecto nuevo, por
   ejemplo `conozcamos-la-biblia`.
2. En el menú lateral entra a **Compilación → Firestore Database** → *Crear
   base de datos* → modo **producción** → elige una región cercana (ej.
   `us-east1` o `southamerica-east1`).
3. Entra a **Compilación → Authentication** → pestaña *Sign-in method* →
   habilita **Correo electrónico/contraseña**.
4. En la pestaña *Users* de Authentication, crea tu usuario administrador
   (el correo y contraseña con los que vas a entrar a `admin.html`).
5. Ve a ⚙️ **Configuración del proyecto → General**, baja hasta "Tus apps",
   crea una **app web** (ícono `</>`), ponle un nombre y copia el objeto
   `firebaseConfig` que te muestra.
6. Pega esos valores en el archivo `firebase-config.js` de este proyecto,
   reemplazando los `PEGA_AQUI_...`.

## 2. Reglas de seguridad de Firestore

En Firestore Database → pestaña **Reglas**, pega esto y publica:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /config/{doc} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /modulos/{doc} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /clases/{doc} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /inscripciones/{doc} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

Esto deja el sitio visible para cualquiera, pero solo tú (con tu usuario
admin) puedes editar contenido. Cualquier visitante puede inscribirse, pero
solo tú puedes ver o borrar inscripciones.

## 3. Publicar en GitHub Pages

Igual que hicimos con Club de Lectura, desde tu cuenta `paginabierta`:

1. Crea un repositorio nuevo llamado `conozcamos-la-biblia` (público).
2. Sube estos cuatro archivos a la raíz del repo: `index.html`,
   `admin.html`, `firebase-config.js`, `defaults.js`.
3. Entra a **Settings → Pages** del repo → en "Source" elige la rama
   `main` y carpeta `/ (root)` → Guardar.
4. En un par de minutos tu sitio queda en:
   `https://paginabierta.github.io/conozcamos-la-biblia/`
   y el panel de administración en:
   `https://paginabierta.github.io/conozcamos-la-biblia/admin.html`

## 4. Cómo editar de ahí en adelante

Entras a `admin.html`, inicias sesión con tu usuario admin, y ya tienes
pestañas para:

- **Apariencia** — colores, esquema tipográfico, logo.
- **Portada** — título, subtítulo, estadísticas del hero.
- **Homenaje** — texto sobre el Padre Álvaro, foto, versículo separador.
- **Módulos** — los 12 capítulos (AT y NT): título, descripción, subtemas,
  ícono, estado. Puedes agregar o quitar módulos.
- **Clases en vivo** — la tabla de clases de Google Meet: agregar, editar,
  marcar como grabada, poner el link.
- **Libro** — nombre, subtítulo y link del PDF de cada tomo.
- **Contacto** — pie de página, correo, y también puedes ver quién se
  inscribió desde el formulario del sitio.

No necesitas volver a pedirme ajustes de texto, color o contenido — todo
eso vive en el panel. Sí vuelves a pedirme ayuda si algún día quieres
cambiar la estructura misma de una sección (agregar una sección nueva,
cambiar el diseño de las tarjetas, etc.).

## 5. Cuando tengas el libro del Antiguo Testamento escaneado

Súbelo en un chat conmigo como hicimos con el del Nuevo Testamento — leo
su estructura real y te dejo los 6 módulos del AT ya redactados con su
contenido auténtico, listos para pegar uno por uno en el panel (pestaña
Módulos → Antiguo Testamento → Guardar).
