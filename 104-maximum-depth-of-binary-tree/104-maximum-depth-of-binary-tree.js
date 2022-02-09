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
 * @return {number}
 */
var maxDepth = function(root) {
	// if root is empty
    if(!root) return false;
	
    let maxDepth = 0;
    let tempDepth = 0;
    
	// recursion down to the furthest node
    const traversal = (node) => {
	
		//every level add one
        tempDepth += 1;
		
		//compare temp against max depth
        if(tempDepth > maxDepth) maxDepth = tempDepth;
		
		//traverse down the tree.
        node.left && traversal(node.left);
        node.right && traversal(node.right);
		
		//you've exhausted that branch- remove one from counter while moving back up a level. 
        tempDepth -= 1;
    }
	//invoke traversal
    traversal(root)
	
	//after recursion return max
    return maxDepth;
};