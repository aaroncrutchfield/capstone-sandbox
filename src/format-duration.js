import { UNITS } from './units.js'

export function formatDuration(seconds) {
  if (!Number.isInteger(seconds) || seconds < 0) {
    throw new RangeError(`Cannot format ${seconds} as a duration: pass a whole number of seconds, 0 or more`)
  }
  const parts = []
  let rest = seconds
  for (const [unit, size] of Object.entries(UNITS)) {
    const count = Math.floor(rest / size)
    rest -= count * size
    if (count > 0) parts.push(`${count}${unit}`)
  }
  return parts.length ? parts.join(' ') : '0s'
}
