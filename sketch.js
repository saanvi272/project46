const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var board;


function preload(){
  board=loadImage("bg.jpeg");
}

function setup() {
  createCanvas(800,725);

  engine=Engine.create();
  world=engine.world;

  engine.world.gravity.y=0;

//item0=if dice is rolling
//item1=current number displayed
//item2=times dice will change
//item3=blinking time or not
//item4=blinking counter
  dice=[false,1,0,false,0];
  purple=new Purple(110,515,60,60);
   
 // golden=new Golden(110,515,60,60);


}

function draw() {
  background("white");  
  Engine.update(engine);

  image(board,0,0,800,600);

  purple.display();
 // golden.display();

 stroke("black");
 strokeWeight(8);
 line(0,600,800,600);

 

  if(dice[3]===false){
    drawDice(725,665,dice[1]);
  }
  else{
    if(dice[4]%2===0){
      drawDice(725,665,dice[1]);
    }
  }
  if(dice[0]===true&&dice[2]>0&&frameCount%5===0){
    dice[2]=dice[2]-1;
    dice[1]=dice[1]+1;
    if(dice[1]>6){
      dice[1]=1;
    }
    if(dice[2]===0){
      dice[3]=true;
      dice[4]=dice[1]*2;
    }
  }
}
function keyPressed(){
  if(keyCode===32&&dice[0]===false){
    dice[0]=true;
    dice[2]=Math.round(random(12,18));
  }
}

function drawDice(x,y,side){
  fill("white");
  strokeWeight(8);
  rectMode(CENTER);
  rect(x,y,100,100);

  fill("black");
  strokeWeight(3);

  if(side===1){
    circle(x,y,20);
  }
  else if(side===2){
    circle(x-25,y-25,20);
    circle(x+25,y+25,20);
  }
  else if(side===3){
    circle(x,y,20);
    circle(x-25,y-25,20);
    circle(x+25,y+25,20);
  }
  else if(side===4){
    circle(x-25,y-25,20);
    circle(x+25,y+25,20);
    circle(x+25,y-25,20);
    circle(x-25,y+25,20);
  }
  else if(side===5){
    circle(x-25,y-25,20);
    circle(x+25,y+25,20);
    circle(x+25,y-25,20);
    circle(x-25,y+25,20);
    circle(x,y,20);
  }
  else if(side===6){
    circle(x-25,y-25,20);
    circle(x+25,y+25,20);
    circle(x+25,y-25,20);
    circle(x-25,y+25,20);
    circle(x-25,y,20);
    circle(x+25,y,20);
  }
}




