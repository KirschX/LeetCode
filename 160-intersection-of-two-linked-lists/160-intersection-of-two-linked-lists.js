/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
//     let headAc = headA

//     while(headA || headB) {
//                 // console.log(headA.val, headA.intersected, headB.val, headB.intersected)
//         if (headA) headA.count = (headA.count == 1) ? 2 : 1;
//         if (headB) headB.count = (headB.count == 1) ? 2 : 1;
        
//         if (headA && headB) console.log(headA.val, headA.count, headB.val, headB.count)
      
//         if(headA) headA = headA.next;
//         if(headB) headB = headB.next;
//     }
    
    while(headA) {
        headA.count = 1;
        headA = headA.next;
    }
    
    while(headB) {
        if(headB.count) 
            return headB
        headB = headB.next;
    }
    
    

    return null;
};