/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sn = String(n)

    let sum = [];
    
 
        
    
    while(sum[sum.length-1] !== 1) {
        let temp=0;
        
        for(let i = 0; i<sn.length; i++){
            let aa = sn[i]*sn[i]
            temp = temp + aa
    
            
            }
        if(sum.includes(temp)) break;
        sum.push(temp)
        sn = String(temp)
        
    }
    
    return sum[sum.length-1] == 1 ? true : false 

    
    
};