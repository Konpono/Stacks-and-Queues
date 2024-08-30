class ArrayStack {
    constructor() {
        this.storage = [];
        this.count = 0;
    }

    push(item) {
        this.storage[this.count] = item;
        this.count++;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        this.count--;
        const removedItem = this.storage[this.count];
        delete this.storage[this.count];
        return removedItem;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.storage[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }
}

module.exports = ArrayStack;