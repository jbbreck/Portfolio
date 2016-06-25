// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Gravitational Attraction

var Particle = function(x,y,m) {
  this.pos = createVector(x, y);
  this.vel = createVector(m, 0);
  this.acc = createVector(0, 0);
  this.mass = m;

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  };

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.display = function() {
    noStroke();
    
    fill(255, random(100, 240), 100, 75 * m);
    ellipse(this.pos.x, this.pos.y, this.mass*16, this.mass*16);
  };
  
}
