var fixedRect,movingRect;


function setup() {
  createCanvas(800,800);
  fixedRect =  createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "red";

  movingRect = createSprite(200, 200, 80, 50);
  movingRect.shapeColor = "blue";
}

function draw() {
  background("lightblue");  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "yellow";
    movingRect.shapeColor = "green";
  }
  else{ 
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "blue";
  }

  drawSprites();
}