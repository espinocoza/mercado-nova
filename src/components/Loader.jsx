export default function Loader({ label = 'Cargando...' }) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="spinner" aria-hidden="true" />
      <span className="loader-text">{label}</span>
    </div>
  )
}
