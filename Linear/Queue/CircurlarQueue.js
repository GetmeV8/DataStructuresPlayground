class CircularQueue {
   constructor(size) {
       this.size = size;
       this.queue = new Array(size);
       this.front = this.rear = -1;
   }

   enqueue(item) {
       if ((this.rear + 1) % this.size === this.front) {
           console.log("Queue is full. Cannot enqueue.");
           return;
       } else if (this.front === -1) {
           this.front = this.rear = 0;
           this.queue[this.rear] = item;
       } else {
           this.rear = (this.rear + 1) % this.size;
           this.queue[this.rear] = item;
       }
   }

   dequeue() {
       if (this.front === -1) {
           console.log("Queue is empty. Cannot dequeue.");
           return;
       } else if (this.front === this.rear) {
           let item = this.queue[this.front];
           this.front = this.rear = -1;
           return item;
       } else {
           let item = this.queue[this.front];
           this.front = (this.front + 1) % this.size;
           return item;
       }
   }

   display() {
       if (this.front === -1) {
           console.log("Queue is empty.");
           return;
       }

       let i = this.front;
       while (true) {
           console.log(this.queue[i]);
           if (i === this.rear) break;
           i = (i + 1) % this.size;
       }
   }
}

const cq = new CircularQueue(5);
cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
cq.enqueue(4);
cq.enqueue(5);
cq.enqueue(6); // Queue is full. Cannot enqueue.

cq.display(); // Output: 1 2 3 4 5

console.log("Dequeued:", cq.dequeue()); // Output: Dequeued: 1
cq.enqueue(6); // Now, it wraps around and overwrites 1.

cq.display(); // Output: 6 2 3 4 5
