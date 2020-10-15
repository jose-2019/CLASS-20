var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(200, 300, 50, 50);
  movingRect=createSprite(400, 300, 50, 50);

  fixedRect.debug=true;
  movingRect.debug=true;

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  fixedRect.velocityX=2;
  movingRect.velocityX=-2;
}

function draw() { 
  background(0);  

  //to move the moving rect with mouse
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;

  console.log(movingRect.x-fixedRect.x);

  //collision algorithm
  if(movingRect.x-fixedRect.x <= movingRect.width/2 +  fixedRect.width/2 &&
     fixedRect.x-movingRect.x <= movingRect.width/2 +  fixedRect.width/2 &&
     movingRect.y-fixedRect.y <= movingRect.height/2 +  fixedRect.height/2 &&
     fixedRect.y-movingRect.y <= movingRect.height/2 +  fixedRect.height/2
    ){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }else {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }



  //bounceOff algorithm
  if(movingRect.x-fixedRect.x <= movingRect.width/2 +  fixedRect.width/2 &&
    fixedRect.x-movingRect.x <= movingRect.width/2 +  fixedRect.width/2){
      movingRect.velocityX= (-1) * movingRect.velocityX;
      fixedRect.velocityX= (-1) * fixedRect.velocityX;
    }
    if(movingRect.y-fixedRect.y <= movingRect.height/2 +  fixedRect.height/2 &&
      fixedRect.y-movingRect.y <= movingRect.height/2 +  fixedRect.height/2){
        movingRect.velocityY= (-1) * movingRect.velocityY;
        fixedRect.velocityY= (-1) * fixedRect.velocityY;
      }
  drawSprites();
}