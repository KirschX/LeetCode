const letterCombinations = function(digits) {
  // Create a mapping of digit to letters
  const lettersMap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };
  
  // Create an array to hold the combinations
  const combinations = [];
  
  // Recursive helper function to generate the combinations
  const generateCombinations = function(digits, index, combination) {
    // Base case: if the combination has as many characters as the digits string, add it to the combinations array and return
    if (index === digits.length) {
      combinations.push(combination);
      return;
    }
    
    // Get the letters corresponding to the current digit
    const letters = lettersMap[digits[index]];
    
    // Recursively generate combinations for each letter
    for (let i = 0; i < letters.length; i++) {
      generateCombinations(digits, index + 1, combination + letters[i]);
    }
  };
  
  // Start the recursive generation with an empty string
  if (digits) {
    generateCombinations(digits, 0, "");
  }
  
  return combinations;
};