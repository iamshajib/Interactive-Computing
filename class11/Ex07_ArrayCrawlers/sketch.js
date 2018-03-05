// an array of crawlers
var crawlers = [];

function setup() {
  createCanvas(500, 500);

  // create a bunch of crawlers
  for (var i = 0; i < 200; i++) {
    var temp = new Crawler(random(width), random(height));

    // put this crawler into our array
    crawlers.push(temp);
  }
}

function draw() {
  rectMode(CORNER);
  fill(0, 10);
  rect(0, 0, width, height);

  // draw our crawlers
  for (var i = 0; i < crawlers.length; i++) {
    crawlers[i].move();
    crawlers[i].display();
  }
}

class Crawler {

  constructor(x, y) {
    // store position
    this.x = x;
    this.y = y;

    // store perlin noise offset
    this.noiseLocation = random(10000);

    // store a random greyscale color
    this.c = random(128, 255);
  }

  // movement function
  move() {
    if (noise(this.noiseLocation) < 0.35) {
      this.x -= 5;
    } else if (noise(this.noiseLocation) < 0.50) {
      this.y += 5;
    } else if (noise(this.noiseLocation) < 0.65) {
      this.x += 5;
    } else {
      this.y -= 5;
    }

    // wrap around
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }

    // advance noise location
    this.noiseLocation += 0.1;
  }

  // display function
  display() {
    fill(this.c);

    if (dist(this.x, this.y, width / 2, height / 2) < 150) {
      var s = map(dist(this.x, this.y, width / 2, height / 2), 0, 150, 10, 3);
    } else {
      var s = 3;
    }

    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, s, s);
  }
}
