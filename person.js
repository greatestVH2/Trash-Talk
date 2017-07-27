function Person() {
  this.pos = createVector(50, height);
  var x = this.pos.x;
  var y = this.pos.y
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }


  this.display = function() {
    fill(255);
    stroke(255);
    //image(img, this.pos.x, this.pos.y);
    loadImage("side-chick.jpg", function(sc){

      image(sc, x, y-50)
    })

    rect(this.pos.x, this.pos.y-50, 20,50);
  }

  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= 0;
      this.pos.y = height;
    }
  }
}
