// lowercase: how many characters a to z a string has
export function lowercase(text) {
  return (text.match(/[a-z]/g) ?? []).length;
}
