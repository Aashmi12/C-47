var bg, bgImg;
var bg1, bg1Img;
function preload(){
bgImg = loadImage("Background.jpg");
bg1Img = loadImage("bg.jpg");
}

function setup() {
  createCanvas(900,600);
  bg = createSprite(1000, 500, 50, 50);
  bg.addImage("background", bgImg);
  bg.scale = 1.5;

 
}

function draw() {
  background("black"); 
  if(keyDown("space"))
  {
    bg.destroy();

  bg1 = createSprite(500, 500, 50, 50);
  bg1.addImage("background", bg1Img);
  bg1.scale = 1.5;
  } 
  drawSprites();
}

