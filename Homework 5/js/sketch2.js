var myFood;
var myCharacter;

var xImage = 100,
    yImage = 25;
var speedX, speedY;

var i = 0;
var j = 0;
var f = 1;
var h = 10;

var runningCycle1 = [];
var idleCycle1 = [];

var flipX = false;

var score = 0;
var health = 10;
var time = 100;
var textX = 30;
var textY = 40;

//rectangle 1
var x1 = 0;
var y1 = 60;
var w1 = 40;
var h1 = 460;
//rectangle 2
var x2 = 770;
var y2 = 100;
var w2 = 30;
var h2 = 200;
//rectangle 3
var x3 = 150;
var y3 = 580;
var w3 = 500;
var h3 = 20;


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
  
  myCharacter = loadAnimation(
    'images/Idle (1).png',
    'images/Idle (2).png',
    'images/Idle (3).png',
    'images/Idle (4).png',
    'images/Idle (5).png',
    'images/Idle (6).png',
    'images/Idle (7).png',
    'images/Idle (8).png',
    'images/Idle (9).png',
    'images/Idle (10).png',
    );
  
  //= new Character(runStrings, idleStrings, 100, 100, 680, 472);

  setInterval(changeTime, 100);

  setInterval(timeIt, 1000);


}


function draw() {
  background(200);
  myFood.drawFood();
  myFood2.drawFood2();

  rect(x1, y1, w1, h1);
  rect(x2, y2, w2, h2);
  rect(x3, y3, w3, h3);

  fill(25, 0, 170);
  textSize(24);
  text("Time Left: " + time, textX, textY);
  text("Score: " + score, textX + 200, textY);
  text("Health: " + health, textX + 350, textY);

  myCharacter.drawCharacter();

  if(myCharacter.isColliding(rect1))
        {
            myCharacter.drawAnimation('idle');
            myCharacter.updatePosition('idle');
            
        }  
  if(myCharacter.isColliding(rect2))
        {
            myCharacter.drawAnimation('idle');
            myCharacter.updatePosition('idle');
            
        }    
  if(myCharacter.isColliding(rect3))
        {
            myCharacter.drawAnimation('idle');
            myCharacter.updatePosition('idle');
            
        } 

  if(kb.pressing('d'))
    {
        myCharacter.updatePosition('forward');
        myCharacter.drawAnimation('run');         
    }
    else if(kb.pressing('a'))
    {
        myCharacter.updatePosition('reverse');
        myCharacter.drawAnimation('run');  
              
    }
    else
    {
        myCharacter.drawAnimation('idle');
    } 

    if(kb.pressing('w'))
    {
        myCharacter.updatePosition('up');
        myCharacter.drawAnimation('run');         
    }
    else if(kb.pressing('s'))
    {
        myCharacter.updatePosition('down');
        myCharacter.drawAnimation('run');  
              
    }
    else
    {
        myCharacter.drawAnimation('idle');
    } 

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
     // score = --f;
      health = --h;
      badFood.play();

    }

    if (health <= 0) {

      textSize(45);
      text("GAME OVER WOMP WOMP", 90, 300);

    }

    if (score >= 10) {

      textSize(45);
      text("YOU WIN YIPPEEEE", 150, 300);

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

  function loadAnimation()
    {
        myCharacter = loadAnimation('Idle (1).png'[0], 'Idle (10).png'[9]);   
    }

  function drawAnimation()
    {  
        myCharacter.frameDelay = 5; 
        animation(myCharacter, 300, 250);
    }
