/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const map = new Map();
    let count = 0;
    let max = 0;
    
      intervals.forEach(([start,end],i) => {
          map.set(start, (map.get(start) || 0) + 1)
          map.set(end, (map.get(end) || 0) + -1)
      })
    
    const entryArr = Array.from(map.entries()).sort((a,b) => a[0] - b[0])
    
    entryArr.map((item, i) => {
        count = count + item[1]
        max = Math.max(max, count)
    })
    
    return max;
};