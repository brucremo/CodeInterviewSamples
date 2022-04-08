// O(n) | O(n) 
function twoSum(nums: number[], target: number): number[] {
    const hashTable: {[num: number]: number} = {};
    
    for (var i = 0; i < nums.length; i ++){
        
        let result = target - nums[i]; 
        
        if(result in hashTable) {
            return [hashTable[result], i]
        }else{
            hashTable[nums[i]] = i;
        }
    }
    
    return [];
};