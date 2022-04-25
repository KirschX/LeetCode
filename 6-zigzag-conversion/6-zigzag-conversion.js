/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    

    // 012321 012321 // 4
    // 012345 012345
    // 0121 0121 0 // 3
    // 0123
    
    if(numRows === 1) return s;
    
    let result = [];
    

    
    let arr = Array.from({ length : numRows+1}).map(item => Array.from({ length : 0}))

        let reverse = false;
        let count =0;
        for(let i=0; i<s.length; i++){
        arr[count].push(s[i]);    
        reverse ? count-- : count++;
        if (count === numRows - 1 || count === 0) reverse = !reverse;
            
            
    
        // console.log(count, arr)
        }

        
        arr.map(item => result.push(...item))
       
       return result.join("")
};
