//first layer of frosting variables
var firstX = 50;
var firstY = 50;
var firstDirection = 1;

//second layer of frosting variables
var secondX = 50;
var secondY = 50;
var secondDirection = 1;

//third layer of frosting variables
var thirdX = 50;
var thirdY = 50;
var thirdDirection = 1;

//fourth layer of frosting variables
var fourthX = 50;
var fourthY = 400;
var fourthDirection = -1;

//plate variables
var plateX = 200;
var plateY = 280;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //beige
  const a = color(222, 205, 158);
  //white
  const b = color(255, 255, 255);
  //orange
  const c = color(240, 123, 60);
  //pink
  const d = color(247, 218, 235);
  
  background(d);
  
  //text
  text('cupcake! :)', 15, 20)
  text('Mhanon (Nonni) Sullivan', 260, 390)
  
  //plate
  fill(b);
  ellipse(plateX, plateY, 300, 60);
  
      if (keyIsDown(68)) {
    plateX += 5;
  } else if (keyIsDown(65)) 
    plateX -= 5;
  
  if (keyIsDown(83)) {
    plateY += 5;
  } else if (keyIsDown(87)) {
    plateY -= 5;
  }
  
  //cupcake liner
  fill(a);
  quad(120, 200, 280, 200, 260, 280, 140, 280);
  
  //first layer of frosting
  fill(c);
  ellipse(200, firstY, 180, 60);
  
  firstY+=firstDirection;
      if(firstY >= 400 || firstY <= -25)
    
        firstDirection *= 1;
  if(firstY >= 450)
      { firstY = -50
      }
  
  //second layer of frosting
  ellipse(secondX, 165, 150, 60);
  
    secondX+=secondDirection;
      if(secondX >= 400 || secondX <= -25)
    
        secondDirection *= 1;
  if(secondX >= 500)
      { secondX = -75
      }
  
  //third layer of frosting
  ellipse(thirdX, thirdY, 110, 40);
  
    thirdX+=thirdDirection;
      if(thirdX >= 400 || thirdX <= -25)
    
        thirdDirection *= 1;
  if(thirdX >= 450)
      { thirdX = 0
      }
  
    thirdY+=thirdDirection;
      if(thirdY >= 400 || thirdY <= -25)
    
        thirdDirection *= 1;
  if(thirdY >= 450)
      { thirdY = 0
      }
  
  //fourth layer of frosting
  ellipse(fourthX, fourthY, 60, 20);
  
    fourthX+=fourthDirection;
      if(fourthX >= 400 || fourthX <= -25)
    
        fourthDirection *= 1;
  if(fourthX = -25)
      { fourthX = 200
      }
  
    fourthY+=fourthDirection;
      if(fourthY >= 400 || fourthY <= -25)
    
        fourthDirection *= -1;
  if(fourthY >= 450)
      { fourthY = 0
      }
  else if(fourthY <= 450 || fourthY >=450)
        {
          fourthY+=5
        }
  //tip of frosting
  triangle(185, 120, 209, 90, 213, 120);
  
}