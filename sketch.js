var canvas, backgroundImage;
var gameState=0;


var contestantCount, database, form, contestant, game, allcontestants;

function setup(){
  canvas=createCanvas(400,400);
  database=firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(contestantCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}