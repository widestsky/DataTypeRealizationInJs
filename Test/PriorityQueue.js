let expect = require("chai").expect;
let PriorityQueue = require("../App/PriorityQueue");

describe("Test class Priority Queue", () => {
  it("insert element", () => {
    let queue = new PriorityQueue();

    expect(queue.isEmpty()).to.equal(true);
    expect(queue.size()).to.equal(0);

    queue.enqueue('first');
    queue.enqueue(['second', 2]);
    expect(queue.front()).to.deep.equal(['second', 2]);
    queue.enqueue(['third', 0]);
    queue.enqueue(['forth']);
    queue.enqueue('fifth');
    queue.enqueue(['sixth', 3]);
    expect(queue.front(), 'queue first item').to.deep.equal(['sixth', 3]);
    expect(queue.isEmpty(), 'check if queue is empty').to.equal(false);
    expect(queue.size()).to.equal(6);
    expect(queue.dequeue()).to.deep.equal(['sixth', 3]);
    expect(queue.size(), 'queue size').to.equal(5);
    console.log(queue.storage);
  })
})