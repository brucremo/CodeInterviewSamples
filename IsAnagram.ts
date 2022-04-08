function isAnagram(s: string, t: string): boolean 
{
    if(s.length != t.length){
        return false;
    }

    let sChars = Array.from(s);
    let tChars = Array.from(t)
    
    let sHashTable: {[char: string]: number} = {}
    let tHashTable: {[char: string]: number} = {}
    
    for (var i = 0; i < s.length; i++){
        if(sChars[i] in sHashTable){
            sHashTable[sChars[i]]++;
        }else{
            sHashTable[sChars[i]] = 1;
        }
        
        if(tChars[i] in tHashTable){
            tHashTable[tChars[i]]++;
        }else{
            tHashTable[tChars[i]] = 1;
        }
    }
    
    for (let char of sChars){
        if (tHashTable[char] != sHashTable[char]) return false;
    }
    
    return true;
};