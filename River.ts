export function riverSizes(matrix: number[][]) {
	let riverCounts: number[] = [];
	// Keep track of all nodes that have been visited
	const visitedNodes: boolean[][] = matrix.map(row => row.map(value => false));
	
  for(var i = 0; i < matrix.length; i++){
		for(var j = 0; j < matrix[i].length; j++){
			if(visitedNodes[i][j] || matrix[i][j] == 0){
				visitedNodes[i][j] = true;
				continue;
			} else{
				getRiverSizeBFS(i, j, matrix, visitedNodes, riverCounts);
			}
		}
	}
	
  return riverCounts;
}

export function getRiverSizeBFS(
	i: number, 
	j: number, 
	matrix: number[][],
	visitedNodes: boolean[][],
	sizes: number[]
) {
	let riverSize: number = 0;
	// Queue with X:Y indexes to process
	let stack = [[i, j]];
	
	while(stack.length != 0){
		let currentNode = stack.pop()!;
	
		// Get position
		i = currentNode[0];
		j = currentNode[1];
		
		// If the position is visited or 0, skip it
		if(visitedNodes[i][j]) continue;
		visitedNodes[i][j] = true;
		if(matrix[i][j] == 0) continue;
		
		// Otherwise if it's 1 and not visited, new river
		riverSize++;
		
		// Add neighbr nodes (same river) to be processed
		getNeighborNodes(i, j, matrix, visitedNodes)
			.forEach(node => stack.push(node));
	}
	
	// If this is a river, add the size
	if(riverSize > 0) sizes.push(riverSize);
}

export function getNeighborNodes(
	i: number, 
	j: number, 
	matrix: number[][],
	visitedNodes: boolean[][]
): number[][] {
	// Get matrix indexes of visited nodes
	let neighbors: [number, number][] = [];
	
	//Node to the left
	if(i > 0 && !visitedNodes[i - 1][j]) neighbors.push([i-1, j]);	
	//Node to the right
	if(i < matrix.length - 1 && !visitedNodes[i + 1][j]) neighbors.push([i + 1, j]);	
	//Node above
	if(j > 0 && !visitedNodes[i][j - 1]) neighbors.push([i, j - 1]);	
	//Node below
	if(j < matrix[0].length - 1 && !visitedNodes[i][j + 1]) neighbors.push([i, j + 1]);
	
	return neighbors;
}
