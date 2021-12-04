var box, donut;



function preload(){
  donut=loadImage("Untitled-1.png");
}


function setup() {
  createCanvas(2450 ,1350);
  background(51);
  box = createSprite(200,200,30,30);
  box.velocityX=3
  box.velocityY=2
  box.addImage(donut);
  box.scale=0.1;
}

function draw() 
{
  background("pink");
  Edges=createEdgeSprites();
  box.bounceOff(Edges)


  if (keyIsDown(RIGHT_ARROW)){
    background("lightyellow");
  }
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("lightgray");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("brown");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("lightblue");
  }


  
  drawSprites();
}

