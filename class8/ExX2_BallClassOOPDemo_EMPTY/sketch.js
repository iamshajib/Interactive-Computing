var b1,b2,b3;

function setup() {
  createCanvas(500,500);

    b1 = new Ball(100,50);
    b2 = new Ball(250,250);
    b3 = new Ball(350,150);
}

function draw() {
  background(255);

    b1.move();
    b2.move();
    b3.move();

    b1.display();
    b2.display();
    b2.display();

    z
}

class Ball{

    constructor(startingX, startingY){

        this.X= startingX;
        this.Y=startingY;

        this.speedX=random(-3,3);
        this.speedY=random(-3,3);

        this.red=random(255);
        this.green=random(255);
        this.blue=random(255);

        this.radius=random(10,50);
    }

    display(){
        fill(this.red,this.green,this.blue);
        ellipse(this.X,this.Y,this.radius,this.radius);
    }

    move(){

        this.X +=this.speedX;
        this.Y +=this.speedY;

        if(this.X > width || this.X <0){
            this.speedX *=-1;

            this.red=random(255);
            this.green=random(255);
            this.blue=random(255);

            this.radius *=-10;
        }

        if(this.Y > height || this.Y <0){
            this.speedX *=-1;

            this.red=random(255);
            this.green=random(255);
            this.blue=random(255);

            this.radius *=-10;
        }
    }
}
