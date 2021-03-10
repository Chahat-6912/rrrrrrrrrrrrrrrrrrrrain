

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    backgroundImg = loadImage("images/rain1.jpg");
}

function setup(){
 
    var canvas = createCanvas(900,500);
    engine = Engine.create();
    world = engine.world;

    drop1 = new drop(200)

    
}

function draw(){
 
    background(backgroundImg);
    Engine.update(engine);

    
drop1.display();
   
}   

