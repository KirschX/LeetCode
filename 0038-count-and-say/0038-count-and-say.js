/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n, str = '1') => {
    if( n === 1) return str;
    
    let temp = '', count = 0, prev = str[0]
    
    for (let i=0; i<str.length; i++){
        if(str[i] === prev){
            count ++;
        } else {
            temp = temp + count + prev;
            count = 1;
            prev = str[i]
        }
    }
    temp = temp + count + prev
    
  return countAndSay(n - 1, temp);
};