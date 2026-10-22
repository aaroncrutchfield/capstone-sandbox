import { caseWords } from './words.js';

// snakeCase: words lower-cased and joined with '_'
export function snakeCase(text) {
  return caseWords(text, 'snakeCase').map((word) => word.toLowerCase()).join('_');
}
