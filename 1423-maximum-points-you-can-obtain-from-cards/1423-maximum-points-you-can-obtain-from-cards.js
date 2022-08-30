/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(CP, k) {
    
    let NCP = [...CP, ...CP]
    
    let sum = (arr) => arr.reduce((acc, cur) => acc+cur, 0)
    


    
    let left = CP.length-k;
    let right = CP.length-1;
    
    let preSum = sum(NCP.slice(left, right+1))
    let max = preSum;
    

    
    for (let i=0; i<k+1; i++){
        // console.log(max, preSum, NCP[left], NCP[right+1])
        max = Math.max(preSum, max)
        preSum = preSum - NCP[left] + NCP[right+1]
        left++;
        right++;
        
        
    }
    
    return max
};

// 1 2 3 4 5 6 1 1 2 3 4 5 6 1
    
