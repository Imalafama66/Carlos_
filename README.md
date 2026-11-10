# xLau — Portafolio de configuración Minecraft

Portafolio estático premium para xLau. Está construido con HTML, CSS y JavaScript sin framework, por lo que puede publicarse en GitHub Pages sin servidor.

## Archivos principales

- `index.html`: estructura semántica, navegación, secciones y modal.
- `style.css`: paleta, layout responsive, efectos 3D, partículas, estados y animaciones.
- `script.js`: render dinámico, filtros, menú móvil, modal, scroll, formulario visual y copiado.
- `config.js`: fuente de verdad editable para identidad, proyectos, plugins, servicios, disponibilidad y contacto.
- `public/manus-routes.json`: manifiesto de la ruta principal.

## Editar el contenido

Modifica `config.js` y actualiza los valores de `brand`, `contact`, `projects`, `plugins` o `services`. Los banners y galerías de proyectos están preparados como espacios editables: agrega rutas relativas a imágenes reales cuando existan; no se incluyen capturas inventadas.

El contacto está configurado con el usuario de Discord `carlitosxit`; puedes cambiarlo desde `contact.discordUser` en `config.js`. El botón de copia se habilita automáticamente. El formulario incluido es una interacción visual y no envía datos a ningún servidor.

GitHub Pages no ofrece autenticación segura ni almacenamiento compartido para un panel de administración construido solo con JavaScript. Por eso este proyecto no incluye un panel falso: los cambios reales se hacen en `config.js`, se confirman y se vuelven a publicar. Para un panel colaborativo persistente habría que conectar un CMS o backend externo con autenticación real.

### Estados y recursos editables

Cada plugin incluye una descripción y un selector visual para marcar `Conozco`, `He configurado` o `Quiero aprender`. Esa selección es interactiva durante la visita y, para conservarla al publicar, debe reflejarse en el campo `status` de `config.js`. Los proyectos leen `banner` y `gallery` cuando se proporcionan rutas reales; si están vacíos, muestran un placeholder honesto.

El catálogo de plugins muestra primero 12 elementos para mantener la carga ligera y ofrece el botón **Mostrar todos los plugins** para desplegar los 50 elementos editables.

La portada usa el nombre **xLau config**. La sección **Así configuro** muestra idiomas, HTML/CSS/JavaScript, plugins y YAML, interfaces, permisos, hologramas y optimización básica. El workflow de terminal cambia con el scroll y respeta `prefers-reduced-motion`.

En la sección de plugins, **Modo config** muestra áreas orientativas de trabajo por categoría —por ejemplo grupos, herencias, prefijos, GUI, YAML, mensajes, posiciones y animaciones— sin afirmar dominio de ninguna herramienta. El modo puede apagarse para una vista compacta.

El contacto usa `elhadeshadesseisseis@gmail.com` y el formulario abre un correo mediante `mailto:`. La tarjeta de Discord consulta la presencia pública de Lanyard con el ID configurado; muestra estado, actividad, Spotify y dispositivos cuando la API los comparte, y vuelve a “Desconectado” si no hay datos.

Los colores editables viven en `brand.colors`; la interfaz usa una capa hacker neón verde para resaltar estados, escaneos y hover. El contacto admite `discordUser`, `discordUrl` y `email`; mientras estén vacíos, la interfaz no inventa datos ni habilita enlaces inexistentes.

## Probar localmente

Desde esta carpeta, ejecuta cualquier servidor estático, por ejemplo:

```bash
python3 -m http.server 3000
```

Abre `http://localhost:3000`. No se debe abrir el archivo con `file://`, porque los navegadores pueden bloquear recursos locales.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y copia estos archivos en la raíz.
2. Confirma y sube los cambios a la rama `main`.
3. En GitHub, abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**, elige `main` y la carpeta `/ (root)`.
5. Guarda y espera a que GitHub Pages genere la URL.

Si usas un repositorio de proyecto, GitHub Pages puede servirlo en una ruta como `https://usuario.github.io/nombre-repositorio/`; los enlaces internos de esta web son relativos y funcionan en ese escenario.

## Accesibilidad y rendimiento

La página respeta `prefers-reduced-motion`, limita las animaciones permanentes y usa observadores de visibilidad para activar entradas al desplazarse. Las tarjetas son navegables con teclado, los botones tienen nombres accesibles y el diseño se adapta a móviles Android, tablets y computadoras.
