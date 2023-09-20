// Queue //


// The queue data structure is a sequential collection of elements that follows

// principle of First In First Out (FIFO)

// The first element inserted into the queue is first element to be removed

// A queue of people. People enter the queue at one end (rear/tail) and leave

// queue from the other end (front/ head).

// Queue is an abstract data type. It is defined by its behavior rather than being

// mathematical model

// The Queue data structure supports two main operations

// Enqueue, which adds an element to the rear/tail of the collection


class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(elements) {
        this.items.push(elements);
    }
    dequeue() {
        return this.items.shift(elements);
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0];
        }else{
            return null;
        }
    }

}


