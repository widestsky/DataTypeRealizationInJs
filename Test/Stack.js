let expect = require("chai").expect;
let Stack = require("../App/Stack");

describe("Test class Stack", () => {
  it("push new value into stack", () => {
    let stack = new Stack();

    stack.push(1992);
    expect(stack.peek()).equal(1992);
    expect(stack.length()).equal(1);
    let result = stack.pop();
    expect(result).equal(1992);
    expect(stack.peek()).to.be.undefined;
    expect(stack.length()).to.equal(0);
  });
})