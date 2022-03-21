/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {

    // max degree 찾고
    // md와 같은 숫자들만 모아서
    // 모은것의 부분 집합 중에서 가장 짧은 길이 부분집합을 반환
    
    // obj {
    //     1 : 2
    //     2 : 2
    //     3 : 1
    // }
    
    let obj = {};
    
    nums.map(item => {
        obj[item] = obj[item] + 1 || 1;
    })
    
    let aa = Object.values(obj)
    
    let maxDegree = (Math.max(...aa))
    
    let mdArr = [];
    
    // console.log(maxDegree)
    for(let key in obj) {
        if (obj[key] === maxDegree) mdArr.push(key)
    }
    // console.log(mdArr)
        
    let result =[];
    let result2;
    for (let i = 0; i<mdArr.length; i++) {

        let temp = [];
        for(let j=0; j<nums.length; j++) {
            if (nums[j] === parseInt(mdArr[i])){
                temp.push(j)
        
            }
        }
    // console.log(temp)
        result.push(temp[temp.length-1] - temp[0] +1)
    }
 // console.log(result)
    return Math.min(...result)
};