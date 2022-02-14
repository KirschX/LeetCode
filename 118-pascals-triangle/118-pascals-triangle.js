/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    let result = [];
    
    if (numRows === 1) {
        result.push([1]);
        return result
    }
    
    
    if (numRows === 2) {
        result.push([1],[1,1])
        return result
    };
    
    result = [[1],[1,1]];
    
    while(numRows >2) {
        let cur = [];
        let prev = result[result.length-1]
        
        for(let i =0; i<prev.length-1; i++) {
            cur.push(prev[i] + prev[i+1])
        }
        cur.push(1)
        cur.unshift(1)
        
        result.push(cur)
        
        numRows--;
        // console.log(cur, prev, numRows)
    }
    return result
};