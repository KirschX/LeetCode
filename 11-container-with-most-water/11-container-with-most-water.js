/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(arr) {
    
    let left = 0;
    let right = arr.length-1;
    let max = 0;
    
    function getArea (l,r) {
        return (r-l)*(Math.min(arr[l], arr[r]))
    }
    
    while(left < right){
        
        max = Math.max(max, getArea(left, right))
        
        if (arr[left] < arr[right]) left++;
		else right--;
    }

    return max

};

//세로와 가로의 곱이 최대가 되어야 한다
//1x6 / 2x2 / 3*
//세로와 가로를 어디서부터?
//투포인터?