##  Hash Maps/ hash tables or dictionaries
### Definition
- These are data structures that implement an associative array, mapping keys to values for highly efficient data retrieval and storage
- They use a hash function to convert a key into an array index allowing for average-case O(1) time complexity
- Maps differ from standard objects in that keys can be of any data type.
### Why lookups are typically O(1)

### JavaScript `Object`
### JavaScript `Map`
#### 1. Key Types
- Map keys can be any type (strings, numbers, objects, etc).

#### 2. Insertion Order
- The Map remembers the original insertion order of the keys.

#### 3. Size
- The number of items in a Map is easily retrieved using the size property.

#### 4. Performance
- Maps are optimized for frequent additions and removals of key-value pairs.

#### 5. Iteration
- Maps are iterable, allowing for direct use of for...of loops or methods like forEach().

#### 6. Iteration Order
- The original order is preserved during iteration.

#### a. Insert
```
// Create a Map instance
const name = new Map();
// update the Map 
name.getOrInsert("firstname","Pat") 
```
#### b. Lookup
```
name.has("firstname")
```
#### c. Update
```
name.set("firstname","Pat") 
```
#### d. Delete
```
name.delete("firstname")
```
---
**Why is searching an array O(n)?** time increases as the inputs increase, therefore linear.

**Why is searching a hash map usually O(1)?** hash map use the key as the index therefore doesn't depend on number of inputs..

**When would you choose Map over a plain object?** when i want to use multiple data types as key, when i want to iterate through my dataset and when i need an ordered dataset by creation