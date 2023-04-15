/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const runningSum = nums.reduce((acc,cur) => {
        acc.push((acc[acc.length-1] || 0) + cur)
        return acc
    }, [])
    

    return runningSum
};