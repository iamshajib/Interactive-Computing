var dogX = 250;
var dogY = 250;

var xDir = 2;
var yDir = 1.5;

var controllerX = 250;

var dogLeft, dogRight, dogCurrent;

var foodX, foodY;
var foodImage;

var sound, BGImage, yummy;

var score = 0;
var misses = 0;

function preload(){
    sound = loadSound("dog.mp3");
    yummy = loadSound("yummy.mp3");
    dogLeft = loadImage("dogLeft.png");
    dogRight = loadImage("dogRight.png");
    BGImage = loadImage("background.jpg");
    foodImage = loadImage("bone.png");
}

function setup(){
    createCanvas(500, 500);
    noStroke();

    foodX = random(50, width-50);
    foodY = random(50, height-150);
     ;

    if (random(1) > 0.5) {
	  xDir = random(-5,-1);
    }
    else {
	  xDir = random(1, 5);
    }
    if (random(1) > 0.5) {
	  yDir = random(-5,-1);
    }
    else {
      yDir = random(1, 5);
    }


    dogCurrent = dogRight;

    imageMode(CENTER);
}

function draw(){
    imageMode(CORNER);
    image(BGImage, 0, 0);
    fill(128);
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(width-10,0,10,height);

    fill(255);
    text("Score: " + score, 20, 25);
    text("Misses: " + misses, 20, 40);

    fill(255,0,0);
    rect(controllerX, height-10, 100, 10);

    imageMode(CENTER);
    image(foodImage, foodX, foodY);

    if (keyIsDown(65)){
        controllerX -= 2.5;
        controllerX = constrain(controllerX, 0, width-100);
    }
    else if (keyIsDown(68)){
        controllerX += 2.5;
        controllerX = constrain(controllerX, 0, width-100);
    }

    dogX += xDir;
    dogY += yDir;

    if(dogX > width-20){
        xDir *=-1;
        dogCurrent = dogLeft;
        sound.play();
    }

    if (dogX < 20){
        xDir *= -1;
        dogCurrent = dogRight;
        sound.play();
    }
    if (dogY < 20) {
        yDir *= -1;
        sound.play();
    }

    if (dogY > height-20 && dogX >= controllerX && dogX <= controllerX+50) {
        if (xDir > 0) {
            xDir *= -1;
            sound.play();
            }
        yDir *= -1;
        sound.play();
    }

    if (dogY > height-20 && dogX >= controllerX+50 && dogX <= controllerX+100) {
        if (xDir < 0) {
            xDir *= -1;
        }
    yDir *= -1;
    sound.play();
    }

    xDir = constrain(xDir, -10, 10);
    yDir = constrain(yDir, -10, 10);


     if (dogY > height) {
	  misses++;
	  dogX = 250;
	  dogY = 250;
	  if (random(1) > 0.5) {
		  xDir = random(-5,-1);
	  }
	  else {
		  xDir = random(1, 5);
	  }
	  if (random(1) > 0.5) {
		  yDir = random(-5,-1);
	  }
	  else {
		  yDir = random(1, 5);
	  }
    }

    if (dist(foodX, foodY, dogX, dogY) < 35) {
	  score++;
	  foodX = random(75, width-75);
	  foodY = random(75, height-200);
        yummy.play();
  }



    image(dogCurrent, dogX, dogY);
}
