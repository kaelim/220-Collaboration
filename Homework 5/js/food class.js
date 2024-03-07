class Food {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
  }

  drawFood()
  {   
     fill(141, 245, 66);
     circle(this.x, this.y, this.diameter);
  }
}