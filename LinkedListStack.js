class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(item) {
        const newNode = new Node(item);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        const item = this.top.value;
        this.top = this.top.next;
        this.size--;
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.top.value;
    }

    isEmpty() {
        return this.size === 0;
    }
}

module.exports = LinkedListStack;