/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let result = ""
    
    let count = 0;
    for (let i =0; i<s.length; i++){
        if(i === spaces[count]){
            result +=  " " + s[i]
            count++;
        } else result +=  s[i]
    }
    
    return result
    
    
};

// var addSpaces = function(s, spaces) {
//     let left =0;
//     let temp ='';
//     let count =0
//     let right = 0;
//     while(right < s.length){

//         if(right === spaces[count]){
//          temp += s.slice(left,right) + " "
//         left = right;
//         count++;

//         }
//     right++;
//     }

// temp+=s.slice(left,right)
// return temp
// };