/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    
    function iterate (mat) {
            // 맨위 shift
    const top = mat.shift();
    if(top) result.push(...top);
    
    // 오른쪽 pop 순회
    const right = mat.map((item) => item.pop());
    if(right) result.push(...right)
    
    // 아래 pop
    if(mat.at(-1)){
       const bottom = [...mat.at(-1).reverse()]
        mat.pop()
        if(bottom) result.push(...bottom)
       }
        
    //왼쪽 shift
        const left = [...mat].reverse().map((item) => item.shift());
        if(left.every((item) => item !== undefined)) result.push(...left);
           
    }


    while(matrix.length !== 0){
        iterate(matrix)
    }
    
    
   return result.filter((item) => item !== undefined)
    
};