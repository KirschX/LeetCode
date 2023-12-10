/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// var reverseBits = function(n) {
//     console.log(n)
//     const binaryString = n.toString(2).padStart(32, '0');
    
//     console.log(binaryString)
//     const reversed = binaryString.split("").reverse().join(""); 
    
//     return parseInt(reversed, 2); // Convert back to a number
// };


function reverseBits(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        // console.log(`loop ${i}`)
        result <<= 1;
        // console.log("1", result)
        result |= (n & 1);
        // console.log("2", result)
        n >>>= 1;
        // console.log("3", result, n.toString(2))
    }
    return result >>> 0;
}

// result 키우기(오른쪽에 0추가)
// n의 마지막 비트 추출하고, result의 가장 오른쪽에 추가
// n을 오른쪽으로 shift(가장 오른쪽 비트 자르기)