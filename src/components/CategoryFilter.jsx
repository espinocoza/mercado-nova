export default function CategoryFilter({ categories = [], selected, onChange }) {
  const labelFor = (c) => c === 'all' ? 'Todos' : String(c)
  return (
    <div className="category-filter" role="group" aria-label="Filtrar por categoría">
      {categories.map((c) => {
        const value = typeof c === 'string' ? c : c?.slug || c?.name || String(c)
        return (
          <button
            key={value}
            type="button"
            className={`chip ${selected === value ? 'active' : ''}`}
            onClick={() => onChange(value)}
          >
            {labelFor(value)}
          </button>
        )
      })}
    </div>
  )
}
