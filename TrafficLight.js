class TrafficLight {
  constructor(color) {
    this.colors = ['GREEN', 'GREEN', 'RED', 'YELLOW'];
    if (!color) return;
    while (color !== this.colors[0]) {
      this.nextColor();
    }
  }

  get color() {
    return this.colors[0];
  }

  nextColor() {
    return this.colors.push(this.colors.shift())
  }

}

module.exports = TrafficLight;
