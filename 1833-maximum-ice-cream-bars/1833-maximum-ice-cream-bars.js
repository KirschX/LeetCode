/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    
    costs.sort((a,b) => a-b)

    let result = 0;
    let count = 0;
    if(costs[0] > coins) return 0;
    

    for(let i=0; i<costs.length; i++){
        const item = costs[i];
        coins = coins - item
        count++;
        if(coins=== 0) return count;
        if(coins<= 0) return result = count-1;
    }
    
    if(coins>0) return count;
    

};