var carLeft, carRight, carUp, carDown;

var theCar;

var wallPic;

var parking, borderW;

var theWall, theWall2, theWall3, theWall4, theWall5, theWall6, theWall7, theWall8;

var copL, copR, copC;

var copX = 250;
var copY = 250;

var xDir = 3;
var yDir = 3;

var theWalls = [];

function preload(){
    carLeft = loadImage("images/carLeft.png");
    carRight = loadImage("images/carRight.png");
    carUp = loadImage("images/carUp.png");
    carDown = loadImage("images/carDown.png");
    copR = loadImage("images/policeR.png");
    copL = loadImage("images/policeL.png");
    wallPic = loadImage("images/wall.png");
    parking = loadImage("images/parkingnew.png");
    borderW = loadImage("images/borderW.png");
    borderH = loadImage("images/borderH.png");
    //background = loadImage("images/background.jpg");
}

function setup() {
  createCanvas(1300, 700);


    theCar = new Car(250, 250);

    theWall = new Wall(180, 100);
    theWall2 = new Wall(300, 530);
    theWall3 = new Wall(90, 400);
    theWall4 = new Wall(500, 330);
    theWall5 = new Wall(700, 550);
    theWall6 = new Wall(600, 100);
    theWall7 = new Wall(900, 400);
    theWall8 = new Wall(900, 200);

    theWalls.push(theWall);
    theWalls.push(theWall2);
    theWalls.push(theWall3);
    theWalls.push(theWall4);
    theWalls.push(theWall5);
    theWalls.push(theWall6);
    theWalls.push(theWall7);
    theWalls.push(theWall8);

    copC = copL;
}

function draw() {

    //image(background, 0, 0);
    background(125, 125, 125);



    theCar.move();
    theCar.display();

    theWall.display();
    theWall2.display();
    theWall3.display();
    theWall4.display();
    theWall5.display();
    theWall6.display();
    theWall7.display();
    theWall8.display();

    image(parking, 1150, 15);
    image(borderW, 0, 0);
    image(borderW, 0, 685);
    image(borderH, 0, 0);

    //theWall.collide(theCar);


//    if (copL.overlap(theCar)) {
//        theCar.setSpeed(0, 0);
//        //policeCar.setSpeed(0, 0);
//        //alert("Game Over!");
//
//        textSize(90);
//        text("Game Over", 400, 300);
//        fill(0, 102, 153);
//
//    }




    copX += xDir;
    copY += yDir;


  // did the ghost bounce?
  if (copX > width-130) {
    xDir *= -1;
      copC= copR;
  }
  if (copX < 10) {
    xDir *= -1;
      copC = copL;

  }

  if (copY > height-90 || copY < 10) {
    yDir *= -1;

  }


    image(copC, copX, copY);
}




class Wall{
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.graphic = wallPic;
    }

    display() {
    image(this.graphic, this.x, this.y);
  }
}

class Car {

  constructor(startX, startY) {

    this.x = startX;
    this.y = startY;

    this.graphic = carRight;
  }

  display() {

    image(this.graphic, this.x, this.y);
  }


  move() {

    if (keyIsDown(65)) {
        // see if there is a wall to the left
        // assume there is not
        var wallLeft = false;
        for (var i = 0; i < theWalls.length; i++) {
            if (dist(this.x, this.y, theWalls[i].x, theWalls[i].y) < 95)
                {
                    wallLeft = true;
                }
            }

        // only move if there is no wall
        if (wallLeft == false) {
            this.x -= 2.5;
        }
        else {
            // no move
        }


      this.graphic = carLeft;
    }


    if (keyIsDown(68)) {
      var wallRight = false;
        for (var i = 0; i < theWalls.length; i++) {
            if (dist(this.x, this.y, theWalls[i].x, theWalls[i].y) < 95)
                {
                    wallRight = true;
                }
            }

        // only move if there is no wall
        if (wallRight == false) {
            this.x += 2.5;
        }
        else {
            // no move
        }


      this.graphic = carRight;
    }
    if (keyIsDown(87)) {

        var wallUp = false;
        for (var i = 0; i < theWalls.length; i++) {
            if (dist(this.x, this.y, theWalls[i].x, theWalls[i].y) < 65)
                {
                    wallUp = true;
                }
            }

        // only move if there is no wall
        if (wallUp == false) {
            this.y -= 2.5;
            }
        else {
            // no move
        }

      this.graphic = carUp;
    }


    if (keyIsDown(83)) {
         var wallDown = false;
        for (var i = 0; i < theWalls.length; i++) {
            if (dist(this.x, this.y, theWalls[i].x, theWalls[i].y) < 5)
                {
                    wallDown = true;
                }
            }

        // only move if there is no wall
        if (wallDown == false) {
            this.y += 2.5;
            }
        else {
            // no move
        }
      this.graphic = carDown;
    }


  }

}
