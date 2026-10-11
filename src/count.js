import { splitWords } from './words.js';

// countWords: how many words a string has
export function countWords(text) {
  return splitWords(text).length;
}
