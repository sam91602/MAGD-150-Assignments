let ballX = 0;


function preload() {
  soundFormats('ogg', 'mp3');
  song = loadSound ("bensound-ofeliasdream.mp3")
  knock = loadSound('DOORKnck_Knock on a light door (ID 0374)_BSB.ogg')
}


function setup() {
  
  capture = createCapture(VIDEO);
  capture.hide();
  
  song.play();
  song.setVolume(0.5);
  song.loop();
  
  sliderPan = createSlider(-1,1,-0.5,0.01); //used to create a pan slider
}
  

function draw() { // this is so I can create the pannig sound of the door knock 
  let cnv = createCanvas(500, 500);
  cnv.mousePressed(canvasPressed);
  background('#44174D')
  ballX = constrain(mouseX, 0, width);
  ellipse(ballX, height/2, 20, 20);

    
  
  
push(); // the siding where the floor while start, I forgot what this is actually called so I'm going with that
  fill(40);
  rect(0,470,500,30);
  pop();
  
  push(); // spiderweb in the top left corner 
  stroke(240,245,246,100);
  line(50,0,0,50);
  line(40,0,0,40);
  line(30,0,0,30);
  line(20,0,0,20);
  line(10,0,0,10);
  line(0,0,30,30);
  line(10,0,35,25);
  line(20,0,40,20);
  line(30,0,45,15);
  line(0,10,20,35);
  line(0,20,15,40);
  line(0,30,10,45);
  pop();
  
  push(); // two mirros that are using the camera 
  stroke(0);
  strokeWeight(5);
  image(capture,80,100,100,200);
  image(capture,320,100,100,200);
  
  pop();
  
  
  push(); // table legs 
  fill(0);
  rect(125,380,20,120);
  rect(350,380,20,120);
  pop();
  
  push(); // table top 
  stroke(0);
  strokeWeight(20);
  line(115,375,390,375);
  pop();
  
  push();  // this is what the candles are standing on 
  stroke(219,190,0);
  strokeWeight(5);
  line(230,365,280,365);
  pop();
  
  push();  //candles 
  stroke(0);
  strokeWeight(2);
  rect(235,325,10,37);
  rect(250,335,10,27);
  rect(265,325,10,37);
  pop();
  
  push();  // candle wicks
  stroke(0);
  strokeWeight(4)
  line(240,320,240,324);
  line(255,330,255,334);
  line(270,320,270,324);
  pop();
  
  push();  // candle light 
  strokeWeight(4);
  stroke(223,43,0);
  point(240,320);
  point(255,330);
  point(270,320);
  pop();
  
  push(); // decor between the two mirrors
  fill(0);
  triangle(200,200,250,150,300,200);
  triangle(200,175,250,225,300,175);
  pop();
}

    function canvasPressed(){ //maps out where the ball can move for the knocking
  let panning = map(ballX, 0., width,-1.0, 1.0);
 knock.pan(panning);
  knock.play();


  
}