/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const arr = Array.from({length:n}).map((item, index) => item = index +1 );
   
    const getCombinations = (arr, m) => {
        if(m === 1) return arr.map(v => [v])
        const result = [];
       
        arr.forEach((item, index, origin) => {
            const rest = origin.slice(index+1);
            const combinations = getCombinations(rest, m-1);
    
            combinations.map(comb => result.push([item, ...comb]))
       
        })
    
        return result; 
    }
             
        
    
 
    return getCombinations(arr,k)
};