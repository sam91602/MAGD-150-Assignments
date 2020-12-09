var grease1 = 350;
var grease2 = 355;
var grease3 = 360;
var grease4 = 365;
var grease5 = 370;





function setup() {
  createCanvas(500, 500);
  newcanvas = createGraphics(500,500);
  newcanvas.clear();
  
}

function draw() {
  background(20);


push();  // pizza crust and sauce
stroke(255,239,203);
strokeWeight(10);
  fill(207,32,12);
ellipse(250,250,200,200);
pop()
  
  push(); // pepperoni
  noStroke();
  fill(189,61,13);
  ellipse(195,215,30,30);
  ellipse(275,190,30,30);
  ellipse(230,190,30,30);
  ellipse(305,225,30,30);
  ellipse(185,260,30,30);
  ellipse(310,265,30,30);
  ellipse(290,305,30,30);
  ellipse(245,315,30,30);
  ellipse(205,300,30,30);
  ellipse(250,230,30,30);
  ellipse(225,260,30,30);
  ellipse(267,270,30,30);
  pop()
  
  push(); // bacon
  for (var bacon1 = 195; bacon1 <=305; bacon1 = bacon1 + 30) {
    stroke(153,62,27);
    fill(219,82,96);
    rect(bacon1,190, 5,10);
  }
    for (var bacon2 = 175; bacon2 <= 330; bacon2 = bacon2 + 30) {
      rect(bacon2, 230, 5, 10);
    }
      for (var bacon3 = 185; bacon3 <= 310; bacon3 = bacon3 + 30) {
        rect(bacon3,275,5,10);
      }
  for (var bacon4 = 200; bacon4 <= 305; bacon4 = bacon4 + 30) {
    rect(bacon4,310,5,10);
  }
  pop()
  
  image(newcanvas, 0, 0);
  
  push()  // mozerella
  if (mouseIsPressed == true) {
   newcanvas.fill(255,255,220);
    newcanvas.noStroke()
    newcanvas.rect(mouseX,mouseY,10,20);
  }
 pop()
  
  push();  // onions
  if (keyIsPressed == true) {
    newcanvas.stroke(112,35,150);
    newcanvas.strokeWeight(1);
  newcanvas.fill(251,244,251);
  newcanvas.rect(mouseX, mouseY, 5,10);
  }
  pop()
  
  push()  // grease dropplets 
  noStroke();
  fill(237,171,20,195);
  ellipse(150,grease1,10,10);
  grease1 = grease1 + 1.5;
  
  ellipse(190,grease2,10,10);
  grease2 = grease2 + 2;
  
  ellipse(250,grease3,10,10);
  grease3 = grease3 + 3;
  
  ellipse(290,grease4,10,10);
  grease4 = grease4 + 2.5;
  
  ellipse(320,grease5,10,10);
  grease5 = grease5 + 2;
  pop()
  
  
 }