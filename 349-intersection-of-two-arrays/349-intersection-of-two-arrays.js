/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection (nums1 , nums2){
    let setNum1 = new Set(nums1);

    return [...new Set(nums2.filter(num => setNum1.has(num)))];
}