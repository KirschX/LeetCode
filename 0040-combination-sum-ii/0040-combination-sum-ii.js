/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort((a,b) => a-b)
    // console.log(candidates)
    
    const set = new Set()
    let result = [];
    
    const traverse = (n, arr, tempSum) => {
        if(tempSum === target) {
            set.add(JSON.stringify(arr))
            return;
        }
        
        if(n > candidates.length) return;
        if(candidates[n] > target) return;

        for(let i =n; i<candidates.length; i++){
             if (i != n && candidates[i] == candidates[i-1]) continue;
            if(tempSum>target) return;
            arr.push(candidates[i])
            traverse(i+1, arr, tempSum + candidates[i])
            arr.pop()
        }
    }

    traverse(0, [], 0)
    
    return Array.from(set).map(item => JSON.parse(item))
};



  //   1
  // 1   2
  //    5 6
  //     7 10   