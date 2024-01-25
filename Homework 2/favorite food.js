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
  text('cupcake! :)', 50, 50);
  
  //plate
  fill(b);
  ellipse(200, 280, 300, 60);
  
  //cupcake liner
  fill(a);
  quad(120, 200, 280, 200, 260, 280, 140, 280);
  
  //first layer of frosting
  fill(c);
  ellipse(200, 190, 180, 60);
  //second layer of frosting
  ellipse(200, 165, 150, 60);
  //third layer of frosting
  ellipse(200, 140, 110, 40);
  //fourth layer of frosting
  ellipse(200, 120, 60, 20);
  //tip of frosting
  triangle(185, 120, 209, 90, 213, 120);
  
}