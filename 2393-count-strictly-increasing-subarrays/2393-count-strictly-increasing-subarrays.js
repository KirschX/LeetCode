/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let counts = 0;
    let length = 0; // to keep track of the length of the current strictly increasing subarray
    
    for(let i = 0; i < nums.length; i++) {
        // If the next element is greater than the current, 
        // it's a part of increasing subarray
        if(i < nums.length - 1 && nums[i] < nums[i + 1]) {
            length++;
            counts += length;
        } else {
            // Reset length for the next strictly increasing subarray
            length = 0;
        }
        // Count the single elements as they are trivially strictly increasing subarrays
        counts++;
    }
    
    return counts;
};

// console.log(countSubarrays([1, 3, 5, 2, 4])); // Output: 10