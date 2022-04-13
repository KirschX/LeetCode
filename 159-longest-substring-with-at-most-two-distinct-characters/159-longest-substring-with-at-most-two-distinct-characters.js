/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {

    let max = 0
    let left = 0, right = 0
    let map = new Map()
    while(right < s.length) {
        map.set(s[right], right)
        if(map.size === 3) {
            let minIndex = Math.min(...map.values())
            map.delete(s[minIndex])
            left = minIndex + 1
        }
        max = Math.max(max, right - left + 1)
        right++
    }
    return max
};