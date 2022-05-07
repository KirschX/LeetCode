/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    
    if((stones.length === 2) && (stones[0] === stones[1])) {
        return 0
    }
    

    while (stones.length > 1) {
        if((stones.length === 2) && (stones[0] === stones[1])) {
            return 0
            }
        stones.sort((a,b)=> b-a)
        // console.log(stones)
        if(stones[0] && stones[1]) {
            let first = stones[0]
            let second = stones[1]
            stones.shift()
            stones.shift()
            if(first !== second) stones.unshift(Math.abs(first - second))
        }
     
    }
    return stones[0]
};