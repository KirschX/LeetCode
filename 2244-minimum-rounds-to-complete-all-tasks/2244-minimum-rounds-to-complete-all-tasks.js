/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    
    const map = new Map();
    
    const findMinSum = (num) => {
            const remain = num % 3
            
            // M 구하기
            let m;
            if(remain === 1) m = Math.floor(num/3) -1;
            else m = Math.floor(num/3);
            num = num - m * 3;
            
            //n 구하기
            let n = Math.floor(num/2)
            // console.log([m,n])
        
            return m+n;
    }
    
    // console.log(findMinSum(5))
        
    
    tasks.forEach((item) => {
        if(map.get(item)) map.set(item, map.get(item) + 1)
        else map.set(item, 1)
       
    })

    
    // console.log(map.values())
    
    // 3으로 나누기, 나머지가 1이면 -1, 몫 n
    // 2로 나누기, 몫 m
    
    const temp = Array.from(map.values());
    let count = 0;
    
    for(let i=0; i<temp.length; i++){
        const item = temp[i];
        if(item === 1) return -1;
        const tempCount = findMinSum(item);
        count = count + tempCount;
        
    }
    
    return count;
};

// 5 = 3n + 2m