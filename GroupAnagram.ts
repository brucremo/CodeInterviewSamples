function groupAnagrams(strs: string[]): string[][] {
    let hashTable: {[char: string]: string[]} = {}
    
    for(var x = 0; x < strs.length; x++){
        let arr = Array.from(strs[x]).sort();
        let sorted: string = arr[0];
        
        if(arr.length != 0){
            sorted = arr.reduce((a, b) => a + b);
        }
        
        if(!(sorted in hashTable)){
           hashTable[sorted] = []  
        }
        hashTable[sorted].push(strs[x]);
    }
    
    return Object.keys(hashTable).map(key => hashTable[key]);
};