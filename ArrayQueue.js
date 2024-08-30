class ArrayQueue {
    constructor() {
        this.storage = [];
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }

    enqueue(item) {
        this.storage[this.rear] = item;
        this.rear++;
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        const item = this.storage[this.front];
        delete this.storage[this.front];
        this.front++;
        this.size--;
        return item;
    }

    isEmpty() {
        return this.size === 0;
    }
}

module.exports = ArrayQueue;