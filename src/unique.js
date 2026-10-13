import { splitWords } from './words.js';

// uniqueWords: the words of a string in first-seen order, repeats removed (case-sensitive)
export function uniqueWords(text) {
  return [...new Set(splitWords(text))];
}
