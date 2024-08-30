class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(item) {
        const newNode = new Node(item);
        if (this.rear) {
            this.rear.next = newNode;
        }
        this.rear = newNode;
        if (!this.front) {
            this.front = this.rear;
        }
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        const item = this.front.value;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        this.length--;
        return item;
    }

    isEmpty() {
        return this.length === 0;
    }
}

module.exports = LinkedListQueue;