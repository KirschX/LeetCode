/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    let memo = [];
    
    memo[0] = 0;
    memo[1] = 1;
    
    if(n==0) return memo[0];

    
    while(memo.length-1 !== n) {
        memo.push(memo[memo.length-2] + memo[memo.length-1])
        // console.log(memo)
    }
    
    return memo[n]

};