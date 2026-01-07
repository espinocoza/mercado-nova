import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import ProductList from './components/ProductList.jsx'
import Footer from './components/Footer.jsx'
import products from './data/products.js'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase()
    if (!q) return products
    return products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
  }, [searchTerm])

  return (
    <div className="app">
      <Header />
      <main className="container">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ProductList products={filtered} />
      </main>
      <Footer />
    </div>
  )
}
