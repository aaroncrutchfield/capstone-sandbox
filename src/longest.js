import { splitWords } from './words.js';

// longestWord: the longest word of a string, the first one on a tie, '' when blank
export function longestWord(text) {
  return splitWords(text).reduce((best, word) => (word.length > best.length ? word : best), '');
}
