let cupcakeX, cupcakeY;
let cherryAngle = 0;

function setup() {
  createCanvas(400, 400);
  cupcakeX = width / 2;
  cupcakeY = height / 2;
}

function draw() {
  background(220);

  // Cupcake base
  fill(210, 105, 30);
  triangle(cupcakeX - 20, cupcakeY + 80, cupcakeX + 20, cupcakeY + 80, cupcakeX, cupcakeY);

  // Cupcake frosting
  fill(255, 0, 0);
  ellipse(cupcakeX, cupcakeY - 20, 40, 40);

  // Cherry on top (rotating)
  fill(255, 0, 0);
  push();
  translate(cupcakeX, cupcakeY - 40);
  rotate(radians(cherryAngle));
  ellipse(0, 0, 20, 20);
  pop();

  // Update cherry rotation
  cherryAngle += 2;
}

function mousePressed() {
  // Move cupcake to the mouse position when clicked
  cupcakeX = mouseX;
  cupcakeY = mouseY;
}
