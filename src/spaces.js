// spaces: how many space characters (U+0020) a string has
export function spaces(text) {
  if (typeof text !== 'string') throw new TypeError('spaces needs a string');
  return (text.match(/ /g) ?? []).length;
}
