const Engine = Matter.Engine;
const World = Matter . World;
const Bodies = Matter.Bodies;
var ground1;
var engine, world;
var box1;
var box2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(250,200,100,100);
  box2=new Box(180,100,100,100);
  
 

  // var object_options = {restitution:1.0 } 

  //object = Bodies.circle(200, 200, 50, 50, object_options);
   //World.add (world, object);

  

  
   
  ground1 = new ground(200,350,400,10);
   

  console.log(box1);
}

function draw() {
  background("black");  

  Engine.update(engine);


 
  box1.display();
  box2.display();
  ground1.display();
  // circleMode(RADIUS);
  //ellipseMode(RADIUS);
  //ellipse(object.position.x , object.position.y , 30,30);

 //rect(200,200,50,50);
  //drawSprites();
}






