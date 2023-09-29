class LinearProbingHashTable {
    constructor(size) {
      this.size = size;
      this.table = new Array(size).fill(null);
    }
  
    hash(key) {
      let hashValue = 0;
      for (let i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i);
      }
      return hashValue % this.size;
    }
  
    insert(key, value) {
      const index = this.hash(key);
  
      let i = 0;
      while (this.table[(index + i) % this.size] !== null) {
        i++;
      }
      this.table[(index + i) % this.size] = { key, value };
    }
  
    search(key) {
      const index = this.hash(key);
  
      let i = 0;
      while (this.table[(index + i) % this.size] !== null) {
        if (this.table[(index + i) % this.size].key === key) {
          return this.table[(index + i) % this.size].value;
        }
        i++;
      }
  
      return null;
    }
  }
  
  const linearProbingTable = new LinearProbingHashTable(10);
  linearProbingTable.insert("apple", 5);
  linearProbingTable.insert("banana", 8);
  linearProbingTable.insert("orange", 10);
  
  console.log(linearProbingTable.search("banana")); // Output: 8
  