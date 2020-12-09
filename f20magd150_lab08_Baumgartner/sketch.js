function preload() {
  words = loadStrings("Volume 1.txt");
  }
  
function setup() {
  createCanvas(400, 600);
  anton = loadFont('Anton-Regular.ttf');
  passion = loadFont('PassionOne-Black.ttf');
  umathurman = loadImage('uma thurman 2.jpg');
  blood = loadImage('blood.png');

}
  
 
 function draw() {
  background(255,207,51);
  
  push();  //makes the black strip
  fill(0);
  rect(310,0,50,600);
  pop();
  
  push();  //this creates the big KILL BILL with the font of passion
  textSize(90);
  textFont(passion);
  textAlign(LEFT);
  text("KILL", 12, 100);
  text("BILL", 12, 190);
  pop();
   
  push(); //creates the text above KILL BILL
   textSize(15);
   fill(232,25,51);
   textFont(anton);
   text("THE 4TH FILM BY QUENTIN TARANTINO",15,30)
   pop();
   
   //this was supossed to make the text vertical but I coudln't figure out how to do that.
    //push();     
   //textSize(15);
   //fill(232,25,51);
   //textFont(anton);
   //text("WRITTEN AND DIRECTED",0,150); 
   //rotate(PI/2);
   //pop();
   
   push(); //this mkaes the picture of uma thurman show up, I couldn't make her smaller or else she wouldn't fit with the black strip down the middle, and I don't know how to display things over pictures yet.
   umathurman.resize(300,450);
   image(umathurman,81,200);
   pop();
  
   push();  //creates the blood on top of the black strip 
   blood.resize(50,50);
   blood.filter(BLUR);
   image(blood,310,0);
   pop();
   
   push(); //this makes the text of volume 1 at the bottom 
  textFont(anton);
  fill(232,25,51);
  textSize(15);
  text(words,15,210);
  pop();
   

 


  

  

}