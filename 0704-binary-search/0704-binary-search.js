/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
            
    let left = 0;
    let right = arr.length;
   
    while(left < right) {
        let mid = Math.floor((left+right)/2);
        if(arr[mid] === target) return mid
        
        if(arr[mid] >= target) right = mid;
        else left = mid+1
    }

    return -1
};