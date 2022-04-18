export function quickSort(array: number[]) {
  sortAux(0, array.length - 1, array);
  console.log(array);
  return array;
}

export function sortAux(
  startIdx: number,
  endIdx: number,
  array: number[]
): void {
  // If we got here we're done sorting
  if (startIdx >= endIdx) return;

  let pivotIdx: number = startIdx;
  let leftIdx: number = startIdx + 1;
  let rightIdx: number = endIdx;

  // loop thru records that are not the pivot
  while (leftIdx <= rightIdx) {
    // if left > pivot && right < pivot, swap left & right
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(leftIdx, rightIdx, array);
    }

    if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
    if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
  }
  // swap pivot with last right index
  swap(pivotIdx, rightIdx, array);

  // Check if there are less alements at the right of pivot than the left
  let itemsToTheRight: number = endIdx - rightIdx;
  let isRightSmallestSide: boolean = itemsToTheRight > rightIdx;

  // if there are less elements at right, sort it first, left otherwise
  if (isRightSmallestSide && itemsToTheRight > 1) {
    // Sort right
    sortAux(rightIdx + 1, endIdx, array);
    // Sort left
    sortAux(startIdx, rightIdx - 1, array);
  } else {
    // Sort left
    sortAux(startIdx, rightIdx - 1, array);
    // Sort right
    sortAux(rightIdx + 1, endIdx, array);
  }
}

// swaps numbers between index i & j
export function swap(i: number, j: number, array: number[]): void {
  let aux: number = array[i];
  array[i] = array[j];
  array[j] = aux;
}
