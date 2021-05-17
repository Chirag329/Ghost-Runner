var t1,tI,g,gI, gameState="play"
var doorI, door, doorG,cI, c, cG,iB,iB2

function preload(){
  tI=loadImage("tower.png")
  gI=loadImage("ghost-standing.png")
  doorI=loadImage("door.png")
  cI=loadImage("climber.png")
}

function setup(){
  createCanvas(600,600)
  
  t1=createSprite(300,300,10,10)
  t1.addImage(tI)
  t1.velocityY=1
  
  g=createSprite(300,300,10,10)
  g.addImage(gI)
  g.scale=0.3
  
  
  doorG = new Group()
    cG = new Group()
    iB2 = new Group()
  

}

function draw(){
  background("black")
  if(gameState==="play")
    {
      
    if(g.y>600 || g.isTouching(iB2))
      {
        gameState="end"
      }
      if(g.isTouching(cG))
        {
          g.velocityY=0
        }
  
  if(t1.y>600)
    {
      t1.y=300
    }
  if(keyDown("space")){
    g.velocityY=-10 
     }
  
  if(keyDown("right")){
    g.x+=2 
     }
  if(keyDown("left")){
g.x+=-2      }
  
  
  g.velocityY+=0.3
  
  sD()
  
  drawSprites()
    }
  if(gameState==="end")
    {
      fill("yellow")
      textSize(35)
      text("GAME OVER",200,300)
    }
}
function sD()
{
  if(frameCount % 200===0)
    {
      door = createSprite(Math.round(random(100,500)),-50,20,50)
      door.addImage(doorI)
      door.velocityY=1
      door.lifetime=600
      door.depth=g.depth
      g.depth+=1
      doorG.add(door)
      
      c = createSprite(door.x,door.y+60,20,50)
      c.addImage(cI)
      c.velocityY=1
      c.lifetime=600
      cG.add(c)
      
      iB = createSprite(door.x,door.y+70,c.width,5)
      iB.shapeColor="green"
      iB.velocityY=1
      iB.lifetime=600
      iB2.add(iB)
      
      
    }
}





