/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
   const binaryString = n.toString(2).padStart(32, '0'); // Convert to binary and pad with zeros
    const reversed = binaryString.split("").reverse().join(""); // Reverse the binary string
    return parseInt(reversed, 2); // Convert back to a number
};