var background, cube1, cube2, cube3, mouseE;
var score=0;

function preload(){
  redGroup= new Group();
  greenGroup=new Group();
  blueGroup=new Group();
}

function setup() {
  createCanvas(400, 400);
   score=0
   mouseE=createSprite(200,200,10,10);
   

}

function draw() {

  background("white");
  textSize(20);
  fill("black");
  text(score,200,20);
  text("CLEAN IT!",200,380);
  mouseE.x=World.mouseX;
  mouseE.y=World.mouseY;


  if(frameCount %15===0){
    cube1=createSprite(random(10,390), random(10,390),30,30);
    cube1.shapeColor="green";
    cube1.lifetime=30
    greenGroup.add(cube1);
  }
  if(frameCount %35===0){
    cube2=createSprite(random(10,390), random(10,390),30,30);
    cube2.shapeColor="blue";
    cube2.lifetime=30
    blueGroup.add(cube2);
  }
  if(frameCount %20===0){
    cube3=createSprite(random(10,390), random(10,390),30,30);
    cube3.shapeColor="red";
    cube3.lifetime=30
    redGroup.add(cube3);
  }

  if(mouseE.isTouching(greenGroup)){ 
    greenGroup.destroyEach();
    score=score+100
  }
  if(mouseE.isTouching(blueGroup)){ 
    blueGroup.destroyEach();
    score=score+200
  }
  if(mouseE.isTouching(redGroup)){ 
    score=score+300
    redGroup.destroyEach();
  }






  drawSprites()
}