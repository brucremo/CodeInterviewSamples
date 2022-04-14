export function binarySearch(array: number[], target: number): number {
	return binarySearchAux(array, target, 0, array.length - 1);
}

export function binarySearchAux(array: number[], target: number, left: number, right: number): number {
	// Iterated through and the left index is larger than right
	if (left > right) return -1;
	
	// Middle index
	const middle = Math.round((left + right) / 2);
	const potentialMatch = array[middle];
	
	if(target == potentialMatch){
		return middle;
	} else if (target < potentialMatch) {
		// Right is now index right before pravious middle
		// Left is untouched
		return binarySearchAux(array, target, left, middle - 1);
	} else {
		// Left is now index right after middle
		// Right is unchanged
		return binarySearchAux(array, target, middle + 1, right);
	}
}
