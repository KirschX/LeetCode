/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] -b[0] || a[1] - b[1]);

    
    let prev = intervals[0];
    const result = [prev];
   
    
    for(let i=0; i<intervals.length; i++){
        const cur = intervals[i];
        if(cur[0] <= prev[1]) {
            prev[1] = Math.max(cur[1], prev[1])
        } else {
            result.push(cur);
            prev = cur;
        }
    }
    // console.log(intervals)
    
    return result
    
};