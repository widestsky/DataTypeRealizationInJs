function Node(element) {
  this.last = null;
  this.element = element;
  this.next = null;
}

function DoubleLinkedList() {
  let head = null;// point to the head node
  let tail = null;//point to the tail node
  let length = 0;

  this.size = () => {
    return length;
  }
  this.head = () => {
    return head;
  }
  this.tail = () => {
    return tail;
  }
  this.add = (element) => {
    let node = new Node(element);
    if(length === 0) {
      head = node;
    } else {
      tail.next = node;
    }
    node.last = tail;
    tail = node;
    length++;
  }

  this.remove = (element) => {
    var currentNode = head;    
    var previousNode;    
    if (currentNode.element === element) {      
      head = currentNode.next;    
    } else {      
      while (currentNode.element !== element) {        
        previousNode = currentNode;        
        currentNode = currentNode.next;      
      }      
      currentNode.next.last = currentNode.last;
      previousNode.next = currentNode.next;    
    }    
    length--;   
  }

  this.indexOf = (element) => {
    if(head.element === element) {
      return 0;
    }
    if(tail.element === element) {
      return length-1;
    }
    let currentNode = head.next;
    let count = 1;
    while(currentNode.next) {
      if(currentNode.element === element) {
        return count;
      } else {
        currentNode = currentNode.next;
        count++;
      }
    }
    throw('Cannot find this element!');
  }

  this.elementAt = (index) => {
    if(index*2 <length) {
      let currentNode = head;
      for(i=0; i<index; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.element;
    } else {
      let currentNode = tail;
      for(i=length; i>index+1; i--) {
        currentNode = currentNode.last;
      }
      return currentNode.element;
    }
  }

  this.addAt = (index, element) => {
    let node = new Node(element);
    if(index*2 <length) {
      let currentNode = head;
      for(i=0; i<index; i++) {
        currentNode = currentNode.next;
      }
      currentNode.last.next = node;
      currentNode.next.last = node;
    } else {
      let currentNode = tail;
      for(i=length; i>index+1; i--) {
        currentNode = currentNode.last;
      }
      currentNode.last.next = node;
      currentNode.next.last = node;
    }
  }

  this.removeAt = (index) => {
    if(index*2 <length) {
      let currentNode = head;
      for(i=0; i<index; i++) {
        currentNode = currentNode.next;
      }
      currentNode.last.next = currentNode.next;
      currentNode.next.last = currentNode.last;
    } else {
      let currentNode = tail;
      for(i=length; i>index+1; i--) {
        currentNode = currentNode.last;
      }
      currentNode.last.next = currentNode.next;
      currentNode.next.last = currentNode.last;
    }
  }
}

module.exports = DoubleLinkedList;