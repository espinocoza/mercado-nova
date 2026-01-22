PokéCards Store

Aplicación de e‑commerce en React + Vite para listar productos y buscar por nombre o categoría. Consume datos dinámicos desde la API pública DummyJSON y está lista para desplegarse tanto en este repositorio (Pages con `main/docs`) como en el repositorio `espinocoza/TareaDiplomadoFinal`.

## ¿Qué hace?
- Lista productos con imagen, categoría, precio y descripción.
- Búsqueda en tiempo real por nombre/categoría.
- Estados de carga y error.
- Componentes reutilizables y estilos responsivos.

## Fuente de datos
- Endpoint: https://dummyjson.com/products?limit=100
- Servicio: ver [src/services/products.js](src/services/products.js)
- Mapeo de campos: `{ id, title→name, price, category, thumbnail→image, description }`

## Ejecutar en local
```bash
npm install
npm run dev
```
Abrir: http://localhost:5173/Tarea/

## Deploy (este repo: Tarea)
Este repositorio publica desde `main` → carpeta `docs` (GitHub Pages):
1) Build de producción (usa base `/Tarea/` por defecto):
```bash
npm run build
```
2) Commit/push de `docs/` si quieres versionar el build (opcional):
```bash
git add docs && git commit -m "build: docs" && git push
```
3) En GitHub → Settings → Pages: Source `Deploy from a branch`, Branch `main`, Folder `/docs`.
4) URL: https://espinocoza.github.io/Tarea/

## Deploy a TareaDiplomadoFinal
También puedes publicar el mismo build en `espinocoza/TareaDiplomadoFinal` (Pages bajo `/TareaDiplomadoFinal/`).

Scripts agregados:
```bash
# Compila con base /TareaDiplomadoFinal/
npm run build:final

# Compila y publica docs/ al branch gh-pages de TareaDiplomadoFinal
npm run deploy:final
```
Requisitos:
- Acceso de push al repo `espinocoza/TareaDiplomadoFinal`.
- En `TareaDiplomadoFinal` → Settings → Pages: Source `Deploy from a branch`, Branch `gh-pages`.
- URL: https://espinocoza.github.io/TareaDiplomadoFinal/

## Solución a “página en blanco”
Si ves la página en blanco en Pages, normalmente es por una `base` incorrecta en Vite (los assets cargan desde otra ruta):
- Este repo puede construir con base `/Tarea/`.
- Para `TareaDiplomadoFinal`, la base debe ser `/TareaDiplomadoFinal/`.

Cómo funciona:
- [vite.config.js](vite.config.js) usa `process.env.VITE_BASE` (si no está, cae en `/TareaDiplomadoFinal/`).
- `npm run build:final` establece `VITE_BASE=/TareaDiplomadoFinal/` automáticamente.

## Componentes principales
- `Header.jsx`, `SearchBar.jsx`, `ProductCard.jsx`, `ProductList.jsx`, `Loader.jsx`, `ErrorMessage.jsx`, `Footer.jsx`.

## Tecnologías
- React, Vite, JavaScript, CSS, GitHub Pages

## Screenshots
- Vista general: ./screenshots/home.png
- Búsqueda: ./screenshots/search.png
