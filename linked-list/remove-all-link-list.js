// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

// Example 1:


// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) return head;

    let curr = head;
    let prev = head;

    while (curr != null) {
        const currNext = curr.next;
        if (curr.val === val) {
            if (curr == head) {
                head = currNext
                curr = head
                prev = head
            } else {
                prev.next = currNext;
                curr = currNext;
            }
        } else {
            prev = curr;
            curr = currNext;
        }

    }
    return head
};