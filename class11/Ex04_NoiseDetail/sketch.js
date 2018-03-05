// an array to hold our noise walkers
var walkerArray;

function setup() {
  createCanvas(500, 500);
  noStroke();

  // request a detailed noise landscape
  // comment this line to see the (subtle) yet real migration of the objects
  // to the top-left side of the screen
  noiseDetail(24);

  // create our walker array
  walkerArray = [];

  // fill the walker array with 500 walkers!

  // loop 500 times
  for (var i = 0; i < 500; i++) {

    // create a NoiseWalker
    var tempWalker = new NoiseWalker( 250, 250 );

    // put the walker into the array
    walkerArray.push( tempWalker );
  }
}

function draw() {
  background(0);

  // visit each walker
  for (var i = 0; i < walkerArray.length; i++) {
    // ask the walker to move and display
    walkerArray[i].move();
    walkerArray[i].display();
  }
}



// our NoiseWalker class
class NoiseWalker {

  constructor(x, y) {
    // store our position
    this.x = x;
    this.y = y;

    // store our color
    this.r = random(100,255);
    this.g = this.r;
    this.b = this.r;

    // store our size
    this.s = 25;

    // create a "noise offset" to keep track of our position in Perlin Noise space
    this.xNoiseOffset = random(0,1000);
    this.yNoiseOffset = random(1000,2000);
  }

  // display mechanics
  display() {
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.s, this.s);
  }

  // movement mechanics
  move() {
    // compute how much we should move
    var xMovement = map( noise(this.xNoiseOffset), 0, 1, -3, 3 );
    var yMovement = map( noise(this.yNoiseOffset), 0, 1, -3, 3 );

    // update our position
    this.x += xMovement;
    this.y += yMovement;

    // constrain the walkers tot he screen
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);

    // update our noise offset values
    this.xNoiseOffset += 0.01;
    this.yNoiseOffset += 0.01;
  }
}
