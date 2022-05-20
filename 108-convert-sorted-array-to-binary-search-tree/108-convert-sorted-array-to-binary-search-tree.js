/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    

    function build(lo, hi) {
        if(lo >= hi) return null;
        
        let mid = Math.floor((lo + hi) / 2)
        
        let node = new TreeNode(nums[mid]);
        
        node.left = build(lo, mid);
        node.right = build(mid+1, hi);
        
        return node;
    }
    
    return build(0, nums.length);
    
   
    
    
};