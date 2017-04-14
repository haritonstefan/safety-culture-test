function* TrafficLight () {
  let colors = ['GREEN', 'RED', 'YELLOW', 'GREEN'];
  while (true) {
    colors.push(colors.shift());
    yield colors[0];
  }
}

function* Intersection() {
  let N = new TrafficLight();
  let S = new TrafficLight();
  let W = new TrafficLight();
  let E = new TrafficLight();
}
