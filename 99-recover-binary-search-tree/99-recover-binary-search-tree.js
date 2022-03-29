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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {

    let arr = [];
    let target = [];
    
    function check(node) {
        if(!node) return;

        check(node.left)
        
        // if(arr[arr.length-1] > node.val)
        //     target.push(arr[arr.length-1])
        // if(node.val < arr[arr.length-1]) target.push(node.val)
         arr.push(node.val)
        
        check(node.right)
    }
    
    check(root)
    
    // console.log(arr)
   for(let i=0; i<arr.length; i++){
       if(arr[i]>arr[i+1]) target.push(arr[i])
       if(arr[i]<arr[i-1]) target.push(arr[i])
   }

    // console.log(target)
    
    function change(node) {
        if(!node) return;
        
        if(node.val === target[0]) {
            node.val = target[target.length-1]
        } else if(node.val === target[target.length-1]) {
            node.val = target[0]
        }
        
        change(node.left)
        change(node.right)
    }

    change(root)
    // console.log(root)

//           3
//        1    4
//       n n  2 n
      
//     1 4 3 2 5
};