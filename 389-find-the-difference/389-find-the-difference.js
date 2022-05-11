/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    let map = new Map();
    let map2 = new Map();
    let answer;
    
    [...s].map(item => {
        if(!map.has(item)) map.set(item, 1)
        else map.set(item, map.get(item) +1)
    });
    
    [...t].map(item => {
         if(!map2.has(item)) map2.set(item, 1)
        else map2.set(item, map2.get(item) +1)
    });
    
//     console.log(map, map2)
    
    // for(let i = 0; i<t.length; i++){
    //     if(!(map.get(t[i]) === map2.get[t[i]])) answer = t[i]
    // }
    
    for (let item of map2) {
        if(map.get(item[0]) !== item[1]) answer = item[0]
    }
    
    
    return answer
    
};