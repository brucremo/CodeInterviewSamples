export function hasSingleCycle(array: number[]) {
    // A 0 gets us stuck, so return false as we can't cycle the array with it
    if (array.includes(0)) return false;
    let arrayLength: number = array.length;

    // References
    let visitedItems: number = 0;
    let index: number = 0;

    while (visitedItems < arrayLength) {
        let destination = index + array[index];

        if (destination >= arrayLength) {
            while (destination >= arrayLength) {
                destination -= arrayLength;
            }
        } else if (destination < 0) {
            while (destination < 0) {
                destination += arrayLength;
            }
        }

        // Check if we're stuck
        if (array[index] + array[destination] == 0) {
            return false;
        }

        index = destination;

        visitedItems++;
    }

    return index == 0;
}
