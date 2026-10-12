import { splitWords } from './words.js';

// reverseWords: the words of a string in reverse order, joined by single spaces
export function reverseWords(text) {
  return splitWords(text).reverse().join(' ');
}
