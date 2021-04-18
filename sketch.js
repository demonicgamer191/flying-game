var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxp,boxy;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
boxp=width/2-100
boxy=600
boxlSprite=createSprite(boxp,boxy,20,100);
boxlSprite.shapeColor=color(255,0,0);
boxl=Bodies.rectangle(boxp+20,boxy,20,100,{isStatic:true})
World.add(world, boxl);


bSprite=createSprite(boxp+100,boxy+40,200,20);
bSprite.shapeColor=color(255,0,0);
b=Bodies.rectangle(boxp+100,boxy+25,200,20,{isStatic:true})
World.add(world, b);


rSprite=createSprite(boxp+200,boxy,20,100);
rSprite.shapeColor=color(255,0,0);
r=Bodies.rectangle(boxp+180,boxy,20,100,{isStatic:true})
World.add(world, r);


Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
    
  }
}



