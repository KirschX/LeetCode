/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    
    let count =0;
    let result = 0;
    
    boxTypes.sort((a,b) => b[1] - a[1])
    
    // console.log(boxTypes)
    
    boxTypes.map((item,index) => {
        for (let i=0; i<item[0]; i++){
            if(count == truckSize) return;
            count = count+1;
            result = result + item[1]
        }
    })
    
    return result
  }