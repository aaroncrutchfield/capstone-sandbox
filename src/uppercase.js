// uppercase: how many characters A to Z a string has
export function uppercase(text) {
  if (typeof text !== 'string') throw new TypeError('uppercase needs a string');
  return (text.match(/[A-Z]/g) ?? []).length;
}
