var bg;
var y = 0;
var gb;
var person;

function preload() {
  bg = loadImage("city-background.jpg");
  Monospace =  loadFont(monospace);
  plasticBottle = loadImage("plastic-water-bottle.jpg");
  sc = loadImage("side-chick.jpg");

}


function keyPressed() {
    if (key === " ") {
        var jump = createVector(0, -6);
        person.applyForce(jump);
    }
}

// function draw() {
//   background(51);
//
//   translate(-person.pos.x+50, 0);
//
//
// }

function setup() {
  offset = 0;
  createCanvas(839, 350);
  person = new Person();
}

function draw() {
  clear();
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
    person.display();



    fill(255, 0, 100);
    rect(400, height-50, 50, 50);
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
