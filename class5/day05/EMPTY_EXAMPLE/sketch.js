var x=250;
var y=250;
function preload() {

}

function setup() {
    createCanvas(500,500);
    background(128);

}

function draw() {
    background(128);

console.log(keyCode);

if(keyIsDown (65)){
    x-=5;
}

ellipse(x,y,25,25);
}
