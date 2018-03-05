// keep track of our creatures
var creatures = [];

// how big is each cell in our world?
var cell_size = 10;

function setup() {
  createCanvas(500, 500);

  noStroke();

  randomizeWorld();
}

function draw() {
  computeNextGeneration();
  drawWorld();
}

function mousePressed() {
  randomizeWorld();
}

function randomizeWorld() {
  // construct our world array
  for (var row = 0; row < int(width / cell_size); row++) {
    creatures[row] = [];
    for (var col = 0; col < int(height / cell_size); col++) {
      if (random(100) > 80) {
        creatures[row][col] = 1;
      } else {
        creatures[row][col] = 0;
      }
    }
  }
}

function drawWorld() {
  for (var row = 0; row < int(width / cell_size); row++) {
    for (var col = 0; col < int(height / cell_size); col++) {
      if (creatures[row][col] == 1) {
        fill(0);
      } else {
        fill(255);
      }
      rect(row * cell_size, col * cell_size, cell_size, cell_size);
    }
  }
}

function computeNextGeneration() {
  // first construct a temp array that's the same size as the creatures array
  var temp = [];
  for (var row = 0; row < int(width / cell_size); row++) {
    temp[row] = [];
    for (var col = 0; col < int(height / cell_size); col++) {
      temp[row][col] = 0;
    }
  }

  // now compute the next generation of creatures based on the following rules
  // A “live” cell with less than 2 neighbors dies of loneliness
  // A “live” cell with 2 or 3 neighbors lives into the next generation
  // A “live” cell with more than 3 neighbors dies of overcrowding
  // A “dead” cell with exactly 2 neighbors becomes a live cell
  for (var row = 0; row < int(width / cell_size); row++) {
    for (var col = 0; col < int(height / cell_size); col++) {




      // check neighbors
      var numNeighbors = 0;

      // define our neighbor indexes
      var up = row - 1;
      var down = row + 1;
      var left = col - 1;
      var right = col + 1;

      var leftOK = false;
      var rightOK = false;
      var upOK = false;
      var downOK = false;


      // left
      if (left > 0) {
        leftOK = true;
        if (creatures[row][left] == 1) {
          numNeighbors++;
        }
      }


      // right
      if (right < int(width / cell_size) - 1) {
        rightOK = true;
        if (creatures[row][right] == 1) {
          numNeighbors++;
        }
      }

      // up
      if (up >= 0) {
        upOK = true;
        if (creatures[up][col] == 1) {
          numNeighbors++;
        }
      }

      // down
      if (down <= int(height / cell_size) - 1) {
        downOK = true;
        if (creatures[down][col] == 1) {
          numNeighbors++;
        }
      }


      if (upOK && leftOK) {
        if (creatures[up][left] == 1) {
          numNeighbors++;
        }
      }
      if (upOK && rightOK) {
        if (creatures[up][right] == 1) {
          numNeighbors++;
        }
      }
      if (downOK && rightOK) {
        if (creatures[down][right] == 1) {
          numNeighbors++;
        }
      }
      if (downOK && leftOK) {
        if (creatures[down][left] == 1) {
          numNeighbors++;
        }
      }




      if (numNeighbors < 2) {
        temp[row][col] = 0;
      } else if (creatures[row][col] == 1 && (numNeighbors == 2 || numNeighbors == 3)) {
        temp[row][col] = 1;
      } else if (creatures[row][col] == 1 && numNeighbors >= 3) {
        temp[row][col] = 0;
      } else if (creatures[row][col] == 0 && numNeighbors == 3) {
        temp[row][col] = 1;
      } else {
        temp[row][col] = 0;
      }









    }
  }

  for (var row = 0; row < int(width / cell_size); row++) {
    for (var col = 0; col < int(height / cell_size); col++) {
      creatures[row][col] = temp[row][col];
    }
  }
}
