import { caseWords } from './words.js';

// kebabCase: words lower-cased and joined with '-'
export function kebabCase(text) {
  return caseWords(text, 'kebabCase').map((word) => word.toLowerCase()).join('-');
}
