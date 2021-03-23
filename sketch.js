var monkey , monkey_running
var bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score;
var backgroundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  backgroundImage = loadImage("backg2.png");
}


function setup() {
  
monkey = createSprite(60, 307, 20, 20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.12;
  
ground = createSprite(400, 380, 900, 10);
ground.velocityX = -4;
ground.shapeColor = "green";
console.log(ground.x);
  
  
foodGroup = new Group();  
obstacleGroup = new Group();
  score = 0;
}


function draw() {
background(backgroundImage);
  
if(keyDown("space")){
  monkey.velocityY = -12;
}
  monkey.velocityY = monkey.velocityY + 0.8
  
  ground.x = ground.width/2;
  
  monkey.collide(ground);

  food();
  obstacles();
  
var survivalTime = 0;
  stroke("white");
  textSize(17);
  fill("white");
  textFont("lithos pro regular");
  text("Score: "+ score, 290, 60);
    
  stroke("red");
  textFont("lithos pro regular");
  textSize(25);
  fill("red");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SURVIVAL TIME: "+ survivalTime, 90, 35);
  
drawSprites();
}

function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,150,40,10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    foodGroup.add(banana);
  }
}


function obstacles() {
  if(frameCount % 100 === 0) {
    var obstacle = createSprite(300,355,10,40);
    obstacle.velocityX = -3;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}

// By - Anushka Chakraborty 