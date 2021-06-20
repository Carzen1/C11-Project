var runner, runner_moving;
var road, road_image;
var ocean, ocean_image;
var boundary1, boundary2;



function preload(){
  //pre-load images
  runner_moving = loadAnimation("Runner-1.png", "Runner-2.png");
  
  ocean_image = loadImage("ocean.png");

  road_image = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  ocean = createSprite(200, 200);
  ocean.addImage("background", ocean_image);
  ocean.velocityY = 4;
  ocean.scale = 1.2;

  road = createSprite(200, 200);
  road.addImage("pathway", road_image);
  road.velocityY = 4;
  road.scale = 1.2;

  runner = createSprite(300, 300, 5, 5);
  runner.addAnimation("running", runner_moving);
  runner.scale = 0.1;

  boundary1 = createSprite(380, 200, 2, 400);
  boundary1.visible = false;
  boundary2 = createSprite(20, 200, 2, 400);
  boundary2.visible = false;

}

function draw() {
  background(0);
 
  if(keyWentDown("left") && runner.x >= 100) {
    runner.velocityX = -5;
  }

  if(keyWentDown("right") && runner.x >= 100) {
    runner.velocityX = 5;
  }

  if (road.y > 400) {
    road.y = height / 7;
  }
  
  if (ocean.y > 400) {
    ocean.y = height / 7;
  }

  runner.collide(boundary1);
  runner.collide(boundary2);

  drawSprites();
}
