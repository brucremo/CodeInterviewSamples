export function moveElementToEnd(array: number[], toMove: number) {
  let leftIndex: number = 0;
  let rightIndex: number = array.length - 1;

  // Loop thru the array
  while (leftIndex <= rightIndex) {
    let rightValue = array[rightIndex];
    let leftValue = array[leftIndex];
    // Check if rightIndex contains the number to move, skip it if it's the case
    if (rightValue == toMove) {
      rightIndex--;
      // Check if leftIndex contains the number to move
    } else if (leftValue == toMove && rightValue != toMove) {
      let aux = rightValue;
      array[rightIndex] = leftValue;
      array[leftIndex] = aux;
    } else {
      leftIndex++;
    }
  }

  return array;
}
