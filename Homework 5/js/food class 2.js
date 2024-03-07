class Food2 {
    constructor(x2, y2, diameter2) {
      this.x2 = x2;
      this.y2 = y2;
      this.diameter2 = diameter2;
    }

    drawFood2()
    {
      fill(245, 66, 78);
      circle(this.x2, this.y2, this.diameter2);
    }
  }