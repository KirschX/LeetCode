/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map = new Map();
    let map2 = new Map();
    let ans = []
    
    nums1.map((item, i) => {
        if(!map.has(nums1[i])){
            map.set(nums1[i], 1)    
        }
    })
    
     nums2.map((item, i) => {
        if(map.has(nums2[i]) && !ans.includes(nums2[i])){
            ans.push(nums2[i])
        }
    })
    return ans
};