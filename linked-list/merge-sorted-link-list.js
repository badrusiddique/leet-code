// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 === null) return list2;
    if(list2 === null) return list1;

    let curr1 = list1;
    let curr2 = list2;
    let list = null, curr = null

    while(curr1 !== null || curr2 !== null) {
        if(curr1 === null) {
            curr.next = curr2;
            break;
        }
        if(curr2 === null) {
            curr.next = curr1;
            break;
        }

        let node, curr1Val = curr1.val, curr2Val = curr2.val;
        if(curr1Val < curr2Val) {
            node = new ListNode(curr1Val, null);
            curr1 = curr1.next;
        } else {
            node = new ListNode(curr2Val, null);
            curr2 = curr2.next;
        }

        if(list === null) {
            list = node;
            curr = list;
        } else {
            curr.next = node;
            curr = curr.next
        }
    }

    return list;
};