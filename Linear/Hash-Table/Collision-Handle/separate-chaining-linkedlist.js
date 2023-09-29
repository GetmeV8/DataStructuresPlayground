class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  class SeparateChainingHashTable {
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
      const newNode = new Node(key, value);
  
      if (this.table[index] === null) {
        this.table[index] = newNode;
      } else {
        let current = this.table[index];
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    search(key) {
      const index = this.hash(key);
  
      if (this.table[index] !== null) {
        let current = this.table[index];
        while (current !== null) {
          if (current.key === key) {
            return current.value;
          }
          current = current.next;
        }
      }
  
      return null;
    }

    print(){ 
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
  }
  
  const separateChainingTable = new SeparateChainingHashTable(10);
  separateChainingTable.insert("apple", 5);
  separateChainingTable.insert("elppa", 20);
  separateChainingTable.insert("banana", 8);
  separateChainingTable.insert("orange", 10);
  separateChainingTable.print()
  console.log(separateChainingTable.search("banana")); // Output: 8
  