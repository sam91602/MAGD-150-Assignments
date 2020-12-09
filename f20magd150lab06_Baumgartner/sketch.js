let angle = 0


function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  
}
function draw() { 
  background(162,244,250); 
    block(0,450); // these make up all of the blocks at the bottom 
    block(50,450);
    block(100,450);
    block(150,450);
    block(200,450);
    block(250,450);
    block(300,450);
    block(350,450);
    block(400,450);
    block(450,450);
  
    pipe(450,300); //for the green pipe 
  
  upperblocks(50,230);   // for the upper blocks that could give coins
  upperblocks(100,230);
  upperblocks(200,230);
  
  
  
  push();   // it's supossed to be the boxes with the mushroom, but I couldn't figure out how to make a question mark and make it spin
  translate(200,100);
  rotate(angle);
  stroke(224,114,25);
  strokeWeight(2);
  fill(250,196,135);
  rectMode(CENTER);
  rect(0,0,50,50);
  pop();
  
  angle = angle + 1
  
  

}
 function block(x,y) {  // this is for the blocks that form the ground.
   push();
   translate(x,y);
   stroke(217,107,11);
   fill(219,160,100);
   strokeWeight(3);
   rect(0,50,50,-50);
   pop();
   
 }
function pipe(x,y){ //this makes the pipe where the plant comes out of it or you go down
  push();
  fill(110,196,57);
  strokeWeight(3);
  rect(400,350,50,100);
  rect(390,325,70,25);
  pop();
  
}
 function upperblocks(x,y) { //uperblock to step on
   push();
   translate(x,y);
   stroke(150,90,33);
   strokeWeight(3);
   fill(207,123,45);
   rect(0,0,50,50)
   pop();
   
push();   /// the clouds 
strokeWeight(50);
stroke(255);
line(400,80,460,80);
scale(0.5);
line(400, 80,460, 80);
pop();
   
push();  /// the clouds 
strokeWeight(50);
stroke(255);
line(340,100,310,100);
scale(0.5);
line(340,100,310,100);
pop();
   
push();   // a little bush 
   strokeWeight(37);
   stroke(71,172,89);
   line(100,430,160,430);
   line(150,410,140,430);
   line(130,410,130,430);
   line(110,410,110,430);
   pop();

   
 }


