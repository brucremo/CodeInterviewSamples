export function nonConstructibleChange(coins: number[]) {
    // Sort array to help on the aggregation below
	coins.sort((a,b) => a - b);
	var minimum: number = 0;
	
	for (const coin of coins) {
		// if coin @ i is greater than last minimum DOABLE COIN found + 1
		if (coin > minimum + 1) return minimum + 1;
		
		// otherwise we keep increasing the minimum, since array is sorted
		minimum += coin;
	}

    // if looped thru the whole array, the total value + 1 is the minimum UNDOABLE coin
  return minimum + 1;
}
