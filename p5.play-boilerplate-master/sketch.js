var dungeonImg,dungeon;
var blob;
var obj;
var mp = 100;
var d = new Date();
var n = d.getSeconds();
var movN = 3;
var movN2 = -3; 
var spriteSheet, spriteData;
var anim = [];
var hp = 200;
var thp = 200;
var enemy;
var blobGroup;
var ball;



function preload(){
  dungeonImg = loadImage("images/cave_preview_1.png");
}

function setup() {
  createCanvas(displayWidth - 50,displayHeight - 105);
  //dungeon = createSprite(displayWidth/2,displayHeight/2);
  //dungeon.addImage(dungeonImg);

  obj = createSprite(displayWidth/2, displayHeight/2, 50,50); 

  enemy = createSprite(displayWidth/4, displayHeight/2, 100,100);

  blobGroup = new Group();
  ball = createSprite(displayWidth/2, displayHeight/2, 50,50)
  blob = new Blob(obj.x,obj.y);
}



function draw() {
  background("white"); 

  text("magic points:" + mp, 200, 200);
  //ball.setVelocity(-3,0);
  
  /*obj.velocityX = 0;
  obj.velocityY = 0;*/
  /*for(var i=0;i<8;i++){
    blob[i] = new Blob(obj.x,obj.y);
  }*/
  


  if(mp > 20){
    if(mouseWentDown("leftButton")){
      /*blob[0].move1();
      blob[1].move2();
      blob[2].move3();
      blob[3].move4();
      blob[4].move5();
      blob[5].move6();
      blob[6].move7();
      blob[7].move8();*/
      blob.move6();
      mp = mp - 20;
      /*for(var i = 0; i<8 ; i++){
        blob[i].display();
        }*/
    }
  }
 /* else{
    console.log("not enogh mp");
  }*/

  if(mp < 100){
    if(Math.round(second()) % 10 === 0){
      mp = mp + 1
      console.log(mp);
    }
   else{
    mp = 100;
   }
  }
  /*if(mp > 100){
    mp = 100;
  }*/

  
/*for(var i; i<8; i++){
  /*if(blobGroup.isTouching(enemy)){
    blob.destroy();
    hp = hp - 10;
    console.log("works!");
  }*/
  /*if(blob[1].isTouching(enemy)){
    blob.destroy();
    hp = hp - 10;
    console.log("works!");
  }
  if(blob[2].isTouching(enemy)){
    blob.destroy();
    hp = hp - 10;
    console.log("works!");
  }
  if(blob[3].isTouching(enemy)){
    blob.destroy();
    hp = hp - 10;
    console.log("works!");
  }
  if(blob[4].isTouching(enemy)){
    blob.destroy();
    hp = hp - 10;
    console.log("works!");
  }*/

  /*if(blob[6].isTouching(enemy)){
    blob.destroy();
    hp = hp - 10;
    console.log("works!");
  }
  if(blob[7].isTouching(enemy)){
    blob.destroy();
    hp = hp - 10;
    console.log("works!");
  }*/
//}

/*if(enemy.isTouching(ball)){
  ball.destroy();
  hp = hp - 10;
}*/

if(enemy.isTouching(blob)){
  blob.destroy();
  hp = hp - 10;
}
  
  
  //blob.damage();
  blob.display();
  drawSprites();
  
}

