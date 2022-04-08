export function tournamentWinner(competitions: string[][], results: number[]) {
	const hashTable: {[team: string]: number} = {};
    // Set the current best team to the 1st on the competition list for reference only
	let currentBest: string = competitions[0][0];
	
    // Each team faces off against all other teams
	for (var i = 0; i < results.length; i++){
		let result = results[i];
		let winnerIndex = result == 0 ? 1 : 0;
		let loserIndex = result == 0 ? 0 : 1;
		
        // Check for existing / new winner
		if(competitions[i][winnerIndex] in hashTable){
			hashTable[competitions[i][winnerIndex]] += 3; 
		}else{
			hashTable[competitions[i][winnerIndex]] = 3; 
		}
		
        // If the loser element doesn't exist, create it
		if(!(competitions[i][loserIndex] in hashTable)) {
			hashTable[competitions[i][loserIndex]] = 0; 
		}
		
        // Keep track of the current best team at each iteration
		if(hashTable[competitions[i][winnerIndex]] > hashTable[currentBest]){
			currentBest = competitions[i][winnerIndex]
		}
	}
	
  return currentBest;
}
