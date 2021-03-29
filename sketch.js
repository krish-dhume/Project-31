const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var ground,division;
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
    world = engine.world;
    

  ground=new Ground(600,height,1200,20);
  division=new Division(100,350,30,150);
  division1=new Division(200,250,180,30);
  division2=new Division(300,350,30,150);
  division3=new Division(400,250,180,30);
 division4=new Division(500,350,30,150);
 division5=new Division(600,350,180,30);
 division6=new Division(700,350,30,150);
  
}

function draw() {
  background(0,0,0); 
 Engine.update(engine);

  ground.display();
  division.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
}
