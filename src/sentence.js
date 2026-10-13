import { splitWords } from './words.js';

// sentenceWords: the words of a sentence, with trailing . , ! ? removed
export function sentenceWords(text) {
  return splitWords(text)
    .map((word) => word.replace(/[.,!?]+$/, ''))
    .filter(Boolean);
}
