export function priceFormat(value: number) {
  return new Intl.NumberFormat('pt-br', {
    minimumFractionDigits: 2,
  }).format(value)
}
