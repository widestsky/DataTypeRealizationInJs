// let Queue = requires('./Queue.js');

class PriorityQueue {
  constructor() {
    this.storage = [];
  }
  enqueue(val) {
    let val_r = new Array();
    if(val instanceof Array) {
      val_r[0] = val[0];
      if(val[1] === undefined) {
        val_r[1] = 0;
      } else {
        val_r[1] = val[1];
      }
    } else {
      val_r[0] = val;
      val_r[1] = 0;
    }
    if(this.isEmpty()) {
      this.storage.push(val_r);
    } else {
      let added = false
      for(let i = 0; i < this.size(); i++) {
        if(this.storage[i][1] < val_r[1]) {
          this.storage.splice(i, 0, val_r);
          added = true;
          break;
        }
      }
      if(!added) {
        this.storage.push(val_r);
      }
    }
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

module.exports = PriorityQueue;