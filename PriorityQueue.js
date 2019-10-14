let Queue = requires('./Queue.js');

class PriorityQueue extends Queue {
  enqueue(val) {
    if(this.isEmpty()) {
      this.storage.push(val);
    } else {
      let added = false
      for(i = 0; i < this.size()-1; i++) {
        if(this.storage[i][1] < val[1]) {
          this.storage.splice(i, 0, val);
          added = true;
          break;
        }
      }
      if(!added) {
        this.storage.push(val);
      }
    }
  }
}

module.exports = PriorityQueue;