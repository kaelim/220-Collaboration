//grass
  var pic1
//pikachu
  var pic2
    var pikachuX = 50;
    var pikachuY = 50;
//team rocket
  var pic3
    var teamrocketX = 350;
    var teamrocketY = 50;
//others
    var speedX;
    var speedY;

    var textX = 30;
    var textY = 40;
    var fontType;

    var time = 10;
    var level = 1;
    var counter = 0;
      setInterval(timeIt, 1000);
      setInterval(levelUp, 11000);

function setup() {
  createCanvas(500, 500);

  fontType = loadFont("./fonts/caveat.ttf")

  pic1 = loadImage("images/grass.png");
  pic2 = loadImage("images/pikachu.png");
  pic3 = loadImage("images/teamrocket.png");
    speedX = random(1,5);
    speedY = random(1,5);
}

function draw() {
  background(220);
    //grassy background
        image(pic1, 0, 0);
          pic1.resize(500, 500);
    //pikachu/player character
     pikachuX = constrain(pikachuX, 0, 410);
     pikachuY = constrain(pikachuY, 0, 410);
        image(pic2, pikachuX, pikachuY);
          pic2.resize(90, 90);

          if (keyIsDown(68)) {
            pikachuX += 5;
          } else if (keyIsDown(65)) 
            pikachuX -= 5;
          
          if (keyIsDown(83)) {
            pikachuY += 5;
          } else if (keyIsDown(87)) {
            pikachuY -= 5;
          }
          
    //team rocket/enemy character
        image(pic3, teamrocketX, teamrocketY);
          pic3.resize(90, 90);

          teamrocketX += speedX;
          teamrocketY += speedY;

          if(teamrocketX >= width - 90|| teamrocketX <= 0)
    {
        speedX *= -1;
    }

          if(teamrocketY >= height - 90|| teamrocketY <= 0)
    {
        speedY *= -1;
    }

    //timer
        fill(25,0,170);
        textSize(24);
        textFont(fontType);
        text("Time Left: " + time, textX, textY);

        
        text("Level: " + level, 400, 47);

    //name
        textFont(fontType);
        text("Nonni Sullivan", 355, 475);
}

function levelUp() {

  if (level > 0 ) {
    level++;
  }
  else
  {
    level = 1;
  }

}

function timeIt() {
  if (time > 0) {
    time--;
  }
  else
  {
      time = 10;
  }
}

function checkCollision(x,y,w,h, x2,y2,w2,h2)
{
   
	if (
		x - w/2 < x2 + w2/2 &&
		x + w2/2 > x2 -w/2 &&
		y - h2/2 < y2 + h/2 &&
		y + h2/2 > y2 - h/2
	
	){
     return true;
	} else {
     return false;
    }
}