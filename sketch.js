var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var Spaceships, Spaceship1, Spaceship2, Spaceship3, Spaceship4;
var Spaceship1Img, Spaceship2Img, Spaceship3Img, Spaceship4Img, SpaceImg, MeteoriteImg;

function preload(){
  Spaceship1Img = loadImage("/images/Spaceship1.jpg");
  SpaceshipImg = loadImage("/images/Spaceship2.jpg");
  SpaceshipImg = loadImage("/images/Spaceship3.jpg");
  SpaceshipImg = loadImage("/images/Spaceship4.jpg");
  MeteoriteImg = loadImage("/images/Meteorite.png");
  SpaceImg = loadImage("/images/Space.jpg");
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
