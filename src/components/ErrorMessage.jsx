export default function ErrorMessage({ message = 'Ocurrió un error.' }) {
  return (
    <div className="error-message" role="alert">
      <strong>Error:</strong> <span>{message}</span>
    </div>
  )
}
