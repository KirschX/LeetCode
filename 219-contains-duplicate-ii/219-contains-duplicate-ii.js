/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    let pos1 = 0;
    let pos2 = k;
    let map = new Map()
    nums.slice(pos1, pos2 +1).map((item) => map.set(item, (map.get(item) || 0) + 1))
    
    for (let v of map.values()){
       if(v >= 2) return true;
    }
    
//     console.log(map)
    
    for(let i=1; i<nums.length - k ; i++){
        let temp = nums.slice(pos1 +i, pos2 +i+1)
      
        map.set(nums[pos2+i], (map.get(nums[pos2+i]) || 0) +1)
        map.set(nums[pos1+i-1], map.get(nums[pos1+i-1]) -1)
        // console.log(temp, map)
  
        if(map.get(nums[pos2+i]) >= 2) return true;
    }
    
    return false;
};