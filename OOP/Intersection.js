const TrafficLight = require('./TrafficLight');

class Intersection {
  constructor() {
    this.N = new TrafficLight('GREEN');
    this.S = new TrafficLight('GREEN');
    this.E = new TrafficLight('RED');
    this.W = new TrafficLight('RED');
  }

  change() {
    this.N.nextColor();
    this.S.nextColor();
    this.E.nextColor();
    this.W.nextColor();
  }
}

module.exports = Intersection;
