## Tree
- A collection of nodes connected in hierachy
        1
       / \
      2   3
     / \
    4   5
- **1** — Root
- **2** and **3** — children of 1
- **4** and **5** — children of 2
- **2** → parent of 4 and 5
- **4, 5, 3** → Leaves (no children)
- A **binary tree** is simply a tree where each node can have at most two children.

## Traversal Orders

**Preorder** — Root → Left → Right
`1 → 2 → 4 → 5 → 3`

**Inorder** — Left → Root → Right
`4 → 2 → 5 → 1 → 3`

**Postorder** — Left → Right → Root
`4 → 5 → 2 → 3 → 1`

## Problem Patterns

| Problem | Idea |
|---|---|
| Traversal | "Visit every node." |
| Maximum Depth | "Get information from children and combine it." |
| Same Tree | "Ask the children a question and combine their answers." |
| Invert Tree | "Modify each node, then recurse." |

## Recursive Template

```javascript
const solve = (root) => {
    if (root === null) {
        return /* base result */;
    }

    // do something

    solve(root.left);
    solve(root.right);

    // return something
};
```