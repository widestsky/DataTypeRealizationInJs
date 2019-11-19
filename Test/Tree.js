const expect = require('chai').expect;
const Tree = require('../App/Tree');

describe('Test tree class', () => {
  let tree = new Tree();
  it('test: ', () => {
    tree.add(4);
    tree.add(2);
    tree.add(6);
    tree.add(1);
    tree.add(3);
    tree.add(5);
    tree.add(7);
    tree.remove(4);
    expect(tree.findMin()).to.equal(1);
    expect(tree.findMax()).to.equal(7);
    tree.remove(7);
    expect(tree.findMax()).to.equal(6);
    expect(tree.isPresent(4)).to.equal(false);
  })
})