/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {

    let start = 0;
    let L = 0;
    let max = 0;
    let map = new Map()
    
    // eceba
    // 123
    
    // ccaabbb
    // 1234
    
    
    for(let i=0; i<s.length; i++){
    
        if(!map.has(s[i]) && map.size == 2) {
            start = Math.min(...map.values()) + 1
            L = i - start + 1;
            
            map.delete(s[Math.min(...map.values())])
            
        } else {
            L++;
        }
     
        map.set(s[i], i)
        max = Math.max(max, L)
        // console.log(L, max, map)
    }
    
    
    return max;
};