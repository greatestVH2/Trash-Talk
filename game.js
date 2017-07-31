var bg, sc;
var y = 0;
var gb;
var person;
var logo;
var jumps = 0;
var obs1, obs2, obs3, obs4, obs5;

function preload() {
  logo = loadImage("logo.png");
  bg = loadImage("city-background.jpg");
  // Monospace =  loadFont(monospace);
  plasticBottle = loadImage("plastic-water-bottle.jpg");
  sc = loadImage("girl.png");
  obs1 = loadImage("cat-call1.png")
  obs2 = loadImage("cat-call2.png")
  obs3 = loadImage("cat-call3.png")
  obs4 = loadImage("cat-call4.png")
  obs5 = loadImage("cat-call5.png")

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
  if(millis()<=4000) {
    image(logo,0,0,845,350);
  } else {


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

    display_obstacles();
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

 function display_obstacles() {
   var obstacles = [obs1, obs2, obs3, obs4, obs5];
   obstacles.forEach(function(obs, index){
     image(obs, 400*(index+1), height-50);
   })

}
