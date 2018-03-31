var moles = [];
var up, down;

var begin = false;
var startImage;

var hammerUp, hammerDown;

var baby, babySong;

var score = 0;

var misses = 0;

function preload() {
  up = loadImage("images/biber.png");
  down = loadImage("images/ball.png");
   
    hammerUp = loadImage("images/hammerup.png");
  hammerDown = loadImage("images/hammerdown.png");
    
     startImage = loadImage("images/start.png");
    
    baby = loadSound("images/baby2.mp3");
    babySong = loadSound("images/babySong.mp3");
    
}

function setup() {
  createCanvas(500,500);
//    var theCanvas = createCanvas(500, 500);
//  theCanvas.position(150, 980);
//    theCanvas.style('z-index', '-1');
    
    noStroke();
    
    moles[0] = new Mole(100,250);
    moles[1] = new Mole(250,250);
    moles[2] = new Mole(400,250);
    
    moles[3] = new Mole(100,100);
    moles[4] = new Mole(250,100);
    moles[5] = new Mole(400,100);
    
    moles[6] = new Mole(100,400);
    moles[7] = new Mole(250,400);
    moles[8] = new Mole(400,400);

    babySong.play();
    
}

function draw() {
    
    if (begin == false) {
		image(startImage,0,0);
		if (mouseIsPressed) {
			begin = true;
		}
	}

	else if (begin==true) {
    
    background(0);
    
    fill(255);
    text("Score: " + score, 20, 25);
    text("Misses: " + misses, 20, 40);
    
    
     
    
    for(var i = 0; i < moles.length; i++) {
        moles[i].display();
    }
    
    
    if(mouseIsPressed){
        image(hammerDown, mouseX, mouseY);
        
    } 
    else{
        image(hammerUp, mouseX, mouseY);
    }
        
    }
}

class Mole {
    
    constructor(x,y){
        
    this.xPos = x;
    this.yPos = y;
        
    this.state = 0;
        
    this.framesToStayInState = int(random(100, 200));
        
    this.framesInState = 0;
    }
    
    checkHit() {
        var distance = dist(this.xPos, this.yPos, mouseX, mouseY);
        if (distance < 60){
            if(this.state == 1){
                score += 1;
                
                this.state = 0;
                
                 this.framesInState = 0;

                this.framesToStayInState = int(random(100,200));
                
                baby.play();
            } else {
                 misses += 1;
                
            }
        }
    }
    
     display() {
        imageMode(CENTER);
        if (this.state == 0) {
          image(down, this.xPos, this.yPos);
        }
        else {
          image(up, this.xPos, this.yPos);
        }
         
        this.framesInState += 1;

        // should we move into the next state?
        if (this.framesInState >= this.framesToStayInState) {
          // time to switch!
          if (this.state == 0) {
            this.state = 1;
          }
          else {
            this.state = 0;
          }

          // reset time in state
          this.framesInState = 0;

          // pick a new amount of time to stay in this new state
          this.framesToStayInState = int(random(100,200));
        }
       


     }
}

 function mousePressed() {
     for(var i = 0; i < moles.length; i++) {
        moles[i].checkHit();
    }
}









