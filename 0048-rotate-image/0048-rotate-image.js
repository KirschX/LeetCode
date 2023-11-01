/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length; 
    const depth = Math.floor(n/2);
    for(let i=0; i<depth; i++){
           const len = n - i*2 -1; 
           const opp = n-1-i;
        for(let j=0; j < len; j++){
           const temp = matrix[i][i+j];
           matrix[i][i+j] = matrix[opp-j][i];
           matrix[opp-j][i] = matrix[opp][opp-j];
           matrix[opp][opp-j] = matrix[i+j][opp]
           matrix[i+j][opp] = temp;
       }
   }
    
    
};


// ///
// [1,2,3]
// [4,5,6]
// [7,8,9]

// [7,4,1]
// [8,5,2]
// [9,6,3]


// ///
// matrix[0,0] -> matrix[0,2] 
// matrix[0,2] -> matrix[2,2]
// matrix[2,2] -> matrix[2,0]
// matrix[2,0] -> matrix[0,0]


///

