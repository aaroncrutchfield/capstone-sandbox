import { splitWords } from './words.js';

// countWords: how many words a string has
export function countWords(text) {
  if (typeof text !== 'string') throw new TypeError('countWords needs a string');
  return splitWords(text).length;
}
