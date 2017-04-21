const TrafficLight = require('./TrafficLight');

function* Intersection() {
  let N = TrafficLight('RED');
  let S = TrafficLight('RED');
  let W = TrafficLight('GREEN');
  let E = TrafficLight('GREEN');

  while (true) {
    yield {
      N: N.next().value,
      S: S.next().value,
      W: W.next().value,
      E: E.next().value
    };
  }
}

module.exports = Intersection;
