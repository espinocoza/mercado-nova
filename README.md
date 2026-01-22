# Mercado Nova

Aplicación de e‑commerce en React + Vite que lista productos de DummyJSON y permite buscar por nombre/categoría. Incluye manejo de carga (loading), errores y una UI responsiva.

## Descripción
- Lista productos con imagen, categoría y precio.
- Búsqueda en tiempo real por nombre y categoría.
- Estados de `loading` y `error` al consumir API.
- Componentes reutilizables y estilos sencillos.

## Componentes creados
- `Header.jsx` (brand con logo + nombre de tienda)
- `SearchBar.jsx`
- `CategoryFilter.jsx` (filtrado por categoría)
- `ProductCard.jsx`
- `ProductList.jsx`
- `Cart.jsx` (carrito de compras con cantidad y total)
- `Loader.jsx`
- `ErrorMessage.jsx`
- `Footer.jsx`

## Tecnologías usadas
- React, Vite
- JavaScript (ES6+), CSS

## Fuente de datos
- API: https://dummyjson.com/products
- Servicio: ver [src/services/products.js](src/services/products.js)
- Manejo de estados: `loading` y `error` implementados.

## Carrito de compras
- Botón “Agregar al carrito” en cada producto.
- Incrementa cantidad si el producto ya existe.
- Quitar item, cambiar cantidad, vaciar carrito.
- Total calculado automáticamente.
- Persistencia en `localStorage`.

## Ejecutar en local
```bash
npm install
npm run dev
```
Abrir el puerto que muestre Vite (por defecto 5173).

## Build y Preview
```bash
npm run build
npm run preview
```

## Capturas de pantalla
Por favor agrega estas imágenes a la carpeta `screenshots/` antes de publicar:

![Vista general](./screenshots/home.png)
![Búsqueda](./screenshots/search.png)
<!-- Opcional: ![Loading](./screenshots/loading.png) -->

## GitHub Pages (opcional)
Para publicar como GitHub Pages (método simple usando `docs/`):
- Ajusta la base en [vite.config.js](vite.config.js) según el nombre del repo:
	```js
	export default defineConfig({
		base: "/NOMBRE_REPO/",
		build: { outDir: "docs", emptyOutDir: true },
		plugins: [react()],
	})
	```
- Ejecuta el build y sube `docs/` a `main`.
- En GitHub → Settings → Pages: Source `Deploy from a branch`, Branch `main`, Folder `/docs`.

Si prefieres publicar en `gh-pages`, puedes mantener `build.outDir` como `dist` y usar acciones o copiar a esa rama.

## Nota sobre API
Este proyecto consume DummyJSON (`/products`). La app maneja estados de `loading` mientras se realiza el fetch y `error` si la solicitud falla.
