// setup function - used for commands that need to run only once
var x=100;
var y=150;

var xDir=1;
var yDir=3;

//keep color of teh color
var r = 0;
var g = 0;
var b = 0;

//variable to keep track of the art work
var chicken;

//preload function
function preload(){
    chicken = loadImage("images/chicken.png");
}

function setup()
{

    createCanvas(800,600);
    background(128);
}

// draw function - used for commands that need to be repeated
function draw()
{
    //erase the background
    background(128);

    //see if we need to bounch off the bottom of the screen
    if (y >= height-50 || y <= 0){
        yDir *=-1;
        r = random(0,255);
        g = random(0,255);
        b = random(0,255);
    }
    //bounching left and the right
    if (x >= width-50 || x <= 0){
        xDir *= -1;
    }

    fill(r,g,b);

    image(chicken,x,y,50,50);

    rect(x,y,50,50);

    //update position of the box

    x +=xDir;
    y +=yDir;

}
