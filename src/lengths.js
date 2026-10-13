import { splitWords } from './words.js';

// wordLengths: the length of each word of a string, in order
export function wordLengths(text) {
  if (typeof text !== 'string') {
    throw new TypeError('wordLengths needs a string');
  }
  return splitWords(text).map((word) => word.length);
}
