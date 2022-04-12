/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    
    // abcabcbb
    // 12323321
    
    // abba
    // 121
    
    // abbca
    // 12123
    //   !
   // 1212
    
    // pwwkew
    // 121231
    
    //wobgrovw
    //12345456
    //w의위치가 start 포인트보다 큰지 작은지
    
    //pwwkew
    //121233
    
    if(!s.length) return 0
    
    let count = 0;
    let max = 1;
    let map = new Map();
    let start = 0;
    
    for(let i=0; i<s.length; i++){
        
        
             
        if( !map.has(s[i]) ){
            count++;
           } 
        else {
           start = Math.max(start, map.get(s[i]) + 1)
            
           count = Math.min(i - start +1 , i - map.get(s[i])) 
             
        }
        
        map.set(s[i], i)
        max = Math.max(max, count)
        
//         console.log(count, max,  start, map)  
    
        
    }
    
    return max
};