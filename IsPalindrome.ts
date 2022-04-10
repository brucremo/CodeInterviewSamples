function isPalindrome(s: string): boolean {
    // Filter out non lowercase letters from string array
    let cleanS = Array.from(s.toLowerCase())
        .filter(x => (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) || 
                (x.charCodeAt(0) >= 48 && x.charCodeAt(0) <= 57)) ;
    
    let left = 0;
    let right = cleanS.length - 1;
    
    if(cleanS.length == 1){
        return true;
    }
    
    while(left < right){
        
        if(cleanS[left] != cleanS[right]){
            return false;
        }
        left++;
        right--;
    }
    
    return true;
};