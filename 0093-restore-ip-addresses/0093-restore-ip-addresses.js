var restoreIpAddresses = function(s) {
    let result = new Set()
    
    const trav = (arr, string, count) => {
        if(count>4) return;
        if(count === 4 && string.length === 0) result.add(JSON.stringify(arr))
        if(!string.length) return;
        
        // console.log(arr, string)
        
        for(let i=0; i<3; i++){
            let temp = string.slice(0, i+1)
            if(temp > 255) continue;
            if(temp.length >1 && temp.startsWith("0")) continue;
            trav([...arr, temp] , string.slice(i+1), count+1)
        }
    }
    
    trav([], s, 0)
    
    return Array.from(result).map((item) => {
        item = JSON.parse(item)
        return item.join(".")
    })
    
};