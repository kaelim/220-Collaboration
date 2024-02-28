
class Character {
  constructor(runStrings, idleStrings, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.runningCycle = [];
    this.idleCycle = [];
    // load all the images here
    for (var k = 0; k < runStrings.length; k++) {
      this.runningCycle[k] = loadImage(runStrings[k]);
    }
    for (var k = 0; k < idleStrings.length; k++) {
      this.idleCycle[k] = loadImage(idleStrings[k]);
    }
    //this.idleArray();
    //this.resizeCharacter();

  }

  // use the w and h sent in
  resizeCharacter() {

    for (var j = 0; j < idleCycle.length; j++) {

      // idleCycle[j].resize(idleCycle[j].width / 5, 0);
      idleCycle[j].resize(this.w / 2, this.h / 2);
    }

  }

  /*resizeRunning() {
   
    for (var ii = 0; ii < this.runningCycle.length; ii++) {
     
    this.runningCycle[ii].resize(136,0);
    }
  }*/

  drawCharacter() {

    // resize using the w and h from the constructor
    for (var k = 0; k < this.runningCycle.length; k++) {
      this.runningCycle[k].resize(this.w / 2, this.h / 2);
    }
    for (var k = 0; k < this.idleCycle.length; k++) {
      this.idleCycle[k].resize(this.w / 2, this.h / 2);
    }

    if (keyIsPressed) {

      if (key == "w") {
        yImage -= 1;
      }
      if (key == "s") {
        yImage += 1;
      }
      if (key == "a") {
        xImage -= 1;
        flipX = true;
      }
      if (key == "d") {
        xImage += 1;
        flipX = false;
      }

      if (flipX) {
        push();

        scale(-1, 1);
        image(this.runningCycle[i], -xImage - this.w / 2, yImage);

        pop();
      } else {

        image(this.runningCycle[i], xImage, yImage);
      }

    } else {
      image(this.idleCycle[i], xImage, yImage);

    }
  }
}