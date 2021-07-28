var ship,ship_moving,edges;
var bgd;
function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
bgd = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  bground = createSprite(200,200);
  bground.addImage(bgd);
  bground.scale=0.5;
  bground.width = 100;
  bground.velocityX=-2;
  edges =  createEdgeSprites();
  ship1 = createSprite(100,210);
  ship1.addAnimation("moving",ship_moving);
  ship1.scale = 0.2;
}

function draw() {
  background("blue");
  if(bground.x <-100){
    bground.x = 200;
  }
  drawSprites();
}
