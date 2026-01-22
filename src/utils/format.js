const formatter = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' })
export function formatCurrency(n) {
  const num = typeof n === 'number' ? n : Number(n)
  return formatter.format(isNaN(num) ? 0 : num)
}
