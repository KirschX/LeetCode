/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function(nums, target) {
    
    nums.sort((a,b) => a-b);
    
    console.log(nums)
    let closest = Math.abs(target - (nums[nums.length-1] + nums[nums.length-1] + nums[nums.length-2]));
    let result = nums[nums.length-1] + nums[nums.length-2] + nums[nums.length-3];
    
  
    for(let i =0; i<nums.length-2; i++){
        
        let lo = i + 1;
        let hi = nums.length - 1;
        
        while(lo < hi){
            let sum = nums[i] + nums[lo] + nums[hi];
            
            if(closest > Math.min(Math.abs(target - sum), closest)) result = sum;
            closest = Math.min(Math.abs(target - sum), closest)
  
            
             // console.log(i, lo, hi, "  "  , sum, closest, result)
            
            if(sum === target) {
                result = sum;
                break;
            }
            
            if(sum > target) {
                hi--;
            }
            
            if(sum < target) {
                lo ++;
            }
            
            // console.log(i, lo, hi, sum, closest)
        }
    }
    return result;
};


// 매번 target과 sum과의 거리를 구해서 closest(최소거리)를 갱신
// closest가 이전 closest보다 작으면 result를 갱신
// closest 초기값은 최대거리로 (마지막순서 세개 sum과 target과의 거리?)