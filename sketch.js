const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine , myWorld , ground,ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  
  myWorld = myEngine.world;

  var groundOptions ={

    isStatic : true

  }

  ground = Bodies.rectangle(200,380,400,10 ,groundOptions);
  World.add(myWorld, ground);
  console.log(ground);
 
 var ballOptions={

  restitution:1
 } 

 ball=Bodies.circle(200,200,25,ballOptions);
 World.add(myWorld,ball);

}

function draw() {
  background(0,0,0); 
  rectMode(CENTER);
  rect(200,200,50,50);
 rect(ground.position.x , ground.position.y , 400,10);
circle(ball.position.x,ball.position.y,25);
 
Engine.update(myEngine);



}