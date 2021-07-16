class Game {
  constructor(){}
  
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
      var playerCountRef = await database.ref("playerCount").once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }     
      form = new Form()
      form.display();    
    }




  plrc = [];
  }

    play(){
    background("black");
    //image(, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
   form.hide();
   text("Gamestart", 120, 100);
   Player.getPlayerInfo();



 drawSprites();
   }


  
  end(){
    console.log("game ended");

  }
}


