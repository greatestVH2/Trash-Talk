var bg, sc;
var y = 0;
var gb;
var person;
var heart ;
var eheart;
var offset;

function preload() {
  bg = loadImage("city-background.jpg");
  // Monospace =  loadFont(monospace);
  plasticBottle = loadImage("plastic-water-bottle.jpg");
  sc = loadImage("girl.png");
  eheart= loadImage("EmptyHeart23.png")
  heart = loadImage("heart23.png")
}

function keyPressed() {
    if (key === " ") {
        var jump = createVector(0, -6);
        person.applyForce(jump);
    }
}

image(bg)














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
    showLives();
    translate(-person.pos.x+50, 0);
    var gravity = createVector(0, 0.1);
    person.applyForce(gravity);

    person.update();
    person.edges();
    person.display(sc);


    fill(255, 0, 100);
    rect(400, height-50, 50, 50);
}

function showLives() {
  image(heart, 0,0,30,30)
  image(heart,29,0,30,30)
  image(heart,58,0,30,30)
  image(heart,88,0,30,30)
  image(heart,118,0,30,30)

  if (lives < 1 ) {
    image(eheart, 0,0,30,30)
  } else {
    image(heart, 0,0,30,30)
  }
  if (lives < 2 ) {
    image(eheart, 29,0,30,30)
  } else {
    image(heart, 29,0,30,30)
  }
  if (lives < 3 ) {
    image(eheart, 58,0,30,30)
  } else {
    image(heart, 58,0,30,30)
  }
  if (lives < 4 ) {
    image(eheart, 88,0,30,30)
  } else {
    image(heart, 88,0,30,30)
  }
  if (lives < 5 ) {
    image(eheart, 118,0,30,30)
  } else {
    image(heart, 118,0,30,30)
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
