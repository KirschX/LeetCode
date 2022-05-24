/**
0705 ~
 * @param {string} s
 * @return {number}
 */ 
var longestPalindrome = function(s) {
    
    
    // 홀수가 있다면, 홀수 중에서 가장 큰수 넣기
    // 나머지 홀수들은 -1해서 넣기
    // 짝수 양옆에 한개씩 넣기
    
    let map = new Map();
    let result = 0;
    
    s.split("").map(item => {
        map.set(item, map.get(item) +1 || 1)
    })

    
    let odd = false;

    for(let v of map.values()){
        if(v%2 == 0){
            result = result + v;
        } else {
            odd = true;
            result = result + v-1;
        }
    }

    
    return odd ? result +1 : result;
    
};

