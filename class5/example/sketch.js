//var _0xbed7=['CAd','crP','kam','rGP','yNh','vgO','spaceBackground.png','hHH','coin.png','boing.mp3','jOG','play','JFE','vvO','Score:\x20','Misses:\x20','Xfx','muU','kIF'];(function(a,c){var b=function(b){while(--b){a['push'](a['shift']());}};b(++c);}(_0xbed7,0x14b));var _0x7bed=function(a,c){a=a-0x0;var b=_0xbed7[a];return b;};var paddleX=0xc8;var paddleSpeed=0x2;var ballX=0xfa;var ballY=0xfa;var ballSpeedX=0x2;var ballSpeedY=1.5;var score=0x0;var misses=0x0;var starX,starY;var starImage;var bounceSpeedChange=1.1;var boingSound;var backgroundImage;function preload(){starImage=loadImage(_0x7bed('0x0'));boingSound=loadSound(_0x7bed('0x1'));backgroundImage=loadImage('spaceBackground.png');}function setup(){if('mEA'==='tke'){_0x224f25=_0x258eb5(-0x5,-0x1);}else{createCanvas(0x1f4,0x1f4);noStroke();starX=random(0x4b,width-0x4b);starY=random(0x4b,height-0xc8);if(random(0x1)>0.5){if(_0x7bed('0x2')!==_0x7bed('0x2')){_0x2f40e7*=-_0x29dfcb;boingSound[_0x7bed('0x3')]();}else{ballSpeedX=random(-0x5,-0x1);}}else{if('bMd'==='bMd'){ballSpeedX=random(0x1,0x5);}else{_0x3b888b*=-_0x550f91;}}if(random(0x1)>0.5){ballSpeedY=random(-0x5,-0x1);}else{ballSpeedY=random(0x1,0x5);}}}function draw(){if(_0x7bed('0x4')!==_0x7bed('0x5')){imageMode(CORNER);image(backgroundImage,0x0,0x0);fill(0x80);rect(0x0,0x0,width,0xa);rect(0x0,0x0,0xa,height);rect(width-0xa,0x0,0xa,height);text(_0x7bed('0x6')+score,0x14,0x19);text(_0x7bed('0x7')+misses,0x14,0x28);rect(paddleX,height-0xa,0x64,0xa);fill(random(0xff),random(0xff),random(0xff));ellipse(ballX,ballY,0x14,0x14);imageMode(CENTER);image(starImage,starX,starY);if(keyIsPressed&&key=='a'){if(_0x7bed('0x8')!==_0x7bed('0x8')){_0x5613ad+=_0x284244;_0x254232=_0x251375(_0x59d59d,0x0,_0x3444d8-0x64);}else{paddleX-=paddleSpeed;paddleX=constrain(paddleX,0x0,width-0x64);}}else if(keyIsPressed&&key=='d'){paddleX+=paddleSpeed;paddleX=constrain(paddleX,0x0,width-0x64);}ballX+=ballSpeedX;ballY+=ballSpeedY;if(ballX>width-0x14){ballSpeedX*=-bounceSpeedChange;boingSound['play']();}if(ballX<0x14){ballSpeedX*=-bounceSpeedChange;boingSound[_0x7bed('0x3')]();}if(ballY<0x14){if(_0x7bed('0x9')==='muU'){ballSpeedY*=-bounceSpeedChange;boingSound[_0x7bed('0x3')]();}else{if(_0x223791<0x0){_0x5e5f7a*=-_0x402ad7;}_0x3e3bc9*=-_0x2dd16d;boingSound[_0x7bed('0x3')]();}}if(ballY>height-0x14&&ballX>=paddleX&&ballX<=paddleX+0x32){if('PES'!==_0x7bed('0xa')){if(ballSpeedX>0x0){ballSpeedX*=-bounceSpeedChange;boingSound[_0x7bed('0x3')]();}ballSpeedY*=-bounceSpeedChange;boingSound[_0x7bed('0x3')]();}else{_0xd0fad=_0x41a186(0x1,0x5);}}if(ballY>height-0x14&&ballX>=paddleX+0x32&&ballX<=paddleX+0x64){if(_0x7bed('0xb')!==_0x7bed('0xb')){_0x33c1c8*=-_0x2de938;boingSound[_0x7bed('0x3')]();}else{if(ballSpeedX<0x0){if(_0x7bed('0xc')!==_0x7bed('0xc')){_0x4e715f=_0x1bf60b(0x1,0x5);}else{ballSpeedX*=-bounceSpeedChange;}}ballSpeedY*=-bounceSpeedChange;boingSound['play']();}}ballSpeedX=constrain(ballSpeedX,-0xa,0xa);ballSpeedY=constrain(ballSpeedY,-0xa,0xa);if(ballY>height){misses++;ballX=0xfa;ballY=0xfa;if(random(0x1)>0.5){if(_0x7bed('0xd')===_0x7bed('0xe')){_0x366bb9-=_0x2d7edc;_0xd071b7=_0x22d949(_0x1cf4cd,0x0,_0x34db7c-0x64);}else{ballSpeedX=random(-0x5,-0x1);}}else{if('yNh'===_0x7bed('0xf')){ballSpeedX=random(0x1,0x5);}else{_0x16d12e*=-_0x2e6a58;boingSound['play']();}}if(random(0x1)>0.5){if(_0x7bed('0x10')==='GgZ'){_0x1cca0c=_0x4c9457('coin.png');_0x3fa97b=_0x5f1aaf('boing.mp3');_0x126a1d=_0x55ca1d(_0x7bed('0x11'));}else{ballSpeedY=random(-0x5,-0x1);}}else{if(_0x7bed('0x12')!==_0x7bed('0x12')){_0x22047c=_0x44d633(-0x5,-0x1);}else{ballSpeedY=random(0x1,0x5);}}}if(dist(starX,starY,ballX,ballY)<0x19){score++;starX=random(0x4b,width-0x4b);starY=random(0x4b,height-0xc8);}}else{_0x5a5786*=-_0x228d71;boingSound[_0x7bed('0x3')]();}}


