class QuadraticProbingHashTable {
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
  
    quadraticProbe(index, attempt) {
      const interval = attempt * attempt;
      return (index + interval) % this.size;
    }
  
    insert(key, value) {
      const index = this.hash(key);
  
      let attempt = 1;
      let newIndex = index;
      while (this.table[newIndex] !== null) {
        newIndex = this.quadraticProbe(index, attempt);
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
        newIndex = this.quadraticProbe(index, attempt);
        attempt++;
      }
  
      return null;
    }
  }
  
  const quadraticProbingTable = new QuadraticProbingHashTable(10);
  quadraticProbingTable.insert("apple", 5);
  quadraticProbingTable.insert("banana", 8);
  quadraticProbingTable.insert("orange", 10);
  
  console.log(quadraticProbingTable.search("banana")); // Output: 8
  