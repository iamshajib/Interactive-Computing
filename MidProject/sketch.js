var background;




function preload() {
    background = loadImage("images/background.gif");
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    image(background, 0, 0);
}
