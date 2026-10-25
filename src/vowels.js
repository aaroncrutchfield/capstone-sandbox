// vowels: how many a, e, i, o, u (either case) a string has
export function vowels(text) {
  if (typeof text !== 'string') throw new TypeError('vowels needs a string');
  return (text.match(/[aeiou]/gi) ?? []).length;
}
