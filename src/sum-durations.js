import { toSeconds } from './units.js'

export function sumDurations(pairs) {
  return pairs.reduce((total, [amount, unit]) => total + toSeconds(amount, unit), 0)
}
