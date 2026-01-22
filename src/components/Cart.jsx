import { formatCurrency } from '../utils/format.js'

export default function Cart({ items = [], onRemove, onChangeQty, onClear, onCheckout }) {
  const total = items.reduce((acc, it) => acc + it.price * it.qty, 0)
  return (
    <aside className="cart">
      <div className="cart-header">
        <h2>Carrito ({items.reduce((acc, it) => acc + it.qty, 0)})</h2>
        <button type="button" className="btn" onClick={onClear}>Vaciar</button>
      </div>
      {items.length === 0 ? (
        <p className="muted">Tu carrito está vacío.</p>
      ) : (
        <ul className="cart-list">
          {items.map((it) => (
            <li key={it.id} className="cart-item">
              <img src={it.thumbnail} alt={it.title} />
              <div className="cart-info">
                <strong>{it.title}</strong>
                <span>{formatCurrency(it.price)}</span>
              </div>
              <div className="cart-qty">
                <button type="button" onClick={() => onChangeQty?.(it.id, -1)}>-</button>
                <span>{it.qty}</span>
                <button type="button" onClick={() => onChangeQty?.(it.id, 1)}>+</button>
              </div>
              <button className="remove" type="button" onClick={() => onRemove?.(it.id)}>✕</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <span>Total</span>
        <strong>{formatCurrency(total)}</strong>
      </div>
      <div className="cart-actions">
        <button type="button" className="btn primary" onClick={onCheckout} disabled={items.length === 0}>Checkout</button>
      </div>
    </aside>
  )
}
