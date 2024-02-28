var myFood;
var myCharacter;

var xImage = 100,
  yImage = 25;
var speedX, speedY;

var i = 0;
var j = 0;
var f = 1;

var runningCycle1 = [];
var idleCycle1 = [];

var flipX = false;

var score = 0
var time = 100;
var textX = 30;
var textY = 40;

let runStrings;
let idleStrings;

function preload() {
  runStrings = loadStrings('images/run.txt');
  idleStrings = loadStrings('images/idle.txt');
}

function setup() {

  createCanvas(800, 600);

  myFood = new Food(random(10, width), random(20, height), random(20, 80));
  
  myCharacter = new Character(runStrings, idleStrings, 100, 100, 680, 472);

  setInterval(changeTime, 100);

  setInterval(timeIt, 1000);

}

function draw() {
  background(200);
  myFood.drawFood();

  fill(25, 0, 170);
  textSize(24);
  text("Time Left: " + time, textX, textY);
  text("Score: " + score, textX + 200, textY);

  myCharacter.drawCharacter();

  //collision
  let d = dist(xImage + 100, yImage + 100, myFood.x, myFood.y);

  if (d < 150) {

    myFood.x = random(width - 90);
    myFood.y = random(height - 90);
    score = ++f;
  }

}

function changeTime() {

  i++;
  if (i > runStrings.length - 1) {
    i = 0;
  }

  j++;
  if (j > idleStrings.length - 1) {
    j = 0;
  }
}

function timeIt() {
  if (time > 0) {
    time--;
  } else {
    time = 100;
  }
 
}