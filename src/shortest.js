import { splitWords } from './words.js';

// shortestWord: the shortest word of a string, the first one on a tie, '' when blank
export function shortestWord(text) {
  if (typeof text !== 'string') throw new TypeError('shortestWord needs a string');
  return splitWords(text).reduce((best, word) => (best === null || word.length < best.length ? word : best), null) ?? '';
}
