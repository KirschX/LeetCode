/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = 0;
  let indexes = [];
    
    if (s.length == 1) return s

  const findLongestPalindrome = (left, right) => {
    while (left >=0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > longest) {
        longest = right - left + 1;
        indexes = [left, right];
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    // odd length
    findLongestPalindrome(i, i);
    // even length
    findLongestPalindrome(i, i + 1);
  }

  const [left, right] = indexes;
  return s.substring(left, right + 1);
};
