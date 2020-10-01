var wall,bullet;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  weight = random(30,52);
speed = random(223,321);
thickness=random(22,83);
 
  bullet = createSprite(50, 200, 20, 10);
 bullet.shapeColor = "white";

 wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  else
  {
    return false;
  }
}
function draw() {
  background("gray");  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }

  }
  
  drawSprites();
  
}
