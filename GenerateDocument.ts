export function generateDocument(characters: string, document: string) {
  let charactersHashTable: { [char: string]: number } = {};
  let documentsHashTable: { [char: string]: number } = {};

  // Keep track of each string's char count
  countChars(characters, charactersHashTable);
  countChars(document, documentsHashTable);

  // Check if the counts match for every char
  for (let char of Object.keys(documentsHashTable)) {
    if (
      !(char in charactersHashTable) ||
      charactersHashTable[char] < documentsHashTable[char]
    ) {
      return false;
    }
  }

  return true;
}

export function countChars(str: string, hashTable: { [char: string]: number }) {
  for (let char of Array.from(str)) {
    if (char in hashTable) {
      hashTable[char]++;
    } else {
      hashTable[char] = 1;
    }
  }
}
