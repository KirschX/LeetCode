/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
//     let map = new Map()
    
//     let sArr = s.split("")

//     spaces.map((item,index) => {
//         map.set(item, " " + s[item])
//     })
    
//     sArr.map((item, index) => {
//         if(!map.get(index)){
//             map.set(index, item)
//         }
//     })
   

    
//     let temp = Array.from(map.entries()).sort((a,b) => a[0] -b[0])
    
//     let result = temp.reduce((acc,cur)=> acc + cur[1] ,'')
    
//     return result
    
    
    let map = new Map()
    
    let sArr = s.split("")
    
    let count = 0;
    sArr.map((item, index) => {
        if(index === spaces[count]){
            map.set(index, " " + item)
            count++;
        } else map.set(index, item)
        
    })
    
    return Array.from(map.values()).join("")
    
    
};