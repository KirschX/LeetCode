/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let left =0;
    let temp ='';
    let count =0
    let right = 0;
    while(right < s.length){

        if(right === spaces[count]){
         temp += s.slice(left,right) + " "
        left = right;
        count++;

        }
    right++;
    }

temp+=s.slice(left,right)
return temp
};