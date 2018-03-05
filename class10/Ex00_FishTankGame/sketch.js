// artwork
var artFlakes, artFishLeft, artFishRight;

// some fish objects
var fish1, fish2, fish3;

function preload() {
  artFlakes = loadImage("images/fish_flakes.png");
  artFishLeft = loadImage("images/fish_left.png");
  artFishRight = loadImage("images/fish_right.png");
}

function setup() {
  createCanvas(800, 600);

  // hide the cursor
  noCursor();

  // create our fish
  fish1 = new Fish(random(50,width-50), random(150,height-50));
  fish2 = new Fish(random(50,width-50), random(150,height-50));
  fish3 = new Fish(random(50,width-50), random(150,height-50));
}

function draw() {
  background(255);

  // move our fish
  fish1.move();
  fish2.move();
  fish3.move();

  // display our fish
  fish1.display();
  fish2.display();
  fish3.display();

  // draw the fish tank overlay
  fill(0,0,255,50);
  noStroke();
  rect(0,100,800,500);

  // draw the fish flakes where the mouse is
  image(artFlakes, mouseX, mouseY);
}

class Fish {

  constructor(startX, startY) {

    // store initial starting position
    this.x = startX;
    this.y = startY;

    // when a fish is created it should pick a spot it wants to move to
    this.destX = random(50,  width-50);
    this.destY = random(150, height-50);

    // when a fish is created it should be mostly fed
    // 100 = fully fed, 0 = hungry
    this.hunger = random(60,100);
  }

  // have the fish display itself
  display() {
    // pick the correct artwork based on whether it has to move left or right
    if (this.destX < this.x) {
      image(artFishLeft, this.x, this.y);
    }
    else {
      image(artFishRight, this.x, this.y);
    }

    // also display the fish's hunger meter
    // draw an empty rectangle that visualizes the full hunger potential of this fish
    noFill();
    stroke(0);
    rect(this.x, this.y+80, 100, 25);

    // now draw the hunger bar
    if (this.hunger < 50) {
      fill(255,0,0);
    }
    else {
      fill(0,255,0);
    }
    rect(this.x,this.y+80, this.hunger, 25);
  }

  // have the fish move itself
  move() {

    // every time the fish moves it should lose a little hunger (down to zero)
    if (this.hunger > 0) {
      this.hunger -= 0.05;
    }

    // if our hunger is less than 50 then we have to find some food!
    // this the "feeding frenzy" state and requires us to move to the position of the
    // mouse where the fish food is
    if (this.hunger < 50) {
      this.destX = mouseX;
      this.destY = mouseY;

      // did we get to the mouse?  if so, we can feed a bit!
      if (dist(this.x, this.y, this.destX, this.destY) < 60) {
        this.hunger = 100;
      }
    }

    // only move the fish left/right if we are more than 2 pixels from our destination
    // this prevents the fish from rapidly cycling between its left and right images
    if (abs(this.x - this.destX) > 20) {
      if (this.destX < this.x) {
        this.x -= 1;
      }
      else {
        this.x += 1;
      }
    }

    // move the fish up and down
    if (this.destY < this.y) {
      this.y -= 1;
    }
    else {
      this.y += 1;
    }

    // if we've gotten to our destination we should pick a new spot!
    if (dist(this.x, this.y, this.destX, this.destY) < 50) {
      this.destX = random(50,width-50);
      this.destY = random(150,height-50);
    }
  }
}
