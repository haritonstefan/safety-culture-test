function* TrafficLight (color) {
  let colors = ['RED', 'GREEN', 'YELLOW', 'RED'];
  while(color && colors[1] !== color) {
    colors.push(colors.shift());
  }
  while (true) {
    colors.push(colors.shift());
    yield colors[0];
  }
}

module.exports = TrafficLight;
