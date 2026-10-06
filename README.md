# Mi Studio — Tienda + Portafolio

Plantilla en blanco y negro inspirada en el estilo de la referencia: oscura, minimalista, con tarjetas, animaciones y sección de tienda.

## Archivos

- `index.html` — página pública.
- `admin.html` — panel de administración separado.
- `data.js` — datos iniciales.
- `app.js` — render de la web.
- `admin.js` — editor.
- `style.css` / `admin.css` — diseño.

## Panel de administración

Abre `admin.html`.

Contraseña inicial: `admin123`

Desde el panel puedes editar:
- Nombre, textos, Discord y correo.
- Productos/servicios y precios.
- Trabajos/portafolio e imágenes por URL.
- Reseñas, nombres, estrellas, avatar y texto.
- Número de ventas y valoración.
- Exportar/importar todos los datos en JSON.

## Importante sobre GitHub Pages

GitHub Pages es hosting estático y no ofrece una base de datos para guardar cambios de un visitante para todos los usuarios. Esta versión usa `localStorage`, así que el panel funciona y guarda los cambios en el navegador/dispositivo donde se editó.

Si quieres que tú edites desde el celular y que automáticamente cambie la tienda pública para todos, hay que conectar una base de datos/backend (por ejemplo Firebase, Supabase o una API propia). El frontend ya está separado para poder hacer esa conexión después.

## Publicar

Sube todos los archivos manteniendo la misma estructura a GitHub Pages, Netlify o Vercel.
