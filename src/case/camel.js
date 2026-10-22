import { caseWords } from './words.js';

// camelCase: the words joined, the first lower-case, each later one capitalized
export function camelCase(text) {
  return caseWords(text, 'camelCase')
    .map((word, i) => {
      const lower = word.toLowerCase();
      return i === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}
