(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var COLOR = "black";
  var RADIUS = 50;

  var Bullet = Asteroids.Bullet = function(pos,vel){
    var shipSpeed = Math.sqrt((Math.pow(vel[0],2) + Math.pow(vel[1],2)))
    var bulletSpeed = 1.2 * shipSpeed;
    Asteroids.MovingObject.call(this, pos, [bulletSpeed * vel[0], bulletSpeed * vel[1]], RADIUS, COLOR);
  }

  Bullet.inherits(Asteroids.MovingObject);

  Bullet.prototype.hitAsteroids = function (asteroids) {
    var that = this;
    var hitAsteroid = false;
    asteroids.forEach (function (asteroid) {
      if (asteroid.isCollidedWith(that)) {
        hitAsteroid = asteroid;
      }
    })

    return hitAsteroid;
  }


})(this);