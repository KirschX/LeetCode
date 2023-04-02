/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function searchInsert(nums, target) {
    
    return bSearch(nums, target, 0, nums.length-1)
};

function bSearch (arr, target, start, end) {
        if(start>end) return start
  
        let midIndex = Math.floor((start+end) /2)
        
        if(arr[midIndex] === target) return midIndex
        
        if(arr[midIndex] > target) return bSearch(arr, target, start, midIndex-1)
        if(arr[midIndex] < target ) return bSearch(arr, target, midIndex+1, end)
}

