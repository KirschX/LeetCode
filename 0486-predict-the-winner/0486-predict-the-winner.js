var predictTheWinner = function(nums) {
    const n = nums.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Base case: for a single score
    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }

    // Fill the DP table
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            dp[i][j] = Math.max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1]);
        }
    }

    console.log(dp)
    return dp[0][n-1] >= 0;
};