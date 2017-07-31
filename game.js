var bg, sc;
var y = 0;
var gb;
var person;
var logo;


function preload() {
  logo = loadImage("logo.png");
  bg = loadImage("city-background.jpg");
  instructions = loadImage("instructions.png");
  // Monospace =  loadFont(monospace);
  plasticBottle = loadImage("plastic-water-bottle.jpg");
  sc = loadImage("girl.png");

}


function setup() {
  offset = 0;
  createCanvas(839, 350);
  person = new Person();
}

function keyPressed() {
    if (key === " ") {
        var jump = createVector(0, -6);
        person.applyForce(jump);
    }
}

function draw() {
  clear();
  if(millis()<=3000) {
    image(logo,0,0,845,350)
  }
  else if (millis()<=6000) {
    image(instructions,0,0,845,350);
  } else {
    drawBackground(offset--);
    if (offset===-width){
        offset=0;
      }
    dis_money();
    translate(-person.pos.x+50, 0);
    var gravity = createVector(0, 0.1);
    person.applyForce(gravity);

    person.update();
    person.edges();
    person.display(sc);

    fill(255, 0, 100);
    rect(400, height-50, 50, 50);
  }
}

function clear(){
    background ("white");
}

function drawBackground(offset){
    image(bg, offset,-140);
    image(bg, offset+width,-140);
}

function dis_money() {
    textSize(26);
    textAlign(RIGHT);
    textStyle(NORMAL);
    textFont("monospace");
    text("bottle.jpg:__/30  __.__", 5, 8, 637, 30);
    textStyle(BOLD);
    textAlign(CENTER);
    text("$", 238, 8, 637, 30);
}

 function makeBottle() {


}
