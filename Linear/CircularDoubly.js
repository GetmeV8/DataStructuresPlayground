class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class CircularDoublyLinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.head.next = this.head;
            this.head.prev = this.head;
        } else {
            const tail = this.head.prev;
            tail.next = newNode;
            newNode.prev = tail;
            newNode.next = this.head;
            this.head.prev = newNode;
        }
    }

    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.head.next = this.head;
            this.head.prev = this.head;
        } else {
            const tail = this.head.prev;
            newNode.next = this.head;
            newNode.prev = tail;
            tail.next = newNode;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    displayForward() {
        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }

    displayReverse() {
        let current = this.head.prev;
        do {
            console.log(current.data);
            current = current.prev;
        } while (current !== this.head.prev);
    }
}

// Create a new circular doubly linked list
const myList = new CircularDoublyLinkedList();

// Append nodes
myList.append(1);
myList.append(2);
myList.append(3);

// Prepend a node
myList.prepend(0);

// Display the linked list in forward order
console.log("Forward Order:");
myList.displayForward();

// Display the linked list in reverse order
console.log("\nReverse Order:");
myList.displayReverse();
