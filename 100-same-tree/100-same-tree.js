/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
   
    
    let pArr =[];
    let qArr =[];
    let result;
    
    function checkSame (node) {
        if (!node) {
           pArr.push(null)
            return;
        }
        
        pArr.push(node.val)
        checkSame(node.left)
        checkSame(node.right)
  
    }
    
     function checkSame2 (node) {
        if (!node) {
           qArr.push(null)
            return;
        }
        
        qArr.push(node.val)
        checkSame2(node.left)
        checkSame2(node.right)
  
    }
    
    
    checkSame(p);
    checkSame2(q);
    
    console.log(pArr, qArr)
    
    if (JSON.stringify(pArr) === JSON.stringify(qArr)) {
        result = true
    } else {
        result = false
    }
    
    return result
}