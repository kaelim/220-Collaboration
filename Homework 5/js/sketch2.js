var run1
var run2;
var run3;
var run4;
var run5;
var run6;
var run7;
var run8;

var idle1;
var idle2;
var idle3;
var idle4;
var idle5;
var idle6;
var idle7;
var idle8;
var idle9;
var idle10;

var myFood
var myCharacter

var xImage = 100, yImage = 25;
var speedX, speedY;

var i = 0;
var j = 0;

var runningCycle = [];
var idleCycle = [];

var flipX = false;

var time = 100;
var textX = 30;
var textY = 40;
  setInterval(timeIt, 1000);


var runStrings

function preload() {

  
  runStrings = loadStrings('run.txt');
  console.log("hi" + runStrings.length)
/*
  idle1 = loadImage("./images/Idle (1).png");
  idle2 = loadImage("./images/Idle (2).png");
  idle3 = loadImage("./images/Idle (3).png");
  idle4 = loadImage("./images/Idle (4).png");
  idle5 = loadImage("./images/Idle (5).png");
  idle6 = loadImage("./images/Idle (6).png");
  idle7 = loadImage("./images/Idle (7).png");
  idle8 = loadImage("./images/Idle (8).png");
  idle9 = loadImage("./images/Idle (9).png");
  idle10 = loadImage("./images/Idle (10).png");
*/
}

function setup() {
  createCanvas(500, 500);



  for(var k = 0; k < runStrings.length; k++){
    console.log("hi")
    runningCycle.push(loadImage(runStrings[k]));
    
      } 

myFood = new Food(random(10, width), random(20, height), random(20, 80));
myCharacter = new Character(idleCycle = [j], 100, 100);

myCharacter.idleArray();
//myCharacter.runningArray();

myCharacter.resizeCharacter();

setInterval(changeTime, 10)



}

function draw() {
  background(220);

  myFood.drawFood();

    fill(25,0,170);
    textSize(24);
    text("Time Left: " + time, textX, textY);

  myCharacter.drawCharacter();

    //collision
    let d = dist(xImage, yImage, myFood.x, myFood.y);

    if (d < 120) {
  
      myFood.x = 1000
      myFood.y = 1000
  
    }

}

function changeTime()

{

    i++;
    if(i > runningCycle.length-1)
    {
        i = 0;
    }

    j++;
    if(j > idleCycle.length-1)
    {
        j = 0;
    }
}

function timeIt() {
  if (time > 0) {
    time--;
  }
  else
  {
      time = 100;
  }
}