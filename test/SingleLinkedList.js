let expect = require('chai').expect;
let List = require('../App/SingleLinkedList');

describe('Test Single Linked List', () => {
  let list = new List();
  it('initial list', () => {
    expect(list.size()).to.equal(0);
    list.add('first');
    list.add('second');
    list.add('third');
    list.add('forth');
    list.add('fifth');
    expect(list.size()).to.equal(5);
    expect(list).to.deep.equal(['first', 'second', 'third', 'forth', 'fifth']);
  })
  it('process list', () => {
    expect(list.head()).to.equal('first');
    expect(list.elementAt(2)).to.equal('third');
    expect(list.indexOf('third')).to.equal(2);
    list.removeAt(2);
    expect(list.elementAt(2)).to.equal('forth');
    list.remove('forth');
    expect(list.elementAt(2)).to.equal('fifth');
    list.addAt(2, 'third');
    expect(list).to.deep.equal(['first', 'second', 'third', 'fifth']);
  })
})