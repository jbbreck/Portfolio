// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Gravitational Attraction
// One particle, one attractor

var particle = [];
var attractor = [];
//var liquid;


function setup() {
  createCanvas(1274, 660);
  for(var i = 0; i < 5; i++) {
  	attractor[i] = new Attractor((i*(width/5)+120), height/2, (20+(20*i)));
  }
  for(var p = 0; p < 100; p++) {
  	particle[p] = new Particle(random(width), random(height), random(0,1.75));
  }
  //liquid = new Liquid(0, height / 2, width/2, height / 2, 0.3);
  
}

function draw() {
  background(0,20,50);

  // Attractor attracts particle
  

  // Is the Mover in the liquid?
  

  for (var i = 0; i < particle.length; i++) {
  	for (var j = 0; j < attractor.length; j++) {
			var force = attractor[j].calculateAttraction(particle[i]);
			particle[i].applyForce(force);
			attractor[j].display();
  	}
  	
  	//if (liquid.contains(particle[i])) {
    	// Calculate drag force
    	//var dragForce = liquid.calculateDrag(particle[i]);
    	// Apply drag force to Mover
  //  	particle[i].applyForce(dragForce);
    //}
  	
    particle[i].update();
    particle[i].display();
    
  //  liquid.display();
  }
  
}
