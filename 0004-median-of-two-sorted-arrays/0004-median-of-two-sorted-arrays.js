/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    function getMedian (arr) {
        
        const L = arr.length;
        if(L%2 === 0) {
            const right = L/2;
            const left = right-1;
            return (arr[right]+arr[left])/2;
        } 
        else {
         const mid = Math.floor(L/2);
            return arr[mid];
        }
    }
    
    const mergedArr = [...nums1, ...nums2].sort((a,b) => a-b)
    // console.log(mergedArr)
    // console.log(getMedian(nums2))
    
    return getMedian(mergedArr)
};

