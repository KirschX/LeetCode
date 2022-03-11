/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let map = new Map();
    
    let result;
    
    for(let i =0; i<s.length; i++) {
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i])+1)
            
        } else {
             map.set(s[i], 1)    
        }

    }

    let arr = Array.from(map.keys())
    
    
    for(let i =0; i<arr.length; i++){
        if (map.get(arr[i]) === 1) {
            console.log(arr[i])
            return s.indexOf(arr[i])
            }
       
    }

    return -1
        
    
  
        
};

/// map에서 value가 1인 key값을 찾아서 s에서의 key값으 위치를 찾아라