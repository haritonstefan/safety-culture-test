const sinon = require('sinon');
const expect = require('chai').expect;

const TrafficLight = require('./TrafficLight');

describe('TrafficLight OOP', () => {
  it('creates a TrafficLight which defaults to Green', () => {
    let tLight = new TrafficLight();
    expect(tLight instanceof TrafficLight).to.equal(true);
    expect(tLight.color).to.equal('GREEN');
  });

  it('creates a TrafficLight, starting color passed to constructor', () => {
    let tLight = new TrafficLight('RED');
    expect(tLight.color).to.equal('RED');
    tLight = new TrafficLight('YELLOW');
    expect(tLight.color).to.equal('YELLOW');
  });

  it('should toggle color', () => {
    let tLight = new TrafficLight();
    expect(tLight.color).to.equal('GREEN');
    tLight.nextColor();
    expect(tLight.color).to.equal('GREEN');
    tLight.nextColor();
    expect(tLight.color).to.equal('RED');
    tLight.nextColor();
    expect(tLight.color).to.equal('YELLOW');
  });
});
