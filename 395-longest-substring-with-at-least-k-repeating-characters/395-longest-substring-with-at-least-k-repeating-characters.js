/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 0540 ~ 

const longestSubstring = function(s, k) {
    
    function DAQ(left, right) {
        // console.log(left, right)
        if(right -left < k) return 0;
        const map = new Map();
        for(let i = left; i < right; i++){
            map.set(s[i], map.get(s[i]) +1 || 1)      
        }
        
        for(let pivot = left; pivot < right; pivot++){
            if(map.get(s[pivot]) < k) {
                let nextPivot = pivot + 1;
                while(nextPivot < right && map.get(s[nextPivot]) <k) {
                    nextPivot++;
                    console.log(pivot,nextPivot)
                }
                return Math.max(DAQ(left, pivot), DAQ(nextPivot, right))
            }
        }
        return right - left
    }
    return DAQ(0, s.length)
};
    
    
// aaabb 3


// aacacbbb 3
// aaabbc 3
// aaabbabcb 3
// ababbc 2
// abbaaac 3
        
// ababcb

