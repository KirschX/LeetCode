/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    
    let sum = 0;
    let prev = 0;
    let cur = 1;

    
    for(let i =1; i<s.length; i++){
        if(s[i] === s[i-1]) {
            
            cur ++;
            
        } else {
            
            sum += Math.min(cur, prev)
            
            prev = cur;
            
            cur = 1;
            
        }
        // console.log(i, prev, cur, sum)
    }
    return sum + Math.min(cur, prev)
};

// var countBinarySubstrings = function(s) {
//     let curr = 1, prev = 0, ans = 0
//     for (let i = 1; i < s.length; i++)
//         if (s[i] === s[i-1]) curr++
//         else ans += Math.min(curr, prev), prev = curr, curr = 1, console.log(curr, prev, ans)
    
//     return ans + Math.min(curr, prev)
// };