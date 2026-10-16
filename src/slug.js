import { splitWords } from './words.js';

// slugify: the words of a string, lower-cased and joined with '-'
export function slugify(text) {
  return splitWords(text).map((word) => word.toLowerCase()).join('-');
}
