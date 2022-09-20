export function princeNumberToString(price: number) {
  const [value, cents] = String(price / 100).split('.')

  return `${value},${cents.padEnd(2, '0')}`
}

export function princeStringToNumber(price: string) {
  const [value, cents] = price.split(',')
  return parseInt(`${value}${cents}`)
}
