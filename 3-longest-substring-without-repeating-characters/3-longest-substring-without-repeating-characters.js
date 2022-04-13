/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    
    let start = 0;
    let L = 0;
    let map = new Map()
    let max = 0;
    
    for(let i =0; i<s.length; i++){
        
       
        
        if(!map.has(s[i])){
            L++;
        }
        else {
            start = Math.max(map.get(s[i]) +1, start)
            L =  Math.min(i - start + 1)
            
            
        }
        
        map.set(s[i], i)
        
        max = Math.max(max, L)
        
        // console.log(L, max)
    }
    
    
    return max
};