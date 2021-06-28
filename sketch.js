var garden,rabbit;
var gardenImg,rabbitImg;
 var apple,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.jpg");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApples();
  drawSprites();
}

//function to spawn the apple
function spawnApples(){
  // write your code here 
  if (frameCount % 70===0){
  apple=createSprite(30,10,40,10);
  apple.addImage(appleImg);
  apple.x=Math.round(random(70,140));
  apple.velocityY=3;
  apple.scale=0.09;
  //cloud.lifetime=230;
  }
 }
 
 
 