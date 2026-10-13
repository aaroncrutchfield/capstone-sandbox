import { splitWords } from './words.js';

// initials: the first letter of each word, upper-cased, joined with nothing between
export function initials(text) {
  return splitWords(text).map((word) => word[0].toUpperCase()).join('');
}
