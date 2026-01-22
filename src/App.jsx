import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import ProductList from './components/ProductList.jsx'
import Footer from './components/Footer.jsx'
import Loader from './components/Loader.jsx'
import ErrorMessage from './components/ErrorMessage.jsx'
import { fetchProducts } from './services/products.js'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

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

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase()
    if (!q) return products
    return products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
  }, [searchTerm, products])

  return (
    <div className="app">
      <Header />
      <main className="container">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <ProductList products={filtered} />
        )}
      </main>
      <Footer />
    </div>
  )
}
