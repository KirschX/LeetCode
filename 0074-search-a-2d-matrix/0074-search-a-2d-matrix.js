/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    let x,y
    
    const bSearch = (arr, target) => {
        let left = 0;
        let right = arr?.length;
        let mid
        while(left < right){
            mid = Math.floor( (left+right)/2 )
            if(target === arr[mid]) return mid;
            if(target < arr[mid]) right = mid;
            else left = mid + 1;
        }
        return right
    }


    let colArr = matrix.reduce((acc,cur) => {
        acc.push(cur[0])
        return acc
    },[])

    
    y = bSearch(colArr, target)
    
    if(matrix?.[y]?.[0] === target) return true;
    else {
        x = bSearch(matrix[y-1], target)
        // console.log(x)
        if(matrix?.[y-1]?.[x] === target) return true
        else return false
    }
};