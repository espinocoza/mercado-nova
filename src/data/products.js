const art = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

const products = [
  { id: 1, name: 'Pikachu', price: 9.99, category: 'Eléctrico', image: art(25) },
  { id: 2, name: 'Charizard', price: 14.99, category: 'Fuego', image: art(6) },
  { id: 3, name: 'Squirtle', price: 7.49, category: 'Agua', image: art(7) },
  { id: 4, name: 'Bulbasaur', price: 7.49, category: 'Planta', image: art(1) },
  { id: 5, name: 'Eevee', price: 8.99, category: 'Normal', image: art(133) },
  { id: 6, name: 'Gengar', price: 12.99, category: 'Fantasma', image: art(94) },
  { id: 7, name: 'Mewtwo', price: 19.99, category: 'Psíquico', image: art(150) },
  { id: 8, name: 'Jigglypuff', price: 6.99, category: 'Hada', image: art(39) },
  { id: 9, name: 'Snorlax', price: 11.49, category: 'Normal', image: art(143) },
  { id: 10, name: 'Lucario', price: 13.49, category: 'Lucha', image: art(448) }
]

export default products
