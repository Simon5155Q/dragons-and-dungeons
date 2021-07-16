class Player {
  constructor(){
    this.index = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }



  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
    });
  }

  static getPlayerInfo(){
    var playerInfo = database.ref("players");
    playerInfo.on("value",(data)=>{
      allPlayers = data.val();
    })
    
  }
}
