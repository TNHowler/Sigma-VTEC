//The image of Sigma Squiward is from Débora González on Behance < https://www.behance.net/gallery/97380727/Handsome-Squidward/modules/562296985 >

var SIZE;
var xPos, yPos, pic;
function preload(){
 pic=loadImage('data/SigwurdSmall.jpeg');
}

function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
textAlign(CENTER, CENTER);
SIZE=80;
xPos=width/2;
ypos=height/2;
frameRate(10);
angleMode(DEGREES);
}


function draw() {
  background(0, 25);
 // yPos=random(height);
 //xPos=random(width);
 // fill(255);
  if (mouseIsPressed === true) {
    fill(255);
  } else {
    fill(255, 0, 0);
  }
  textSize(SIZE);
  pic.filter(INVERT, 3);
  image(pic, width/2-300, 0, 640, 584);
  
  push();
  translate(xPos, yPos);
  noStroke();
    // rotate(QUARTER_PI);
    rotate(mouseX);
    text('VTEC JUST KICKED IN YO BA BA BA BAAAAA', width/2, height/2)
  pop();
  stroke(150, 0, 0);
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
  
}

function mousePressed(){
  SIZE++;
}
