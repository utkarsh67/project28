
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var groundobj,paperobj,dustbinobj;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	//rectMode(CENTER)
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundobj= new ground(width/2,670,width,20);
	paperobj= new paper(100,400,40,0);
	dustbinobj = new dustbin(1000,650);
	Slingshot = new SlingShot(paperobj.body,{x:100, y:400});

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(155);
  Engine.update(engine);
  
  
  groundobj.display();
  paperobj.display();
  dustbinobj.display();
  Slingshot.display();   
  

  drawSprites();
 
}


// function keyPressed() {
// 	if (keyCode === UP_ARROW) {
// 		//either modify friction/density or apply force parameters in sketch.js

// 	  Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:85,y:-85});
  
// 	}
// }


function mouseDragged(){
    Matter.Body.setPosition(paperobj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Slingshot.fly();
}
