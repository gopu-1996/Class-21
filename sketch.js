var fixedRect, movingRect,GO1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  GO1=createSprite(600,100,50,50);
  GO1.shapeColor="green";
  GO1.velocityY=4;
  fixedRect.velocityY=-4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (istouching(GO1,movingRect)) {
    movingRect.shapeColor = "red";
    GO1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    GO1.shapeColor = "green";
  }

  bounceoff(GO1,fixedRect);
  drawSprites();
}

function istouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

  return true;


}
else {
  
  return false;
}

}

function bounceoff(object1,object2){

  if(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){

      object1.velocityY=object1.velocityY*-1;
      object2.velocityY=object2.velocityY*-1;

    }




}