import { formatName } from './names.js'

// Returns a greeting for a name.
export function greet(name) {
  return `Hello, ${name}!`
}

// Returns a greeting for a { first, last } person.
export function greetPerson(person) {
  return greet(formatName(person))
}
