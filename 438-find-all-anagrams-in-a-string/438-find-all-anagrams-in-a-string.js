/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    
    let result = [];
    let left = 0;
    let right = 0;
    let map = new Map()
    let count = p.length;
    
    for(let i=0; i<p.length; i++){
        map.set(p[i], (map.get(p[i]) || 0) + 1)
    }
    
    while(right < s.length){
        if(map.get(s[right]) > 0) count--;
        
        
        map.set(s[right], (map.get(s[right]) || 0) - 1)
         right++;
        
        if(count === 0) result.push(left)
        
        if(right-left === p.length){
                if(map.get(s[left]) >= 0) count++;
                map.set(s[left], (map.get(s[left]) || 0)  + 1)
                left ++;
        }
        
        // console.log(map, left, right, count)
    }
   
    return result
};


// const findAnagrams = (s, p) => {
    

//     const output = [];
//     const neededChars = {};
    

//     for (let char of p) {
//         if (char in neededChars) {
//             neededChars[char]++
//         } else neededChars[char] = 1
//     }

//     let left = 0;
//     let right = 0; 
//     let count = p.length 
    

//     while (right < s.length) {
     
//         if (neededChars[s[right]] > 0) count--;
        

//         neededChars[s[right]]--;
//         right++;
        
     
//         if (count === 0) output.push(left);
        

//         if (right - left == p.length) {
//             if (neededChars[s[left]] >= 0) count++;
//             neededChars[s[left]]++;
//             left++;
//         }
//     }
//     return output;
// };