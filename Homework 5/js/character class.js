
class Character {
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;

  }

  drawCharacter() {

    if(flipX)
    {
        push();
        
        scale(-1, 1);

        image(runningCycle[i], -xImage-runningCycle[i].width/2, yImage);

        pop();
    }
    else
    {
        image(runningCycle[i], xImage, yImage);
    }
    
   if(keyIsPressed)
   {
     if(key == "w")
     {
        yImage -= 1;
     }
     if(key == "s")
     {
        yImage += 1;
     }
     if(key == "a")
     {
        xImage -= 1;
        flipX = true;
     }
     if(key == "d")
     {
        xImage += 1;
        flipX = false;
     }

  }

  }

  characterArray () {

runningCycle[0] = run1;
runningCycle[1] = run2;
runningCycle[2] = run3;
runningCycle[3] = run4;
runningCycle[4] = run5;
runningCycle[5] = run6;
runningCycle[6] = run7;
runningCycle[7] = run8;

  }

resizeCharacter () {

  for(var i = 0; i < runningCycle.length; i++)
{
    runningCycle[i].resize(runningCycle[i].width / 5, 0);
}


}

}