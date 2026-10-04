import { formatName } from './names.js'

// Uppercases the first letter of a word and lowercases the rest.
export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

// Returns a farewell for a full-name string.
export function farewell(name) {
  const [first, ...rest] = name.trim().split(/\s+/)
  const formatted = formatName({ first: capitalize(first), last: rest.map(capitalize).join(' ') })
  return `Goodbye, ${formatted}!`
}
