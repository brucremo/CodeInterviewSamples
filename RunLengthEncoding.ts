export function runLengthEncoding(string: string) {
  let stringArray: string[] = Array.from(string);
  let encodedString: string = "";
  let index: number = 0;

  while (index < stringArray.length) {
    let sequenceCount: number = 1;
    let lastIndex: number = index + 1;
    while (stringArray[index] == stringArray[lastIndex]) {
      lastIndex++;
      sequenceCount++;

      if (sequenceCount == 9) {
        encodedString += `${sequenceCount}${stringArray[index]}`;
        sequenceCount = 0;
      }
    }

    if (sequenceCount > 0) {
      encodedString += `${sequenceCount}${stringArray[index]}`;
    }

    index = lastIndex;
  }

  return encodedString;
}
