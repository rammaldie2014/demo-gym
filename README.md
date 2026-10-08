# IRON FIT GYM

Landing comercial de demostración. Angular 22 standalone, TypeScript y SCSS. Sin backend, registro ni pagos. Fotografías referenciales; datos reales del negocio pendientes.

## Ejecutar localmente

Requisitos: Node compatible con Angular 22 (entorno utilizado: Node 24) y npm 11 (entorno utilizado: npm 11.16.0).

```sh
npm ci
npm start
```

Abrir http://localhost:4200. Con las dependencias instaladas, también funciona `npm start`.

## Pruebas y producción

```sh
npm test -- --watch=false
npm run build
```

También: `npm test -- --watch=false` y `npm run build`.
El builder `@angular/build:application` en angular.json genera el sitio estático en **dist/demo-gym/browser**.

## Datos editables

Editar `src/app/core/config/gym.ts`:

- `name`, `address`, `hours`: nombre, dirección y horarios reales. Valores vacíos muestran pendientes.
- `whatsapp`: prefijo 51 + móvil de 9 dígitos. Dejar vacío hasta contar con el número real. La utilidad valida el formato peruano; si falta el número, los botones muestran un aviso de demo sin abrir contactos ficticios.
- `messages`: mensajes personalizados; actualizar si cambian los precios.
- `plans`, `services`: precios, duración, características y servicios. El personal trainer se consulta por separado.
- `social.instagram`, `social.facebook`: enlaces HTTPS oficiales, vacíos hasta confirmarlos.
- `mapEmbedUrl`: URL HTTPS de Google Maps obtenida en Compartir → Insertar un mapa; debe empezar por `https://www.google.com/maps/embed?` o `/embed/`. `directionsUrl`: enlace real para llegar.

## Fotografías y diseño

Cambiar `images` en la configuración. Guardar fotos propias optimizadas en `public/images` y usar `/images/nombre.webp`. Actualizar los textos alternativos y retirar las etiquetas de fotografía referencial cuando se incorporen imágenes reales. La demo usa imágenes de Unsplash y Google Fonts, que requieren Internet. Colores, responsive y animaciones en `src/styles.scss`; se respeta prefers-reduced-motion. Favicon en `public/favicon.svg`.

## Organización

`core/config` contiene datos tipados y mensajes; `core/utils` genera enlaces WhatsApp con encodeURIComponent; `shared` contiene CTA reutilizable y mapa; `app.*` compone la landing y navegación. No se necesitan rutas ni carga diferida de código para una sola página; las fotografías no críticas usan lazy loading.

## Cloudflare Pages

Conectar el repositorio, comando de build `npm run build`, directorio de salida `dist/demo-gym/browser`, Node 24. No requiere SSR ni funciones. La página navega con anclas. No se ha publicado automáticamente.

## SEO y lanzamiento real

La demo usa noindex/nofollow en `src/index.html` y `public/_headers`, robots.txt bloqueado y sitemap vacío. Al confirmar el dominio: añadir canonical real, completar sitemap.xml, permitir rastreo en robots.txt y retirar ambos noindex. Actualizar title, description y Open Graph, incluida imagen. Confirmar datos comerciales y fotos antes del lanzamiento; agregar datos estructurados locales únicamente con información verificada. El año de copyright se calcula automáticamente.
