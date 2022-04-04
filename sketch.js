var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var groundimg
var chaoinvisivel

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimg = loadImage ("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  //crie um sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
  
  //crie um sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage (groundimg)
 ground.velocityX = -5

 chaoinvisivel = createSprite(200, 198, 400, 10)
 chaoinvisivel.visible = false
}

function draw() {
  background(220);
 
  //pular quando a tecla espaço for pressionada
  
  if(keyDown("space")&& trex.y > 149) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  console.log(trex.y)

  if (ground.x < 0) {
    ground.x = ground.width/2
  }
  
 
 //impedir que o trex caia 
  trex.collide(chaoinvisivel);
  drawSprites();
}
