/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// let arr = [];
// var rangeSumBST = function(root, low, high) {
//     if(!root) return;
    

//     if (root.val >= low && root.val <= high) {arr.push(root.val)}


//     console.log(root.val, arr, low, high)
    
//     rangeSumBST(root.left, low, high);
//     rangeSumBST(root.right, low, high);
    
//     console.log(arr.reduce((a,b) => a+b))
// };


var rangeSumBST = function(root, low, high) {

    let arr = 0;
    
    function sum (node, l, h) {
        if(!node) return;
        if(node.val >= l && node.val<= h) arr = arr + node.val;
    
    
        sum(node.left, l, h);
        sum(node.right, l, h);
        
        }
    
    sum(root,low,high);
    return arr;
};