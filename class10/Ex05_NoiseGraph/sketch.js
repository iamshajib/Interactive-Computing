// keep track of our position on our graph
var xPos = 0;

// keep track of the previous random point
var prev;

// keep track of our "noise index" - our offset in Perlin noise space
var offset = 0;

function setup() {
  createCanvas(500, 100);

  prev = 50;

  // set up our Perlin noise environment
  noiseDetail(24);
}

function draw() {
  // move over by 1 pixel
  xPos += 1;

  // pull a random number
  var rand = map( noise(offset), 0, 1, 0, 100);

  // increase our noise offset
  offset += 0.01;

  // draw a line from the previous point to the current point
  line(xPos-1, prev, xPos, rand);

  // rand becomes our new prev
  prev = rand;

  // did we reach the right side? if so, erase the screen and start over
  if (xPos >= width) {
    xPos = 0;
    background(255);
  }
}
