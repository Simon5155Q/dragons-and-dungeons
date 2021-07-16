class Char{
constructor (animation, x, y, speed){
  this.x = x;
  this.y = y;
  this.animation = animation;
  this.w = this.anim[0].width;
  this.len = this.animation.length;
  this.speed = speed;
  this.index = 0;

 }
 display() {
  var index = floor(this.index) % this.len;
  image(this.animation[index], this.x, this.y);
} 
animate() {
  this.index += this.speed;
  this.x += this.speed * 15;

  if (this.x > width) {
    this.x = -this.w;
  }
}
}