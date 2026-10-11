// splitWords: the words of a string, split on runs of whitespace
export function splitWords(text) {
  return text.split(/\s+/).filter(Boolean);
}
