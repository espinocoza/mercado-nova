export default function Button({ children, variant = 'primary', onClick, type = 'button', disabled }) {
  return (
    <button
      type={type}
      className={`btn ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
