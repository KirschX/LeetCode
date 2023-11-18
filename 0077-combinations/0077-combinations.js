/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
    let results = [];
    let stack = [];

    stack.push({index: 1, combination: []});

    while (stack.length > 0) {
        let {index, combination} = stack.pop();

        // When the combination is of length k, add it to the results
        if (combination.length === k) {
            results.push(combination);
            continue;
        }

        // Iterate through the numbers
        for (let i = index; i <= n; ++i) {
            // Create a new combination from the current one and push it onto the stack
            stack.push({index: i + 1, combination: [...combination, i]});
        }
    }

    return results;
}