class HashTable {
    constructor(size){
        this.table =new Array(size)
        this.size = size
    }

    hash(key){
        let hashedKey =0
        for(let i=0;i<key.length;i++){
            hashedKey+=key.charCodeAt(i)
        }
        return hashedKey%this.size
    }
    set(key,value){
        const index = this.hash(key)
        this.table[index]=value
    }

    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    delete(key){
        const index = this.hash(key)
        this.table[index]=undefined
    }
    print(){
       for(let i=0;i<this.size;i++){
        if(this.table[i]){
            console.log(i+"=>"+this.table[i])
        }
       }
    }
}

const hashTable = new HashTable(50)
hashTable.set("name","ramizz")
hashTable.set("age",24)
hashTable.set("esdf","aaaaaaa")
hashTable.print()