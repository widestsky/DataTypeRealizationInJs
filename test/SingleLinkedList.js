let expect = require('chai').expect;
// let List = require('../App/SingleLinkedList');
let List = require('../App/DoubleLinkedList');

describe('Test Single Linked List', () => {
  console.log(List);
  let list = new List();
  it('initial list', () => {
    expect(list.size()).to.equal(0);
    list.add('first');
    list.add('second');
    list.add('third');
    list.add('forth');
    list.add('fifth');
    expect(list.size()).to.equal(5);
  })
  it('process list', () => {
    expect(list.head().element).to.equal('first');
    expect(list.head().next.element).to.equal('second');
    expect(list.head().next.next.element).to.equal('third');
    expect(list.head().next.next.next.element).to.equal('forth');
    expect(list.head().next.next.next.next.element).to.equal('fifth');
    expect(list.elementAt(2)).to.equal('third');
    expect(list.indexOf('third')).to.equal(2);
    list.removeAt(2);
    expect(list.elementAt(2)).to.equal('forth');
    list.remove('forth');
    expect(list.elementAt(0)).to.equal('first');
    expect(list.elementAt(1)).to.equal('second');
    // expect(list.elementAt(2)).to.equal('fifth');
    list.addAt(2, 'third');
    expect(list.elementAt(2)).to.equal('third');
  })
})