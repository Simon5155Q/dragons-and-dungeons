class Blob{
  constructor(x, y){
   this.blob=createSprite(x,y,10,10);
  this.x = x;
  this.y = y;
  //this.blobGroup.add(this.blob);
  
  }

  
   display(){
    fill("blue");
    
    ellipse(this.blob.x,this.blob.y,10,10)
   }
  
    move1(){
      this.blob.setVelocity(0,-3)
    }
    move2(){
      this.blob.setVelocity(2,-2)
    }
    move3(){
      this.blob.setVelocity(3,0)
    }
    move4(){
     this.blob.setVelocity(2,2)
    }
    move5(){
      this.blob.setVelocity(0,3)
    }
    move6(){
      this.blob.setVelocity(-3,0)
    }
    move7(){
      this.blob.setVelocity(-2,-2)
    }
    move8(){
      this.blob.setVelocity(-2,2)
    }

    //damage(){
      
   // }
  
    
  }

  