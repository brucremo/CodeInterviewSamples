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


export function isPalindrome2(string: string) {
	// Transform string into array to facilitate iteration
  let strArray: string[] = Array.from(string);
	
	// Take right & left string positions for comparison
	let right: number = string.length - 1;
	let left: number = 0;
	
	// Iterate thru array, if char at equivalent positions is not the same, it's not a palindrome
	while(right >= left){
		if(strArray[right] != strArray[left]) return false;
		right--;
		left++;
	}
	
	return true;
}
