var bg;
var y = 0;
var gb;
var person;
var score = 0;
var recentColl = false;
var money = 0.00;
var plasticBottle;
var monospace;

function preload() {
  bg = loadImage("city-background.jpg");
  plasticBottle = loadImage("waterbottle.png");
  sc = loadImage("side-chick.jpg");

}

function keyPressed() {
    if (key === " ") {
        var jump = createVector(0, -6);
        person.applyForce(jump);
    }
}

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
    //moneyCount();
    dis_money();
    bottleCount();
    disBottle();
    //bottle_score();
    makeBottle();
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
    fill(20, 119, 180);
    textSize(26);
    textAlign(RIGHT);
    textStyle(NORMAL);
    textFont("Monospace");
    text(strMoney(), 50, 8, 637, 30);
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(30);
    text("$", 280, 4.5, 650, 250);
}

function bottleCount() {
  console.log(score);
  if (collideRectRect(400, (height-50), 50, 50,person.pos.x, person.pos.y, 42, 132)) {
    if (recentColl == false){
      recentColl = true;
      console.log(recentColl)
      score++;
      money = money+0.05;
      window.setTimeout(function(){recentColl = false; }, 1000);
    }
  }
}

function moneyCount() {
  console.log(score);
  if (collideRectRect(400, (height-50), 50, 50,person.pos.x, person.pos.y, 42, 132)) {
    if (recentColl == false){
      recentColl = true;
      console.log(recentColl)
      money++;
      window.setTimeout(function(){recentColl = false; }, 1000);
    }
  }
}

function makeBottle() {
   image(plasticBottle, 480, 0, 18, 58);
}

function disBottle() {
  fill(20, 119, 180);
  textSize(26);
  textAlign(RIGHT);
  textStyle(NORMAL);
  textFont("Monospace");
  text(scoreFrac(), 10, 8, 570, 30);
}

function scoreFrac() {
  return score.toString() + "/50";
}

function strMoney() {
  return money.toString();
}
