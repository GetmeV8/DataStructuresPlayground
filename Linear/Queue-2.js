class Queue {
    constructor() {
        this.items = {}
        this.front = 0;
        this.rear = 0;
    }
    enqueue(element) {
        this.items[this.rear] = element
        this.rear++;
    }
    dequeue(){
        const item = this.items[this.front];
        delete this.item[this.front];

    }
}