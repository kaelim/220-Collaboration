
class Character {
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;

  }

  resizeCharacter () {

    for(var i = 0; i < runningCycle.length; i++)
  {
      runningCycle[i].resize(runningCycle[i].width / 5, 0);
  }
  
  for(var j = 0; j < idleCycle.length; j++)
  {
      idleCycle[j].resize(idleCycle[j].width / 5, 0);
  }
  
  }

  drawCharacter() {

   
    
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

  } else{

    image(idleCycle[i], xImage, yImage);

  }

  }

  runningArray () {

runningCycle[0] = run1;
runningCycle[1] = run2;
runningCycle[2] = run3;
runningCycle[3] = run4;
runningCycle[4] = run5;
runningCycle[5] = run6;
runningCycle[6] = run7;
runningCycle[7] = run8;

  }

  idleArray () {

idleCycle[0] = idle1;
idleCycle[1] = idle2;
idleCycle[2] = idle3;
idleCycle[3] = idle4;
idleCycle[4] = idle5;
idleCycle[5] = idle6;
idleCycle[6] = idle7;
idleCycle[7] = idle8;
idleCycle[8] = idle9;
idleCycle[9] = idle10;
console.log(idleCycle.length)
  }


}