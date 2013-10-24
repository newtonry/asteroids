(function (root){

  var Asteroids = root.Asteriods = (root.Asteroids || {});

  var COLOR = "red"
  var RADIUS = 25

  var Ship = Asteroids.Ship = function (pos) {
    Asteroids.MovingObject.call(this, pos, [0,0], RADIUS, COLOR);
  }

  Ship.inherits(Asteroids.MovingObject);


  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  Ship.prototype.fireBullet = function() {
    if (!((this.vel[0] === 0) && (this.vel[1] === 0))) {
      var bullet = new Asteroids.Bullet(this.pos, this.vel);

    return (bullet);
   }
  }






})(this)