import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }
  componentDidCatch(error, info) {
    console.error('[ErrorBoundary] Caught error:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '1rem' }}>
          <h2>Ocurrió un error al cargar la aplicación</h2>
          <p style={{ color: '#9ca3af' }}>{String(this.state.error)}</p>
          <p>Recarga la página o revisa la consola para más detalles.</p>
        </div>
      )
    }
    return this.props.children
  }
}
