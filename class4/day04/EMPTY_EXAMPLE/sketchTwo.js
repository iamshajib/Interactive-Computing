var scene;
var flower1;

function preload(){
    scene = loadImage("images/scene.jpg");
    flowwer1 = loadImage("images/flower-1.png");
}

function setup(){
    createCanvas(800,600);
    background(128);

    image(scene,0,0,800,600);

}

function draw(){

}

function mouseIsPressed(){
    imageMode(CENTER);

    var chance=random(0,3);

    if(chance<1)
}
