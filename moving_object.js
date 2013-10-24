(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function (pos,vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }

  MovingObject.prototype.move = function () {
    x = this.pos[0] ; y = this.pos[1];
    velX = this.vel[0] ; velY = this.vel[1];
    this.pos = [(x + velX), (y + velY)];
  }

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;

    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0, 2 * Math.PI,
      false
    );

    ctx.fill();
  }

  MovingObject.prototype.isCollidedWith = function (otherObject) {
   dist = Math.sqrt(
     (Math.pow(otherObject.pos[0] - this.pos[0], 2) +
     Math.pow(otherObject.pos[1] - this.pos[1], 2)));
     // console.log(dist)
     // console.log((this.radius + otherObject.radius) > dist)
     // console.log(this.radius + otherObject.radius)
     return ((this.radius + otherObject.radius) > dist)
  }

})(this);

