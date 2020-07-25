var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1300,500);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(29,89);
  wall=createSprite(1200,100,thickness,height/2);
  wall.shapeColor=color(80,80,80)
  bullet=createSprite(10,50,5,5)
  bullet.velocityX=speed;
}

function draw() {
  background(0);

if (collided(bullet,wall)) 
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  
  if (damage<10) {
    wall.shapeColor="green"
  }
  if (damage>10) {
    wall.shapeColor="red"
  }
}
  drawSprites();
}

function collided(object1,object2)
{
  bulletRightEdge=object1.x+object1.width;
  wallLeftEdge=object2.x;
  if (bulletRightEdge>=wallLeftEdge)
  { return  true;
}else{
return false
}
}