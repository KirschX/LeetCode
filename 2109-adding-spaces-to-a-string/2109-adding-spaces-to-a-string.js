/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let map = new Map()
    
    let sArr = s.split("")

    // sArr.map((item,index) => {
    //     map.set(item, )
    // })
    
    spaces.map((item,index) => {
        map.set(item, " " + s[item])
    })
    
    sArr.map((item, index) => {
        if(!map.get(index)){
            map.set(index, item)
        }
    })
   

    
    let temp = Array.from(map.entries()).sort((a,b) => a[0] -b[0])
    
    let result = temp.reduce((acc,cur)=> acc + cur[1] ,'')
    
    return result
};