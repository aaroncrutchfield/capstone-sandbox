import { sentenceWords } from '../sentence.js';

// caseWords: the words every case conversion works on, refusing non-strings by name
export function caseWords(text, name) {
  if (typeof text !== 'string') {
    throw new TypeError(`${name} needs a string`);
  }
  return sentenceWords(text);
}
