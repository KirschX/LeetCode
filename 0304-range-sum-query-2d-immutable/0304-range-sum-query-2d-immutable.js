/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix
    
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let count = 0;
    
    for(let i=row1; i<row2+1; i++){
        for(let j=col1; j<col2+1; j++){
            count = count+ this.matrix[i][j];
        }
    }
    return count;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */