/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    // k의 최댓값은 1000
    // arr의 최댓값 + k의 최댓값 까지 순회
    // count
    
    arr = arr.reverse()
    const L = arr.length;
    
    let count = 0;
    
    for(let i=1; i < (L + 1000+1); i++){
        if(arr.length !== 0 && i === arr[arr.length-1]){
            arr.pop();
            continue;
        } else count++;

        if(count === k) return i;
    }
};