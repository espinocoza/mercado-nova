PokéCards Store

Este es mi proyecto de e-commerce básico hecho con React + Vite.
La idea es simular una pequeña tienda de cartas Pokémon donde se pueden ver las cartas, buscar por nombre y filtrar rápido.

Lo hice como parte de la tarea del curso, enfocándome en aprender a crear componentes, usar props, manejar estado y organizar bien el proyecto.

¿Qué hace esta página?

Muestra un listado de cartas Pokémon.

Tiene un buscador que filtra por nombre o categoría.

Tiene componentes separados y reutilizables.

Usa datos simulados desde un archivo products.js.

 Componentes que creé

Estos son los componentes principales que desarrollé:

Header → muestra el título de la página.

SearchBar → input controlado con useState.

ProductCard → recibe props y muestra cada carta.

ProductList → recorre el array con .map() y renderiza las cards.

Button → botón reutilizable.

Footer → información básica al final de la página.

 Estado usado

Uso useState en el buscador para manejar el texto ingresado y filtrar los productos.

 Datos simulados

Puse los datos en:

src/data/products.js


Cada carta tiene:

{
  "id": 1,
  "name": "Charizard",
  "price": 14.99,
  "category": "Fuego",
  "image": "charizard.png"
}

🔧 Cómo ejecutar el proyecto en local

Si alguien quiere probarlo en su computador:

npm install
npm run dev

Versión online (Deploy)

El proyecto está publicado en GitHub Pages acá:

 https://espinocoza.github.io/Tarea/

 Capturas de pantalla
Vista general

(![1000090464](https://github.com/user-attachments/assets/f84cdfa5-e592-40bb-ba17-53c0e72de190)
)

Buscador funcionando

(![1000090465](https://github.com/user-attachments/assets/e58817c8-046a-4839-8e09-cf99fc8748dd)
)

 Tecnologías que usé

React

Vite

JavaScript

CSS

Node.js

GitHub Pages

Comentario personal

Me gustó hacer este proyecto porque pude practicar React ordenado y entendí mucho mejor cómo funcionan los componentes y el estado.
También aprendí a desplegar una página usando GitHub Pages, que era algo que nunca había hecho.
