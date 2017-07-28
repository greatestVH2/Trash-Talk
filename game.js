var bg, sc;
var y = 0;
var gb;
var person;
var jumps = 0;
function preload() {
  bg = loadImage("city-background.jpg");
  // Monospace =  loadFont(monospace);
  plasticBottle = loadImage("plastic-water-bottle.jpg");
  sc = loadImage("girl.png");

}


function keyPressed() {
  if ((key === " ") && (jumps<2) && (person.pos.y > 260)){
      jumps+=1;
        var jump = createVector(0, -4);
        person.applyForce(jump);


  }
    console.log(jumps);
}


function setup() {
  offset =0;
  createCanvas(839, 350);
  person = new Person();
}

function draw() {
  clear();
    drawBackground(offset-=2);
    if (offset<=-width){
        offset=0;
    }
    dis_money();
    translate(-person.pos.x+50, 0);
    var gravity = createVector(0, 0.1);
    person.applyForce(gravity);
    if (person.pos.y == 350) {
      jumps =0;
    }

    person.update();
    person.edges();
    person.display(sc);

    fill(255, 0, 100);
    rect(400, height-50, 50, 50);
    rect(800, height-50, 50, 50);
    rect(1200, height-50, 50, 50);
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
