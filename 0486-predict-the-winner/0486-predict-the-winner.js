var predictTheWinner = function(nums) {
    function dfs(l, r) {
        // Base case: if l == r, return the number at that position
        if (l == r) {
            return nums[l];
        }

        // Choice 1: Player picks the leftmost number
        // The opponent will then try to minimize the remaining value
        let pickLeft = nums[l] - dfs(l + 1, r);
        
        // Choice 2: Player picks the rightmost number
        let pickRight = nums[r] - dfs(l, r - 1);

        // Return the maximum of the two choices
        return Math.max(pickLeft, pickRight);
    }

    return dfs(0, nums.length - 1) >= 0;
};