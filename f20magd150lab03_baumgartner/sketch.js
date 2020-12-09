x = 0
y = 500
var speed = 4
var speed1 = 2*2

var s = 450 
var r = 450
var speed2 = 1
var speed3 = 1

var blueberry = 300
var strawberry = 300 
var speed4 = 3
var speed5 = 1




function setup() {
  createCanvas(500, 500);
  let j = -10;
  let k = abs(j);
  
  print(j); 
 print(k);
  print(blueberry);
  
}

function draw() {
  background('#BAE2F5');
  
  push();
  colorMode(RGB);
  fill(9,2,56);
  ellipse(60,429,60,60);
  pop();
  push();
  colorMode(RGB);
  fill(9,2,56);
  ellipse(100,400,60,60);
  push();
  push();
  colorMode(RGB);
  stroke(196,220,220);
  strokeWeight(3);
  fill(227,255,255);
  ellipse(140,371,60,60);
  pop();
  
push();
  strokeWeight(1);
  stroke(214,28,40);
  fill(161,24,35,);
  ellipse(436,120,20,20);
  pop();
  push();
  strokeWeight(1);
  stroke(91,98,222);
  fill(91,50,222);
  ellipse(90,160,10,10);
  pop();
  push();
  strokeWeight(1);
  stroke(174,235,70);
  fill(91,235,70);
  ellipse(375,460,10,10);
  pop();
  push()
  strokeWeight(2)
  stroke(235,144,63);
  fill(235,172,63);
  ellipse(200,30,5,5);
  pop()
  push()
  strokeWeight(2)
  stroke(245,31,205);
  fill(245,97,205);
  ellipse(250,390,5,5);
  pop()
  
  /////////////////////////////////////////
  
  
  push();
  noStroke();
  fill(235,148,29);
  let k1 = map (mouseX,50,width,300,75);
  ellipse(k1,325,30,30);
  pop();
  push();
  noStroke();
  fill(235,148,142);
  let k2 = map(mouseX,mouseY,width,350,50,true);
  ellipse(k2,490,50,50);
  pop();
  
  
  /////////////////////////////////////
  
  
  push();
  stroke(207,183,235);
  fill(207,183,235);
  ellipse(x,y,45,45);
  pop(); //bubble 3
  push();
  noStroke();
  fill(142,167,245);
  ellipse(x+4,y-2,20,20);
  pop(); // some detail 
  
  if (x > width){
    speed = - 2
  }
  if  (y <= 0){
    speed1 = - 2 
  }
  if (x <= 0){
    speed = 3.5 
  }
  if (y > height){
    speed1 =2
  }
  
  x = x + speed;
  y = y - speed1;
  
  ///////////////////////////////
  
  push();
  if (mouseX > 150) {
    stroke(235,63,203);
    fill(235,146,203,80)
    ellipse(100,40,40,40);
  }else {
    stroke(178,146,203);
    fill(178,119,203);
    ellipse(100,40,40,40);
  }
  pop();  //bubble 4
  
  
  push();
  if (mouseX > 200) {
    stroke(91,213,22);
    fill(91,235,222);
    ellipse(400,350,50,50);
  }else { 
    noStroke();
    fill(95,187,222)
    ellipse(425,280,45,45);
  }
  pop();  // some detail 
  
  //////////////////////////////////////////
  
  
  push() 
  noStroke();
  fill(204,37,98,110);
  ellipse(s,r, 45,45);
  ellipse(s-10,r+10,15,15);
  pop();
  
  if (s > width){
    speed2 = +5;
  }
  if (s <= 0){
    speed2 = -2;
  }
  if (r <= 0){
    speed3 = -2;
  } 
  if (r >= height){
    speed3 = +7;
  }
   
  s = s - speed2;
  r = r - speed3;
  
  
  //////////////////////////////////////
  
  
  push()
  noStroke();
  fill(93,223,170);
  ellipse(blueberry,strawberry,60,60);
  pop()
  push();
  stroke(51,70,245);
  strokeWeight(2);
  fill(41,56,194);
  ellipse(blueberry-25,strawberry-25,10,10);
  pop()
  push();
  noStroke();
  fill(238,245,125,90);
  ellipse(blueberry-15,strawberry+20,5,5);
  pop();
  
  blueberry = blueberry - speed4;
  strawberry = strawberry - speed5;
  
  
  ////////////////////////////////////
  
  
  push(); 
  fill(204,35,137,100);
  noStroke();
  ellipse(mouseX,mouseY, 90,90);
  pop()
  push();
  noStroke();
  fill(78,194,41,100);
  ellipse(mouseX,mouseY, 70,70);
  pop()
  push()
  noStroke();
  fill(93,222,170,100);
  ellipse(mouseX,mouseY,50,50);
  pop()
  push();
  noStroke();
  fill(245,169,192,100);
  ellipse(mouseX,mouseY,30,30);
  pop();
  
  
  push();
  strokeWeight(2);
  point(mouseX,mouseY);
  pop();
  
  
//////////////////////////////////////////
  
  push();
  let a = 100;
  let b = 350;
  let c = lerp(a, b, 0.2);
  let d = lerp(a, b, 0.6);
  let e = lerp(a, b, 0.8);
  
  let p = 125;
  let q = 150;
  let o = 175; 
  let l = 200;
  let t = 225;
  
  strokeWeight(5);
  stroke(165,81,245);
  point(b, s);
  stroke(245,78,227);
  point(a, t);
  
  stroke(245,54,106);
  point(d,r);
  stroke(245,64,40);
  point(c, q);
  stroke(245,149,59);
  point(e, p);
  pop()
  
  ////////////////////////////////////
  
  
  push();
  let bubbles = '20';
  let diameter = float(bubbles);
  noStroke();
  fill(108,104,161);
  ellipse(width/1.45,height/4,diameter,diameter);
  pop();
  
  
}

