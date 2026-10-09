export const UNITS = Object.freeze({ d: 86400, h: 3600, m: 60, s: 1 })

export function toSeconds(amount, unit) {
  if (!Object.hasOwn(UNITS, unit)) {
    throw new RangeError(`Unknown time unit "${unit}": use one of d, h, m, s`)
  }
  return amount * UNITS[unit]
}
