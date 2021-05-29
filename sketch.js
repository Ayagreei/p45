const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var man, score = 0, manWalk, manWalkFaster, manJog, manRuning, manRuningFast, manSprint, 
manJump, manFight, manStand, white, ob, ob1, ob2, ob3, ob4, ob5, obGroup;
function preload()
{
	manWalk = loadImage("walk.gif");
	manWalkFaster = loadImage("walkFast.gif");
	manJog = loadImage("jog.gif");
	manRuning = loadImage("run.gif");
	manRuningFast = loadImage("runningFast.gif");
	manSprint = loadImage("sprint.gif");
	manJump = loadImage("obstical.gif");
	manFight = loadImage("ninjaFight.gif");
	manStand = loadImage("stand.png");
	white = loadImage("white.jpg");
	ob1 = loadImage("katana.png");
	ob2 = loadImage("khakuni.png");
	ob3 = loadImage("knigh.png");
	//ob4 = loadImage("ninjaStar.png");
	ob5 = loadImage("sword.png");
	obGroup = new Group();
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	man = createSprite(600,350,10,10)
	man.addImage(manWalk)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(white);
  if (keyIsDown(UP_ARROW)){
	  score ++
  }
  if(score > 100 && score < 500)
  {
	score ++
	man.addImage(manWalkFaster);

  }

  if(score > 500 && score < 1500)
  {
	score = score + 2;
	man.addImage(manJog);

  }

  if(score > 1500 && score < 2400)
  {
	score = score + 3;
	man.addImage(manRuning);

  }

  if(score > 2400 && score < 2900)
  {
	score = score + 4;
	man.addImage(manRuningFast);

  }

  if(score > 2900 && score < 3900)
  {
	score = score + 5;	
	man.addImage(manSprint);
  
  }

  if(score > 3900 && score < 5100)
  {
	score = score + 6;
	man.addImage(manJump);
	  
  }

  if(score > 5100 && score < 7900)
  {
	score = score + 7;	 
	man.addImage(manFight);
 
  }

  if(score > 8750)
  {
	  score = score + 0;
	fill(0);
	textSize(33);
	text("YOU WON !!!!!!!!!!!",200,400);
	text("Press DOWN ARROW to restart",200,600);
	man.addImage(manStand);
	if(keyIsDown(DOWN_ARROW)){
		score = 0;
		man.addImage(manWalk)
	}
  }

  drawSprites();
  fill(0);
  textSize(33);
  text("Press up arrow to start to build stamina for ninja fight !!!!",200,100);
  textSize(23);
  text("Your score : " + score,200,200)

}



