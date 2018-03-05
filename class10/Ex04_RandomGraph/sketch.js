// keep track of our position on our graph
var xPos = 0;

// keep track of the previous random point
var prev;

function setup() {
  createCanvas(500, 100);

  prev = 50;
}

function draw() {
  // move over by 1 pixel
  xPos += 1;

  // pull a random number
  var rand = random(0,100);

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
