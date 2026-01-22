export default function ProductCard({ id, name, price, category, image, description, onAdd }) {
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
        {description && (
          <p className="description">{description}</p>
        )}
        <div style={{ marginTop: '0.6rem' }}>
          <button
            className="btn primary"
            type="button"
            onClick={() => onAdd?.({ id, title: name, price, thumbnail: image })}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  )
}
