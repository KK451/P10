var ship;
var background;

// Preloading the ship and sea images
function preload(){

ship1 = loadImage("ship1.png");
sea1 = loadImage("sea2.png")

}


function setup(){

  createCanvas(400,400);

  // creating the sea sprite, giving it the sea1 image and setting the scale
  sea = createSprite(200,200);
  sea.addImage(sea1)
  sea.scale = 0.3;

  // creating the ship sprite, giving it the ship1 image and setting the scale
  ship = createSprite(200,200)
  ship.addImage(ship1);
  ship.scale = 0.25;
 
}

function draw() {

  // having the sea move backwards so it looks like the ship is moving forwards
  sea.velocityX = -3

  // When the sea has reached the end of its image, it sets the x position of the image to the start
  if(sea.x < -600){
    sea.position.x = 900;
    }

  drawSprites();
}