/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let l3 = new ListNode(0);
    let l3H = l3;
    let temp = 0;
    
    while(l1 || l2) {
        
   
        if (l1 && l2) {
            if(l1.val + l2.val + temp > 9) {
                l3.next = new ListNode(l1.val + l2.val - 10 + temp)
                if(!l1.next && !l2.next) l3.next.next = new ListNode(1)
                temp =1;
            } else {
                l3.next = new ListNode(l1.val + l2.val + temp)
                temp = 0;
            }
        }

        
        if (l1 && !l2) {
            if(l1.val + temp > 9) {
                l3.next = new ListNode(l1.val - 10 + temp)
                if(!l1.next) l3.next.next = new ListNode(1)
                temp =1;
            } else {
                l3.next = new ListNode(l1.val + temp)
                temp =0;
            }
        }
        
        if (!l1 && l2) {
            if(l2.val + temp > 9) {
                l3.next = new ListNode(l2.val - 10 + temp)
                if(!l2.next) l3.next.next = new ListNode(1)
                temp =1;
            } else {
                l3.next = new ListNode(l2.val + temp)
                temp =0;
            }
        }
        
        if(l3) l3 = l3.next
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
        
    }
    return l3H.next
};