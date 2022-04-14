/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {}
    
    for(const number of arr) {
        if(map[number]) {
            map[number] += 1
        } else {
            map[number] = 1
        }
    }
    
    const frequencies = Object.values(map)
    const set = new Set(frequencies)
    
    return frequencies.length === set.size
};