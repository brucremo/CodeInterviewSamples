export function insertionSort(array: number[]) {
	for(var i = 1; i < array.length; i++){
		let j = i;
		while(j > 0 && array[j] < array[j - 1]){
			swap(j, j - 1, array);
			j -= 1;
		}
	}
  return array;
}

export function swap(i: number, j: number, array: number[]) {
	let aux: number = array[i];
	array[i] = array[j];
	array[j] = aux;
}