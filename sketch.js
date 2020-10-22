var bullet, wall, thickness;

var speed, weight;



function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 50, 50);

  wall = createSprite(1200, 200, thickness, height/2);

speed = random(223, 321);
weight = random(30, 1500);
thickness = random(22, 83);
}


function draw() {
  background(0);  
 bullet.velocityX = speed;

 wall.shapeColor = color(80, 80, 80);

if (wall.x - bullet.x < (bullet.width + wall.width)/2) {
  bullet.velocityX = 0;
  var damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness) 

if(damage>10) {
   bullet.shapeColor = color(255,0, 0);   
}

if(damage<10) {
   bullet.shapeColor = color(0, 255, 0);
}

}

 drawSprites();
}

