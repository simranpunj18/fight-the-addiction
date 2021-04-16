var MinMin;
var ground, invisibleGround, groundImage;
var score = 0;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5;
var productivityGroup,productivity1,productivity2,productivty3,productivity4,productivity5;

function preload(){
 MinMin_Img = loadImage("emoji.png");
 ground_Img = loadImage("ground.png");
 
obstacle1 = loadImage("Snapchat.png");
obstacle2 = loadImage("tiktok.png");
obstacle3 = loadImage("youtube.png");
obstacle4 = loadImage("instagram.png");
obstacle5 = loadImage("twitter.png");

productivity1 = loadImage("books.png"); 
productivity2 = loadImage("Chores.png"); 
productivity3 = loadImage("Drawing.jpeg");
productivity4 = loadImage("workout.jpeg"); 
productivity5 = loadImage("vlearning.jpg");
}

function setup() {
  createCanvas(700,600);
  
  MinMin = createSprite(40,400,50,50);
  MinMin.addImage("MinMin",MinMin_Img);
  MinMin.scale = 0.5;
  
  ground = createSprite(200,500,400,20);
  ground.addImage("ground",ground_Img);
  ground.x = ground.width/2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,450,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)

  obstaclesGroup = new Group(); 
  productivityGroup = new Group();
}

function draw() {
  background("skyBlue");

  MinMin.depth = ground.depth;
  MinMin.depth = ground.depth + 1;

  if(keyDown("space") && MinMin.y >= 159) {
    MinMin.velocityY = -12;
  }
  MinMin.velocityY = MinMin.velocityY + 0.8;
  MinMin.collide(invisibleGround);
  
  if (ground.x < 200){
    ground.x = ground.width/2;
  }
  spawnObstacles();
  spawnProductivity();
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(500,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function spawnProductivity() {
  if(frameCount % 70 === 0) {
    var productivity = createSprite(700,165,10,40);
    //obstacles.debug = true;
    productivity.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: productivity.addImage(productivity1);
              break;
      case 2: productivity.addImage(productivity2);
              break;
      case 3: productivity.addImage(productivity3);
              break;
      case 4: productivity.addImage(productivity4);
              break;
      case 5: productivity.addImage(productivity5);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    productivity.scale = 0.1;
    productivity.lifetime = 300;
    //add each obstacle to the group
    productivityGroup.add(productivity);
  }
}