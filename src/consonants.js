// consonants: how many letters a to z (either case), other than a, e, i, o, u, a string has
export function consonants(text) {
  if (typeof text !== 'string') throw new TypeError('consonants needs a string');
  return (text.match(/[b-df-hj-np-tv-z]/gi) ?? []).length;
}
