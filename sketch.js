//Namespacing for Matter.Engine,Matter.World,Matter.Bodies.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//Creates variables for Engine and World.
var engine,world;

function setup() {
  //Create the canvas.
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

  //Creates planets and sun.
  earth = new Earth(650,400,125);
  jupiter = new Jupiter(1100,400,150);
  sun = new Sun(0,400,250);
}
function draw() {
  //Changes and creates the background.
  background(0);

  //Updates the engine.
  Engine.update(engine);

  //Displays planets and sun.
  earth.display();
  jupiter.display();
  sun.display();

  //Increases the sun's size
  if(frameCount%50===0){
    sun.radius = sun.radius + 300;
  }
  //Decreases the sun's size after it destroys jupiter.
  if(sun.radius > 2500){
    sun.radius = 250;
  } 
}