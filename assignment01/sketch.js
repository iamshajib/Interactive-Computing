function setup() {

  createCanvas(window.innerWidth, window.innerHeight);

  background(255);
}

function draw(){

    stroke(0);

    //Alien Ship & Alien

    fill("#585858");
    ellipse(1000, 200, 350, 100);//body
    fill("#01DFA5");
    ellipse(1000, 130, 120, 110);//head

    noStroke();
    fill("#FE2E2E");
    ellipse(1000,145, 40, 80);//figure
    fill("#585858");;
    ellipse(1000,100, 40, 40);//head
    fill("#FE2E2E");
    ellipse(981, 95, 12, 25);//left eye
    ellipse(1020,95, 12, 25);//right eye

    stroke(0);
    fill("#FE2E2E");
    ellipse(900,200,20,20);
    ellipse(1000,220,20,20);
    ellipse(1100,200,20,20);

    triangle(900, 241, 890, 300, 930, 246);
    triangle(1060, 247, 1090, 300, 1090, 243);

    //city

    noStroke();

    fill(99,129,65);
    rect(50, 700, 700, 40);


    fill(156,183,206);
    rect(70, 580, 70, 120);
    rect(80, 560, 50, 20);//building 1

    fill(156,183,206);
    rect(310, 500, 90, 200);//building 4

    fill(119,153,197);
    rect(230, 560, 90, 140);
    rect(243, 540, 65, 20);//building 3

    fill(141,156,164);
    rect(130, 610, 120, 90);//building 2
    fill(85,87,83);
    rect(135, 615, 110,5);
    rect(135, 625, 110,5);
    rect(135, 635, 110,5);
    rect(135, 645, 110,5);
    rect(135, 655, 110,5);
    rect(135, 665, 110,5);
    rect(135, 675, 110,5);
    rect(135, 685, 110,5);
    rect(135, 695, 110,5);




    fill(188,192,178);
    rect(420, 530, 90, 170);//building 5
    rect(435, 460, 60, 70);//top1
    rect(445, 400, 40, 70);//top2
    fill(149,153,136);
    rect(380, 600, 40, 100);//left
    rect(400, 570, 20, 30);//left top
    fill(149,153,136);
    rect(510, 600, 40, 100);//right
    rect(510, 570, 20, 30);//right top

    fill(134,149,156);
    rect(650, 540, 80, 160);
    rect(710, 450, 5, 80);
    rect(700, 460, 5, 70);
    rect(658, 520, 65, 20);//building 7
    fill(85,87,83);
    rect(670, 560, 5, 140);
    rect(690, 560, 5, 140);
    rect(710, 560, 5, 140);


    fill(82,153,162);
    rect(550, 610, 110, 90);//building 6
    fill(20,35,62);
    rect(555,620,100,5);
    rect(555,630,100,5);
    rect(555,640,100,5);
    rect(555,650,100,5);
    rect(555,660,100,5);
    rect(555,670,100,5);
    rect(555,680,100,5);
    rect(555,690,100,5);


}
