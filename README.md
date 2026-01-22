# Mercado Nova 

E-commerce (demo) construido con **React + Vite** que consume la API pública de **DummyJSON** para listar productos, buscarlos y simular un carrito de compras.

##  Demo y repositorio

- **Demo (GitHub Pages):** https://espinocoza.github.io/mercado-nova/
- **Repo:** https://github.com/espinocoza/mercado-nova

##  Funcionalidades

- Listado dinámico de productos con imagen, categoría, precio y rating.
- Búsqueda en tiempo real.
- Filtro por categoría.
- Estados de carga y error (Loader + ErrorMessage).
- Carrito de compras:
  - Agregar producto / aumentar cantidad si ya existe
  - Cambiar cantidades, quitar items, vaciar carrito
  - Total calculado automáticamente
  - Persistencia en `localStorage`

---

##  Componentes

- `Header.jsx` (logo + nombre de tienda)
- `SearchBar.jsx` (input controlado)
- `ProductCard.jsx` (render por props)
- `ProductList.jsx`
- `Loader.jsx`
- `ErrorMessage.jsx`
- `Footer.jsx`
- `CategoryFilter.jsx`
- `Cart.jsx`
- `ErrorBoundary.jsx`

---

##  Estructura del proyecto

```txt
mercado-nova/
├─ docs/                # build para GitHub Pages
├─ screenshots/         # imágenes del README
├─ src/
│  ├─ components/
│  ├─ services/         # consumo de API (fetch)
│  ├─ App.jsx
│  └─ main.jsx
├─ vite.config.js
└─ README.md
 Fuente de datos
API: https://dummyjson.com/products

Docs: https://dummyjson.com/docs/products

 Cómo ejecutar en local
Requisitos: Node.js 18+ recomendado.

bash
Copiar código
npm install
npm run dev
Luego abre la URL que muestre Vite ( http://localhost:5173).

Build y preview
bash
Copiar código
npm run build
npm run preview
 Capturas de pantalla
Vista general screenshots/1000100785.png 

Búsqueda funcionando screenshots/1000100786.png   screenshots/1000100787.png



 Deploy a GitHub Pages (método docs/)
Este proyecto está configurado para publicar en Pages usando la carpeta docs/.

En vite.config.js, asegúrate de tener:

js
Copiar código
export default defineConfig({
  base: "/mercado-nova/",
  build: { outDir: "docs", emptyOutDir: true },
  plugins: [react()],
})
Compila:

bash
Copiar código
npm run build
Sube cambios a main (incluyendo docs/).

En GitHub:

Settings → Pages

Source: “Deploy from a branch”

Branch: main

Folder: /docs

 Tecnologías
React

Vite

JavaScript (ES6+)

CSS

 Notas
Este repositorio es un proyecto educativo/demostrativo: los productos provienen de DummyJSON y el flujo de compra es simulado (carrito local).

