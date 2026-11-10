// lowercase: how many characters a to z a string has
export function lowercase(text) {
  if (typeof text !== 'string') throw new TypeError('lowercase needs a string');
  return (text.match(/[a-z]/g) ?? []).length;
}
