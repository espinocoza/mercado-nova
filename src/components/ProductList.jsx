import ProductCard from './ProductCard.jsx'

export default function ProductList({ products }) {
  if (!products || products.length === 0) {
    return (
      <p className="no-results">
        No se encontraron cartas para esta búsqueda. <br />
        Prueba con otro nombre, tipo o categoría.
      </p>
    )
  }

  return (
    <section className="product-list">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          name={p.name}
          price={p.price}
          category={p.category}
          image={p.image}
        />
      ))}
    </section>
  )
}
