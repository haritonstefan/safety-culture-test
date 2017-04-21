const sinon = require('sinon');
const expect = require('chai').expect;

const TrafficLight = require('./TrafficLight');

describe('TrafficLight Functional', () => {
  it('creates a TrafficLight which defaults to RED', () => {
    let tLight = TrafficLight();
    expect(tLight.next().value).to.equal('GREEN');
    expect(tLight.next().value).to.equal('YELLOW');
  });

  it('creates a TrafficLight, starting color passed to constructor', () => {
    let tLight = TrafficLight('GREEN');
    expect(tLight.next().value).to.equal('GREEN');
    tLight = TrafficLight('YELLOW');
    expect(tLight.next().value).to.equal('YELLOW');
  });

  it('should cycle through colors', () => {
    let tLight = TrafficLight();
    expect(tLight.next().value).to.equal('GREEN');
    expect(tLight.next().value).to.equal('YELLOW');
    expect(tLight.next().value).to.equal('RED');
    expect(tLight.next().value).to.equal('RED');
    expect(tLight.next().value).to.equal('GREEN');
    expect(tLight.next().value).to.equal('YELLOW');
    expect(tLight.next().value).to.equal('RED');
  });
});
