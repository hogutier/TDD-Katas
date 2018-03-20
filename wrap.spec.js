const {expect} = require('chai');
const wrap = require ('./wrap');

describe('wrap', () => {
  it('must be a function', () => {
    expect(wrap).to.be.a('function')
  });
  it('takes a two paramenters', () => {
    expect(wrap.length).to.equal(2);
  })

  describe('does not break line', () => {
    it('returns Lorem ipsum dolor', () => {
      strInput = "Lorem ipsum dolor";
      colInput = 20;
      expect(wrap(strInput, colInput)).to.equal(strInput)
    })
  })

  describe('breaks when crosses boundary and split into two lines', () => {
    it('split into two lines', () => {
      input = "abc 123";
      colInput = 4;
      expect(wrap(input, colInput)).to.equal("abc\n123");
    })
  })
})

