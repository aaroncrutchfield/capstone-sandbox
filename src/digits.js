// digits: how many characters 0 to 9 a string has
export function digits(text) {
  if (typeof text !== 'string') throw new TypeError('digits needs a string');
  return (text.match(/[0-9]/g) ?? []).length;
}
