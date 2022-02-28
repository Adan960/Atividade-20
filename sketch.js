
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restituctio:0.3,
		density: 1.2
	}

	ball = Bodies.circle(200,200,20, ball_options);
	World.add(world,ball);

	groundObj = createSprite(width/2,670,width,20);
	leftSide = createSprite(500,600,20,120);
	rightSide = createSprite(700,600,20,120);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  ellipse(ball.position.x,ball.position.y,30);


  
  
  drawSprites();
 
}
function xforce(){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }
  function yforce(){

	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
  }
  function keyPressed() {
	  if (Keycode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	  }
	  
  }


