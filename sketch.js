const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var cbase, pbase, player,comp

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
cbase = new CBase(windowWidth/4,windowHeight/2,200,100)
World.add(world, cbase)

pbase = new PBase(300,random(450,height-300),200,100)
World.add(world,cbase)

player = new Player(0,0,70,150)
World.add(world,player)

comp = new Play(0,0,70,150)
World.add(world,comp)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
cbase.show()
pbase.show()

   //display Player and computerplayer
   player.show()
   comp.show()

}
