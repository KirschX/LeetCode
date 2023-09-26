/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    
    intervals = intervals.map((item,index) => [...item, index]);
    
    intervals.sort((a,b) => a[0] - b[0])
    
    let result = Array.from({length: intervals.length}).map((item) => "_");
    
    function search(arr, left, right, tar) {
        
        let mid;
        while(left <= right){
            mid = Math.floor((left + right)/2);
            if(arr[mid][0] < tar) left = mid + 1;
            else right = mid - 1;
        }
        
        return intervals[left];
    }
    

    for(let i =0; i<intervals.length; i++){
        const item = intervals[i];
        const target = intervals[i][1]
        let rightInterval = search(intervals, 0, intervals.length-1, target)

        
        if(rightInterval !== undefined) result[item[2]] = rightInterval[2]
        else result[item[2]] = -1
    }

   
    return result
};