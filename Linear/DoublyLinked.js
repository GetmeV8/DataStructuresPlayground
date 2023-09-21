class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    display() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    displayReverse() {
        let current = this.tail;
        while (current !== null) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

// Create a new doubly linked list
const myList = new DoublyLinkedList();

// Append nodes
myList.append(1);
myList.append(2);
myList.append(3);

// Prepend a node
myList.prepend(0);

// Display the linked list
myList.display();

// Display in reverse order
myList.displayReverse();
