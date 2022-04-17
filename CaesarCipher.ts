export function caesarCipherEncryptor(string: string, key: number) {
  let strArray: string[] = Array.from(string);
  // Get ascii representation for lowercase letters
  let asciiStart: number = 97;
  let asciiEnd: number = 122;
  let result: string = "";

  // Iterate thru string adding each char to the cipher key
  for (let char of strArray) {
    let charCode: number = char.charCodeAt(0) + key;

    // If the resulting ascii code is over z, wrap it up
    while (charCode > asciiEnd) {
      charCode = asciiStart + (charCode - asciiEnd - 1);
    }

    // Add resulting char to overall string
    result += String.fromCharCode(charCode);
  }

  return result;
}
