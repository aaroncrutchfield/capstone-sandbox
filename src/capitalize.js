import { splitWords } from './words.js';

// capitalizeWords: each word's first letter upper-cased, joined by single spaces
export function capitalizeWords(text) {
  return splitWords(text)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
