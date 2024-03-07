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

let backgroundMusic;
let badFood;
let goodFood;

function preload() {
  runStrings = loadStrings('images/run.txt');
  idleStrings = loadStrings('images/idle.txt');

  backgroundMusic = loadSound('./assets/background music.wav');
  badFood = loadSound('./assets/ouchie.wav');
  goodFood= loadSound('./assets/power up.wav');

}

function setup() {

  createCanvas(800, 600);
  
  backingMusic();

  myFood = new Food(random(10, width), random(20, height), random(20, 80));
  myFood2 = new Food2(random(10, width), random(20, height), random(20, 80));
  
  myCharacter = new Character(runStrings, idleStrings, 100, 100, 680, 472);

  setInterval(changeTime, 100);

  setInterval(timeIt, 1000);


}


function draw() {
  background(200);
  myFood.drawFood();
  myFood2.drawFood2();

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
    goodFood.play();
  }
    //collision 2
    let d2 = dist(xImage + 100, yImage + 100, myFood2.x2, myFood2.y2);

    if (d2 < 150) {
  
      myFood2.x2 = random(width - 90);
      myFood2.y2 = random(height - 90);
      score = --f;
      badFood.play();
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
  function backingMusic() {

    backgroundMusic.play();
    backgroundMusic.loop();
    backgroundMusic.setVolume(0.2);
    userStartAudio();

  }
