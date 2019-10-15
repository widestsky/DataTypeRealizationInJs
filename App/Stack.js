class Stack {

  constructor() {
    this.count = 0;
    this.storage = {};
  }
 
  push(val) {
    this.storage[this.count] = val;
    this.count += 1;
  }

  pop() {
    let result = this.peek();
    delete this.storage[this.count-1];
    this.count -= 1;
    return result;
  }

  peek() {
    return this.storage[this.count-1];
  }

  length() {
    return this.count;
  }
}

module.exports = Stack;