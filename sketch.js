
var fixrect,morect;
var ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 80);
morect=createSprite(200, 200, 50, 50);
fixrect.shapeColor="green";
morect.shapeColor="green";
ob1=createSprite(200,200,50,50);
ob2=createSprite(100,300,50,50);
ob3=createSprite(650,250,40,50);
ob4=createSprite(700,150,60,50);
ob1.shapeColor="white";
ob2.shapeColor="white";
ob3.shapeColor="white";
ob4.shapeColor="white";
ob3.velocityX=+2;
fixrect.velocityX=-2;
}

function draw() {
  background(0);  
morect.x=mouseX;
morect.y=mouseY;

if(isTouching(ob2,morect)){
 ob2.shapeColor="red";
morect.shapeColor="red";
}
else{
  ob2.shapeColor="green";
morect.shapeColor="green";
}
bounceOff(ob3,fixrect)

  drawSprites();
}

