// Reverse Linked List

// Given the head of a singly linked list, reverse the list and return the new head.

// Example

// Original:

// 1 → 2 → 3 → 4 → 5 → null
// ↑
// head

// After reversing:

// 5 → 4 → 3 → 2 → 1 → null
// ↑
// new head
// Save next
//       ↓
//  Reverse current.next
//       ↓
//  Move previous
//       ↓
//  Move current
const reverseList = (head) => {
    let previous = null;
    let current = head;

    while (current !== null) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    return previous;
};
