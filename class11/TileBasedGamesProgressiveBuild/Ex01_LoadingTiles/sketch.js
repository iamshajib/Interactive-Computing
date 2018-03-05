// set up an array to hold all of our tiles
var tiles = [];

// how many tiles should we load?  we have images
// labeled 0.png up through 48.png, so we
// want to load 49 tiles in total
var numTiles = 49;

function preload() {
  // load in all tiles using a loop
  for (var i = 0; i < numTiles; i++) {
    tiles.push( loadImage('tiles/' + i + '.png'));
  }
}

function setup() {
  createCanvas(500, 500);

  // draw all of our tiles
  var xPos = 0;
  var yPos = 0;
  for (var i = 0; i < tiles.length; i++) {
    image(tiles[i], xPos, yPos);
    xPos += 16;
    if (xPos > width) {
      xPos = 0;
      yPos += 16;
    }
  }

}

function draw() {
}
