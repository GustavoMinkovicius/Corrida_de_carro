var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var carro1,carro2,carro3,carro4
var form, player, game;


var cars, car1, car2, car3, car4;
var track, groundImg

function preload(){
  carro1 = loadImage("car1.png");
  carro2 = loadImage("car2.png");
  carro3 = loadImage("car3.png");
  carro4 = loadImage("car4.png");

  track = loadImage("track.jpg");
  groundImg = loadImage("ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
    
  }
}
