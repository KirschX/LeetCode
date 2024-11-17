/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1's valid elements
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for nums1's final merged position

    // Merge elements from the end
    while (j >= 0) {
        // If nums1 has elements left and nums1[i] is greater, use nums1[i]
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            // Otherwise, use nums2[j]
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};