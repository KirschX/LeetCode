/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let temp = [];
    let result = [];

    
    function traverse(index, sum, temp) {
        if(sum === target){
            result.push([...temp])
            // result.push(temp.slice())
            //console.log(temp, result)
            return;
        }
        
        if(sum > target) return;
        
        for(let i = index; i<candidates.length; i++){
            temp.push(candidates[i])
            traverse(index, sum + candidates[i], temp)
            temp.pop()
            index ++;
        }
    }
    
    traverse(0, 0, temp)
    
    return result;
};

