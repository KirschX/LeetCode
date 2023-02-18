var letterCombinations = function(digits) {
    const digitMap = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    
    if(digits === '') {
        return [];
    }
    
    const digitsArray = digits.split('');
    const candidates = [];
    
    for(let i = 0; i < digitsArray.length; i++) {
        candidates.push(digitMap[digitsArray[i]]);
    }
    
    const combos = generateCombinations(candidates);
    const result = combos.map(combo => combo.join(''));
    
    return result;
};

function generateCombinations(candidates) {
    const result = [];
    
    function backtrack(combination, index) {
        if(index === candidates.length) {
            result.push([...combination]);
            return;
        }
        
        for(let i = 0; i < candidates[index].length; i++) {
            combination.push(candidates[index][i]);
            backtrack(combination, index + 1);
            combination.pop();
        }
    }
    
    backtrack([], 0);
    
    return result;
}