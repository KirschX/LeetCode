/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 0715 ~
 */
var carPooling = function(trips, capacity) {
    
    let map = new Map()
    
    for(let i =0; i<trips.length; i++){
        map.set(trips[i][1], (map.get(trips[i][1]) || 0) + trips[i][0] );
        
        map.set(trips[i][2], (map.get(trips[i][2]) || 0) - trips[i][0] )
        
//         console.log(map)
    }
    
    // console.log(map)
    
    let arr = Array.from(map).sort((a,b) => a[0] - b[0])
    
    // console.log(arr)
    
    let cur = 0;
    for(let i=0; i<arr.length; i++){
        cur = cur + arr[i][1];
        // console.log(cur)
        if(cur > capacity) return false;
    }
    
    return true
};

// 끝까지 가는동안
// 승객의 current 총합이 capacity를 넘지 않으면 된다.
// 다음 트립에 도착했는데, 이전 승객이 안내린 경우
// 2 5
// trip.[2] > trip[1]
// 내린 경우

// 2 2 5 5 3 3 0