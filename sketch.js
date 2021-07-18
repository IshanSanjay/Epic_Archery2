const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,playerbase;
var computer,computerbase;
var arrow;



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerbase = new PlayerBase(300,random(450,height -300),180,150);
   computerbase = new ComputerBase(1100,random(450,height -300),180,150);
   playerarcher = new PlayerArcher(340,playerbase.body.position.y-180,120,120);
   computerarcher = new ComputerArcher(width-340,computerbase.body.position.y-180,120,120);
   arrow = new PlayerArrow(playerarcher.body.position.x,playerarcher.body.position.y,100,10)

   player = new Player(285,playerbase.body.position.y -153,50,180);
   computer = new Computer(1085,computerbase.body.position.y -153,50,180)


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
   playerbase.display();
   computerbase.display();


   //display Player and computerplayer
   player.display();
   computer.display();
   playerarcher.display();
   computerarcher.display();
   arrow.display();

   if(keyCode === 32){
     arrow.shoot(playerarcher.body.angle)
   }


}
