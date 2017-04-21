const sinon = require('sinon');
const expect = require('chai').expect;

const Intersection = require('./Intersection');

describe('Intersection OOP', () => {
  it('Should create an intersection', () => {
    let intersection = new Intersection();
    expect(intersection instanceof Intersection).to.equal(true);
  });

  it('Should toggle the color', () => {
    let intersection = new Intersection();
    let colors = [intersection.N.color, intersection.S.color, intersection.W.color, intersection.E.color];
    intersection.change();
    expect(colors).to.not.equal([intersection.N.color, intersection.S.color, intersection.W.color, intersection.E.color]);
  })
});
