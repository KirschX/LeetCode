var letterCombinations = function(digits) {
       if (digits.length === 0) {
        return [];
    }
    
    let digitObject = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    const map = new Map(Object.entries(digitObject));
    const combinations = [];

    function traverse(n, string) {
        if (n === digits.length) {
            combinations.push(string);
            return;
        }

        const digit = digits[n];
        const letters = map.get(digit);
        for (const letter of letters) {
            traverse(n + 1, string + letter);
        }
    }

    traverse(0, "");
    const uniqueCombinations = [...new Set(combinations)];
    return uniqueCombinations.sort();
};