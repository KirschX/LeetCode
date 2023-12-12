/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    //matrix 초기화
    // const matrix = new Array(m).fill(0).map(item => new Array(n).fill(0))
    // console.log(matrix)
    let minX = m;
    let minY = n;

    for(let i=0; i < ops.length; i++){
        const tarX = ops[i][0];
        const tarY = ops[i][1];
        
        minX = Math.min(tarX, minX);
        minY = Math.min(tarY, minY);
        
        // for(let j=0; j < tarX; j++){
        //     for(let k=0; k < tarY; k++){
        //         matrix[j][k] = matrix[j][k] + 1
        //     }            
        // }
    }
    
//     console.log(matrix)
//     console.log(minX, minY)
    
    return minX * minY
};