var garden,rabbit,apple,orangeL,redL,grass;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg,grassImg


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  grassImg = loadImage("grass.png")
}


function setup(){
  
  createCanvas(400,400);


console.log("")
garden=createSprite(200,200);
garden.addImage(gardenImg);
grass = createSprite(50,320,30,30)
grass.addImage(grassImg)
grass.scale = 0.2


rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   
  

var select_sprites = Math.round(random(1,3));

  
   if (frameCount % 50 === 0) {
    text("Press mouse to start! ", 150,200)
    if(mousePressed()){
      if (select_sprites == 1) {
        createApples();
    } else if (select_sprites == 2) {
      createOrangeLeaf();
   }else {
     createRedLeaf();
   }
  }
 }

 
  


}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
if (rabbit.isTouching(apple)){
  text("Game over! ", 150,200)
  orangeL.velocityY = 0
  redL.velocityY = 0
  apple.velocity = 0
}

  
}

function createOrangeLeaf() {
  if (rabbit.isTouching(orangeL)){
    text("Game over! ", 150,200)
    orangeL.velocityY = 0
    redL.velocityY = 0
    apple.velocity = 0
  }

orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRedLeaf() {

  if (rabbit.isTouching(redL)){
    text("Game over! ", 150,200)
    orangeL.velocityY = 0
    redL.velocityY = 0
    apple.velocity = 0
  }

  redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
