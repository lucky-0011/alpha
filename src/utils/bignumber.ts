import BigNumber from 'bignumber.js'

type Value = string | number | bigint | BigNumber

BigNumber.config({
  DECIMAL_PLACES: 100,
})

// value1 + value2
export function plus(value1: Value, value2: Value): string {
  return new BigNumber(value1).plus(new BigNumber(value2)).toString()
}

// value1 + value2 + value3 + ...
export function plusAll(values: Value[]): string {
  return values.reduce<string>((result, value) => plus(result, value), '0')
}

// value1 - value2
export function minus(value1: Value, value2: Value): string {
  return new BigNumber(value1).minus(new BigNumber(value2)).toString()
}

// value1 * value2
export function times(value1: Value, value2: Value): string {
  return new BigNumber(value1).times(new BigNumber(value2)).toString()
}

// value1 * value2 * value3 *...
export function timesAll(values: Value[]): string {
  return values.reduce<string>((result, value) => times(result, value), '1')
}

// value1 / value2
export function div(value1: Value, value2: Value): string {
  return new BigNumber(value1).div(new BigNumber(value2)).toString()
}

// format
interface FormatOptions {
  decimalPlaces?: number
  rounding?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  isShowPositiveSymbol?: boolean
}

export function format(
  _value: Value,
  {
    decimalPlaces,
    rounding = 4,
    isShowPositiveSymbol = false,
  }: FormatOptions = {},
): string {
  const value = new BigNumber(_value)
  const isPositive = !value.isZero() && value.isPositive()
  let result = isPositive && isShowPositiveSymbol ? '+' : ''
  if (decimalPlaces !== undefined) {
    result += value.toFormat(decimalPlaces, rounding)
  } else {
    result += value.toFormat()
  }
  return result
}

export const formatToHumanReadable = (
  _value: Value,
  { decimalPlaces, rounding = 4 }: FormatOptions = {},
): string => {
  const value = new BigNumber(_value)
  if (value.isNaN() || !value.isFinite()) return 'NaN'
  const units = ['', 'K', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y']
  const unitIndex = Math.floor(Math.log(value.abs().toNumber()) / Math.log(1000))
  if (unitIndex >= units.length) {
    return format(value, { decimalPlaces, rounding })
  }
  const scaledValue = div(value, 1000 ** unitIndex)
  return `${format(scaledValue, { decimalPlaces, rounding })}${units[unitIndex]}`
}

// value1 > value2
export function gt(value1: Value, value2: Value): boolean {
  return new BigNumber(value1).gt(new BigNumber(value2))
}

// value1 >= value2
export function gte(value1: Value, value2: Value): boolean {
  return new BigNumber(value1).gte(new BigNumber(value2))
}

// value1 < value2
export function lt(value1: Value, value2: Value): boolean {
  return new BigNumber(value1).lt(new BigNumber(value2))
}

// value1 <= value2
export function lte(value1: Value, value2: Value): boolean {
  return new BigNumber(value1).lte(new BigNumber(value2))
}
