class Game {
  constructor(){
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    Spaceship1 = createSprite(100,200);
    Spaceship1.addImage("Spaceship1",Spaceship1Img);
    Spaceship2 = createSprite(300,200);
    Spaceship2.addImage("Spaceship2",Spaceship2Img);
    Spaceship3 = createSprite(500,200);
    Spaceship3.addImage("Spaceship3",Spaceship3Img);
    Spaceship4 = createSprite(700,200);
    Spaceship4.addImage("Spaceship4",Spaceship4Img);
    Spaceships = [Spaceship1, Spaceship2, Spaceship3, Spaceship4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    background(SpaceImg);
    image(trackImg, 0, -displayHeight * 4, displayWidth, displayHeight * 5);

    if(allPlayers !== undefined){
      //var display_position = 100;
      var index = 0;
      var x = 175;
      var y;

      for(var plr in allPlayers){
        index = index + 1 ;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 4000){
      gameState = 2;
    }
    drawSprites();
  }

  end(){
    console.log("Game Over");
  }
}
