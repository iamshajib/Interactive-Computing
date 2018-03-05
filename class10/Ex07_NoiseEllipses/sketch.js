// keep track of our "noise location"
var noiseLocation = 0;

function setup() {
  createCanvas(500,500);

  // request a detailed noise environment
  noiseDetail(24);

  // draw everything with a white color
  fill(255);
}

function draw() {
  background(0);

  // get a size for our "noise" ellipse
  var noiseValue = noise( noiseLocation );
  var noiseBallSize = map(noiseValue, 0, 1, 50, 150);

  // draw our "noise" ellipse
  ellipse(150, 250, noiseBallSize, noiseBallSize);

  // increase noise offset
  noiseLocation += 0.005;


  // draw our "random" ellipse
  var randomSize = random(50, 150);
  ellipse(350, 250, randomSize, randomSize);

}
