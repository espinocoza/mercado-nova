import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import CategoryFilter from './components/CategoryFilter.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import ErrorMessage from './components/ErrorMessage.jsx'
import { fetchProducts } from './services/products.js'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cart, setCart] = useState([])

  useEffect(() => {
    let active = true
    ;(async () => {
      try {
        setLoading(true)
        const data = await fetchProducts()
        if (active) setProducts(data)
      } catch (err) {
        if (active) setError('No se pudieron cargar los productos.')
      } finally {
        if (active) setLoading(false)
      }
    })()
    return () => {
      active = false
    }
  }, [])

  // Restore cart from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('cart')
      if (raw) setCart(JSON.parse(raw))
    } catch {}
  }, [])

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart))
    } catch {}
  }, [cart])

  const categories = useMemo(() => {
    const set = new Set(products.map(p => p.category))
    return ['all', ...Array.from(set)]
  }, [products])

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase()
    let base = products
    if (selectedCategory !== 'all') {
      base = base.filter(p => p.category === selectedCategory)
    }
    if (!q) return base
    return base.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
  }, [searchTerm, selectedCategory, products])

  // Cart handlers
  const handleAddToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const handleRemoveFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  const handleChangeQty = (id, delta) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
  }

  const handleClearCart = () => setCart([])
  const handleCheckout = () => alert('Checkout no implementado (demo)')

  return (
    <div className="app">
      <Header />
      <main className="container">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <>
            <ProductList products={filtered} onAdd={handleAddToCart} />
            <Cart
              items={cart}
              onRemove={handleRemoveFromCart}
              onChangeQty={handleChangeQty}
              onClear={handleClearCart}
              onCheckout={handleCheckout}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
