# PokéCards Store

E-commerce simple de cartas Pokémon construido con React y Vite.  
Permite ver un listado de cartas y filtrarlas por nombre o categoría (tipo/rareza).

## Componentes

- `Header.jsx`: título "PokéCards Store" y subtítulo.
- `SearchBar.jsx`: input controlado con `searchTerm` y `onSearchChange`.
- `Button.jsx`: botón reutilizable con `children`, `variant` y `onClick`.
- `ProductCard.jsx`: tarjeta que recibe `name`, `price`, `category`, `image`.
- `ProductList.jsx`: renderiza lista de productos con `.map()` y `key`.
- `Footer.jsx`: texto con el año actual.

## Datos

- `src/data/products.js` contiene 10 cartas con `id`, `name`, `price`, `category`, `image`.

## Cómo ejecutar

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Opcionalmente:

```bash
# Crear build de producción
npm run build

# Previsualizar el build
npm run preview
```

## Tecnologías

- React
- Vite

## Screenshots

- Home: ./screenshots/home.png
- Búsqueda: ./screenshots/search.png

## Entrega de Diplomado

- Proyecto correspondiente a la entrega del trabajo de Diplomado (base de e-commerce en React).
- Repositorio público: https://github.com/espinocoza/Tarea
- Demo en GitHub Pages: https://espinocoza.github.io/Tarea/
- Cumplimiento de requisitos técnicos mínimos:
	- 6 componentes custom en `src/components` (Header, SearchBar, Button, ProductCard, ProductList, Footer)
	- `ProductCard` recibe props (`name`, `price`, `category`, `image`)
	- Estado con `useState` en `App.jsx` para la búsqueda
	- Datos simulados en `src/data/products.js` con `id`, `name`, `price`, `category`, `image`
	- Listado renderizado con `.map()` y uso de `key={id}`
	- Filtrado por texto (nombre/categoría)
	- Organización de componentes dentro de `/components`

## Créditos de imágenes

- Arte oficial de Pokémon provisto por PokeAPI (uso comunitario):
	- https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/
- Las imágenes se cargan directamente desde el repositorio público de PokeAPI y se utilizan solo con fines educativos/demostrativos.
