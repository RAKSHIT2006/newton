
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var ground;

function preload()
{
	
}

function setup() {
canvas = createCanvas( 1200,20 );
engine = Engine.create();
world = engine.world;




  pendulum1 = new Pendulum (600,350,50,50);
  pendulum2 = new Pendulum (550,300,50,50);
  pendulum3 = new Pendulum (500,250,50,50);
  pendulum4 = new Pendulum (450,200,50,50);
  pendulum5 = new Pendulum (400,150,50,50);
   
  Ground = new Ground(600,height,1200,20)
   
  sling = new Sling (pendulum1.body,{x:400,y:50})
}




Engine.run(engine);
  



function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  
  drawSprites();
 
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  Ground.display();
  sling.display();
}



