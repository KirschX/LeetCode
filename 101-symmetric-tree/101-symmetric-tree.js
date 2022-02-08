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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    
    if (!root) return true;
    
    let q1 =[root.left];
    let q2 =[root.right];
    let q1Arr =[];
    let q2Arr =[];
    
    while(q1.length){
          
        let a = q1.shift();
       
        if(a) {
            q1Arr.push(a.val)

            q1.push(a.left)
            q1.push(a.right)
            } 
        else {
              q1Arr.push(null)
          } 
          
    }
    
    while(q2.length){
          
        let a = q2.shift();
       
        if(a) {
            q2Arr.push(a.val)

            q2.push(a.right)
            q2.push(a.left)
            
            } 
        else {
              q2Arr.push(null)
          } 
          
    }
    
    if(JSON.stringify(q2Arr) === JSON.stringify(q1Arr)){
        return true;
    } else return false;
};