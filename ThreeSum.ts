type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
	array.sort((a, b) => a - b);
	const triplets: Triplet[] = [];
	
	for(var i = 0; i < array.length; i++) {
		let left = i + 1;
		let right = array.length - 1;
		
		while(left < right) {
			let tripletResult = array[i] + array[left] + array[right];
		
			if(tripletResult == targetSum){
				triplets.push([array[i], array[left], array[right]]);
				left++;
				right--;
			} 
			
			if(tripletResult < targetSum){
				left++;
			} else if(tripletResult > targetSum){
				right--;
			}
		}
	}
	
  return triplets;
}