var paddleX = 200;
var paddleSpeed = 2;
var ballX = 250;
var ballY = 250;
var ballSpeedX = 2;
var ballSpeedY = 1.5;

var score = 0;
var misses = 0;

var starX, starY;
var starImage;

var bounceSpeedChange = 1.1;

var boingSound;

var backgroundImage;


function preload() {
  starImage = loadImage("coin.png");
  boingSound = loadSound("boing.mp3");
  backgroundImage = loadImage("spaceBackground.png");
}

// stuff in here happens once
function setup() {
  createCanvas(500, 500);
  noStroke();

  starX = random(75, width-75);
  starY = random(75, height-200);

  if (random(1) > 0.5) {
	  ballSpeedX = random(-5,-1);
  }
  else {
	  ballSpeedX = random(1, 5);
  }
  if (random(1) > 0.5) {
	  ballSpeedY = random(-5,-1);
  }
  else {
	  ballSpeedY = random(1, 5);
  }
}


// stuff in here happens all the time
function draw() {
  imageMode(CORNER);
  image(backgroundImage, 0, 0);
  fill(128);
  rect(0,0,width,10);
  rect(0,0,10,height);
  rect(width-10,0,10,height);

  text("Score: " + score, 20, 25);
  text("Misses: " + misses, 20, 40);

  rect(paddleX, height-10, 100, 10);

  fill(random(255), random(255), random(255));
  ellipse(ballX, ballY, 20, 20);

  imageMode(CENTER);
  image(starImage, starX, starY);

  if (keyIsPressed && key == 'a') {
    paddleX -= paddleSpeed;
    paddleX = constrain(paddleX, 0, width-100);
  }
  else if (keyIsPressed && key == 'd') {
    paddleX += paddleSpeed;
    paddleX = constrain(paddleX, 0, width-100);
  }

  ballX += ballSpeedX;
  ballY += ballSpeedY;
  if (ballX > width-20) {
    ballSpeedX *= -bounceSpeedChange;
    boingSound.play();
  }
  if (ballX < 20) {
    ballSpeedX *= -bounceSpeedChange;
    boingSound.play();
  }
  if (ballY < 20) {
    ballSpeedY *= -bounceSpeedChange;
    boingSound.play();
  }
  if (ballY > height-20 && ballX >= paddleX && ballX <= paddleX+50) {
    if (ballSpeedX > 0) {
      ballSpeedX *= -bounceSpeedChange;
    boingSound.play();
    }
    ballSpeedY *= -bounceSpeedChange;
    boingSound.play();
  }
  if (ballY > height-20 && ballX >= paddleX+50 && ballX <= paddleX+100) {
    if (ballSpeedX < 0) {
      ballSpeedX *= -bounceSpeedChange;
    }
    ballSpeedY *= -bounceSpeedChange;
    boingSound.play();
  }

  ballSpeedX = constrain(ballSpeedX, -10, 10);
  ballSpeedY = constrain(ballSpeedY, -10, 10);

  if (ballY > height) {
	  misses++;
	  ballX = 250;
	  ballY = 250;
	  if (random(1) > 0.5) {
		  ballSpeedX = random(-5,-1);
	  }
	  else {
		  ballSpeedX = random(1, 5);
	  }
	  if (random(1) > 0.5) {
		  ballSpeedY = random(-5,-1);
	  }
	  else {
		  ballSpeedY = random(1, 5);
	  }
  }

  if (dist(starX, starY, ballX, ballY) < 25) {
	  score++;
	  starX = random(75, width-75);
	  starY = random(75, height-200);
  }
}

