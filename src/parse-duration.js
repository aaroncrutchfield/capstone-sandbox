import { UNITS } from './units.js'

const ORDER = Object.keys(UNITS)

export function parseDuration(text) {
  if (typeof text !== 'string') {
    throw new TypeError(`Duration must be a string, got ${typeof text}: pass text like "1h30m"`)
  }
  if (text === '') {
    throw new SyntaxError('Empty duration: write parts like "1h30m" using d, h, m, s')
  }
  const part = /(\d+)([dhms])/y
  let total = 0
  let last = -1
  while (part.lastIndex < text.length) {
    const at = part.lastIndex
    const match = part.exec(text)
    if (!match) {
      throw new SyntaxError(`Invalid duration "${text}" at position ${at}: each part is a whole number followed by d, h, m or s, with no spaces`)
    }
    const rank = ORDER.indexOf(match[2])
    if (rank === last) {
      throw new SyntaxError(`Invalid duration "${text}": unit "${match[2]}" appears twice`)
    }
    if (rank < last) {
      throw new SyntaxError(`Invalid duration "${text}": units must go largest first (d, h, m, s)`)
    }
    last = rank
    total += Number(match[1]) * UNITS[match[2]]
  }
  return total
}
