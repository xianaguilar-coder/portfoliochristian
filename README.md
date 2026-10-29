# Christian Aguilar — Portfolio

Sitio estático en HTML y CSS puro (sin frameworks, sin instalación). Cuatro páginas: Home, BanBajío, Designfor y L-A-D.

```
index.html  banbajio.html  designfor.html  lad.html
css/styles.css      js/main.js      assets/   <- aquí van las imágenes
```

## 1. Poner las imágenes (28 en total)

Cada foto del sitio busca un archivo con un nombre exacto dentro de `assets/`. Mientras no exista, se ve una caja gris que muestra el nombre del archivo esperado. Cuando lo guardas con ese nombre, la foto aparece sola, sin tocar código.

Reglas:
- Nombre exacto, en minúsculas, sin espacios. Ejemplo: `lad-hero.jpg`, no `LAD Hero.JPG`.
- Sirve `.jpg`, `.jpeg`, `.png`, `.webp` o `.avif` (el nombre sin la extensión es lo que importa).
- Exporta desde Figma a escala **2x**. Intenta que cada imagen pese menos de 500 KB.
- Para probar en tu computadora: abre `index.html` con doble clic. Las imágenes se ven al instante.

### Home

| Nombre del archivo | Qué va ahí |
|---|---|
| `project-lad.jpg` | L-A-D premium footwear brand |
| `project-designfor.jpg` | Designfor brand and web work |
| `project-banbajio.jpg` | BanBajío content collage |
| `hero-portrait.jpg` | Portrait |
| `hero-mobile.jpg` | Mobile storefront mockup |
| `hero-shoe.jpg` | Product shoe |

### BanBajío

| Nombre del archivo | Qué va ahí |
|---|---|
| `banbajio-collage.jpg` | Content collage: reels, carousels and campaigns |
| `banbajio-dashboard-1.jpg` | Content dashboard |
| `banbajio-dashboard-2.jpg` | Editorial calendar |
| `banbajio-dashboard-3.jpg` | Content tracker |
| `banbajio-phone.jpg` | Phone mockup |

### Designfor

| Nombre del archivo | Qué va ahí |
|---|---|
| `designfor-brand-mockups.jpg` | Brand mockups on screens |
| `designfor-brandbook.jpg` | Green brand book |
| `designfor-retail.jpg` | Retail store project |
| `designfor-portrait.jpg` | Portrait |
| `designfor-stationery.jpg` | Brand stationery |
| `designfor-logistics.jpg` | Logistics website |
| `designfor-guidelines.jpg` | Brand guidelines |
| `designfor-industrial.jpg` | Industrial website |

### L-A-D

| Nombre del archivo | Qué va ahí |
|---|---|
| `lad-grid-1.jpg` | Brown leather shoe |
| `lad-grid-2.jpg` | Black shoes |
| `lad-grid-3.jpg` | Catalog page |
| `lad-grid-4.jpg` | Road scene |
| `lad-grid-5.jpg` | Magazine spread |
| `lad-grid-6.jpg` | Portrait |
| `lad-hero.jpg` | L-A-D sneaker hero shot |
| `lad-story-1.jpg` | Shoe and moodboard |
| `lad-story-2.jpg` | Soles and leather pieces |

## 2. Subir a GitHub (sin terminal)

1. Entra a https://github.com y crea una cuenta (o inicia sesión).
2. Arriba a la derecha: **+ → New repository**. Ponle un nombre (por ejemplo `christian-aguilar-portfolio`), déjalo en **Public** y presiona **Create repository**.
3. En la página del repositorio vacío, clic en el enlace **uploading an existing file**.
4. Descomprime la carpeta del sitio y arrastra **todo su contenido** (los 4 `.html` y las carpetas `css`, `js` y `assets`, no el zip) a la ventana de GitHub.
5. Espera a que termine de subir y presiona **Commit changes**.

Para agregar o cambiar fotos después: entra a la carpeta `assets` del repositorio, **Add file → Upload files**, arrastra las imágenes y confirma.

## 3. Publicar con Vercel

1. Entra a https://vercel.com y regístrate con **Continue with GitHub**.
2. **Add New… → Project**, elige el repositorio y presiona **Import**.
3. No cambies nada (en *Framework Preset* deja **Other**). Presiona **Deploy**.
4. En menos de un minuto tendrás una URL pública. Desde ese momento, cada cambio que subas a GitHub se publica automáticamente.
5. Para un dominio propio: en el proyecto de Vercel, **Settings → Domains**.

## Pendientes antes de publicar

- **LinkedIn:** los botones "in" (arriba y en el footer) llevan a `#`. Busca `TODO` en los `.html` o reemplaza `href="#"` en los enlaces con `class="in"` por la URL de LinkedIn de Christian.
- **Año del copyright:** dice 2025. Cámbialo en el footer de cada página si hace falta.
- **Textos:** revisa con calma el texto pequeño. Se transcribió de PDFs de baja resolución.
