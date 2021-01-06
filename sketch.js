const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var division1, division2, division3, division4, division5, division6, division7;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 795, 480, 10);

  Engine.run(engine);
}

var divisions = [];
var plinkos = [];
var particles = [];

var divisionHeight = 300;

function draw() {
  background(0);  
  Engine.update(engine);

  for(var j = 40; j <=width; j = j + 50){
    plinkos.push(new Plinkos(j, 75));
  }
  for(var j = 15; j <=width - 10; j = j + 50){
    plinkos.push(new Plinkos(j, 175));
  }
  for(var j = -10; j <=width - 20; j = j + 50){
    plinkos.push(new Plinkos(j, 275));
  }
  for (var j = -35; j <=width - 10; j = j + 50){
    plinkos.push(new Plinkos(j, 375));
  }
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particles(random(width/2-10, width/2+10), 10, 10));
  }
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  ground.display();

  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
}