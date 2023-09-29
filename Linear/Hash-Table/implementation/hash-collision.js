class HashTable {
    constructor(size){
        this.table = []
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
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameKey = bucket.find((item)=> item[0]===key)
            if(sameKey){
                sameKey[1]=value
            }else {
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKey = bucket.find(item=> item[0]===key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
    }
    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKey = bucket.find(item=>item[0]===key)
            if(sameKey){
                bucket.splice(sameKey,1)
            }
        }
    }
    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const hashTable = new HashTable(50)
hashTable.set("name","Ramizzz")
hashTable.set("age",24)
hashTable.set("emna","aaaaaaa")
hashTable.set("mnea","bbbbb")
console.log(hashTable.get('sdf'))
hashTable.remove('name')
hashTable.remove('age')
hashTable.print()