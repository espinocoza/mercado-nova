export default function ProductCard({ name, price, category, image }) {
  return (
    <article className="product-card">
      <div className="image-wrap">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="category">{category}</p>
        <p className="price">
          ${Number(price).toFixed(2)}
        </p>
        <p className="description">
          Carta ideal para coleccionistas y entrenadores que quieren mejorar su mazo y presumir en las partidas.
        </p>
      </div>
    </article>
  )
}
