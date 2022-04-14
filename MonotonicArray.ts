export function isMonotonic(array: number[]) {
  // Check for empty / 1 element arrays which are monotonic
  if (!array.length || array.length == 1) return true;

  // Check if array is decreasing or not to validate its items on the loop
  let isArrayDecreasing: boolean = array[0] > array[array.length - 1];

  for (var i = 0; i < array.length; i++) {
    // Check for last item, if we're here the array is monotonic
    if (i == array.length - 1) return true;

    if (isArrayDecreasing) {
      if (array[i] < array[i + 1]) {
        return false;
      }
    } else {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }
  }

  return true;
}
