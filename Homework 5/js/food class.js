class Food {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
  }

  drawFood()
  {     fill(50, 50, 255);
        circle(this.x, this.y, this.diameter);
  }
}