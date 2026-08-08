## Tree
- A collection of nodes connected in hierachy
        1
       / \
      2   3
     / \
    4   5
 - 1 -Root
 - 2 and 3 - children of 1
 - 4 and 5 - children of 2
 - 2 → parent of 4 and 5
 - 4, 5, 3 → Leaves because they have no children
 - A binary tree is simply a tree where each node can have at most two children.
 PREORDER
Root → Left → Right
1 → 2 → 4 → 5 → 3

INORDER
Left → Root → Right
4 → 2 → 5 → 1 → 3

POSTORDER
Left → Right → Root
4 → 5 → 2 → 3 → 1
