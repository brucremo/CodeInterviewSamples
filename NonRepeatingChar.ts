export function firstNonRepeatingCharacter(string: string) {
  // Use a hashset to keep track of character count
  let hashSet: { [char: string]: number } = {};
  // Transform string into an array
  let str: string[] = Array.from(string);

  for (var i = 0; i < str.length; i++) {
    if (str[i] in hashSet) {
      hashSet[str[i]]++;
    } else {
      hashSet[str[i]] = 1;
    }
  }

  // Get unique chars from array & sort them to get first non-repeating
  let nonRepeatingChar = Object.keys(hashSet)
    .filter((x) => hashSet[x] == 1)
    .sort((a, b) =>
      hashSet[a] > hashSet[b] ? 1 : hashSet[a] < hashSet[b] ? -1 : 0
    )[0];

  return string.indexOf(nonRepeatingChar);
}
