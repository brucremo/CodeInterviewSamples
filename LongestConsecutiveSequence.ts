function longestConsecutive(nums: number[]): number {
    if(nums.length == 0 || nums.length == 1) {
        return nums.length;
    }
    
    let sorted = Array.from(new Set(nums.sort((a, b) => a - b)));
    let longestStreak = 1;
    let currentStreak = 1;
    
    for(var i = 0; i < nums.length; i++){
        if(sorted[i + 1] == (sorted[i] + 1)){
            currentStreak++;
        }else{
            if(currentStreak > longestStreak) {
                longestStreak = currentStreak;
                currentStreak = 1;
            }else{
                currentStreak = 1;
            }
        }
    }
    
    return longestStreak;
};