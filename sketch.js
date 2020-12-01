
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paper = new Paper(50,250, 20);
     World.add(world, paper);

     ground = new Ground(600,height,1200,20);

     side1 = new Dustbin(760,120,150,PI/7);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  side1.display();
  drawSprites();
 
}



