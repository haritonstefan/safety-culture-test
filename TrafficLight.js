class TrafficLight {
  constructor(color) {
    this.colors = ['GREEN', 'GREEN', 'RED', 'YELLOW'];
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
