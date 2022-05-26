/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total = 0;
    let cur = 0;
    let start = 0;
    
    for(let i=0; i<gas.length; i++){
        total += gas[i] - cost[i]
        if(cur + gas[i] - cost[i] < 0){
            cur = 0;
            start = i+1; 
        } else {
            cur += gas[i] - cost[i];
        }
    }
    
    return total < 0 ? -1 : start

};

// 우선 cost[i] <= gas[i] 조건 충족할때 ()
// -2 -2 -2 3 3
// -2 -2 -2

// -3  1 -5 3 1
// -3 -2  

// maximum subarray가 시작되는 지점?
// cumSumArr[i] < dp[i-1] + cumSumArr[i] 일경우 count ++; 그렇지 않을경우 count 초기화
// 
// starting gas station을 구하여라


