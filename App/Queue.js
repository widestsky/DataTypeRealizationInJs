class Queue {

  constructor() {
    this.storage = [];
  }

  enqueue(val) {
    this.storage.push(val);
  }

  dequeue() {
    return this.storage.shift();
  }

  front() {
    return this.storage[0];
  }

  isEmpty() {
    return this.size() === 0 ? true: false;
  }

  size() {
    return this.storage.length;
  }
}

module.exports = Queue;