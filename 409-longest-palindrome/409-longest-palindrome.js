/**
0705 ~
 * @param {string} s
 * @return {number}
 */ 
var longestPalindrome = function(s) {
    
    
    // 홀수가 있다면, 홀수 중에서 가장 큰수 넣기
    // 짝수 양옆에 한개씩 넣기
    
    let map = new Map();
    let result = 0;
    
    s.split("").map(item => {
        map.set(item, map.get(item) +1 || 1)
    })

    // console.log(map.values())
    
    let odd = [];
    let even = [];
    
    Array.from(map.values()).map(item => {
        if(item%2 === 0) even.push(item)
        else odd.push(item)
    })
    
    odd.sort((a,b) => a-b)
    
    console.log(odd, even)
    
    if(odd.length) result = odd.pop()
    
    
    odd.map(item => {
        if(item -1 >0) result = result + item -1
    })
    
    even.map(item => {
        result = result + item
    })
    
    return result
    
};

