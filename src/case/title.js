import { caseWords } from './words.js';

// titleCase: each word with its first letter upper-cased and the rest lower-cased
export function titleCase(text) {
  return caseWords(text, 'titleCase')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
