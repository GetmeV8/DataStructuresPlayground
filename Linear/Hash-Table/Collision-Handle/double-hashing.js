class DoubleHashingHashTable {
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
  
    hash2(key) {
      // A simple secondary hash function
      return 7 - (key.length % 7);
    }
  
    doubleHash(index, attempt) {
      const hash2Value = this.hash2(key);
      return (index + attempt * hash2Value) % this.size;
    }
  
    insert(key, value) {
      const index = this.hash(key);
  
      let attempt = 1;
      let newIndex = index;
      while (this.table[newIndex] !== null) {
        newIndex = this.doubleHash(index, attempt);
        attempt++;
      }
      this.table[newIndex] = { key, value };
    }
  
    search(key) {
      const index = this.hash(key);
  
      let attempt = 1;
      let newIndex = index;
      while (this.table[newIndex] !== null) {
        if (this.table[newIndex].key === key) {
          return this.table[newIndex].value;
        }
        newIndex = this.doubleHash(index, attempt);
        attempt++;
      }
  
      return null;
    }
  }
  
  const doubleHashingTable = new DoubleHashingHashTable(10);
  doubleHashingTable.insert("apple", 5);
  doubleHashingTable.insert("banana", 8);
  doubleHashingTable.insert("orange", 10);
  
  console.log(doubleHashingTable.search("banana")); // Output: 8
  