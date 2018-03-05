 var ballX;
var ballY;

var score = 0;

function setup() {
  createCanvas(800, 600);

  background(255);

    ballX = random(50,750);
    ballY = random(50,550);

}

function draw(){
    background(255);
    text("Your Score:" + score, 50,50);

    var d = dist(mouseX, mouseY, ballX, ballY);
    text("Your Distance:" + d, 50,75);

    if(d<25){
        score +=1;
        ballX = random(50,750);
        ballY = random(50,750);
    }

 ellipse(ballX,ballY, 50,50);
}
