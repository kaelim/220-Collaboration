var run1
var run2;
var run3;
var run4;
var run5;
var run6;
var run7;
var run8;

var myFood
var myCharacter

var xImage = 100, yImage = 25;
var speedX, speedY;

var i = 0;

var runningCycle = [];

var flipX = false;

function preload() {

  run1 = loadImage("./images/Run (1).png");
  run2 = loadImage("./images/Run (2).png");
  run3 = loadImage("./images/Run (3).png");
  run4 = loadImage("./images/Run (4).png");
  run5 = loadImage("./images/Run (5).png");
  run6 = loadImage("./images/Run (6).png");
  run7 = loadImage("./images/Run (7).png");
  run8 = loadImage("./images/Run (8).png");

}

function setup() {
  createCanvas(500, 500);

myFood = new Food(random(10, width), random(20, height), random(20, 80));
myCharacter = new Character(runningCycle = [i], 100, 100);

myCharacter.characterArray();

myCharacter.resizeCharacter();

setInterval(changeTime, 100)



}

function draw() {
  background(220);

  myFood.drawFood();

  myCharacter.drawCharacter();

    //collision
    console.log (dist(xImage, yImage, myFood.x, myFood.y));
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
}