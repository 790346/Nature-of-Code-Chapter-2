function Mover(loc, vel, rad, clr, acc){
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.clr = clr;
  this.acc = acc;
}

Mover.prototype.update = function(){
  this.loc.add(this.vel);
  if(this.loc.x <= this.rad*2){
      this.vel.x *= -1;
  }
  if(this.loc.y <= this.rad*2){
      this.vel.y *= -1;
  }
  if(this.loc.x >= window.innerWidth - this.rad*2){
      this.vel.x *= -1;
  }
  if(this.loc.y >= window.innerHeight - this.rad*2){
      this.vel.y *= -1;
  }
  this.render();
}

Mover.prototype.render = function(){
  console.log(this);
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.arc(this.loc.x, this.loc.y, this.rad, Math.PI*2,0,false);
  ctx.stroke();
  ctx.fill();
}

Mover.prototype.applyForce = function(JSVector force){

}

//http://natureofcode.com/book/chapter-2-forces/
