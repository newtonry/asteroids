(function (root){
  var COLOR = "green";
  var RADIUS = 10;

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  function Asteroid(pos,vel) {
    Asteroids.MovingObject.call(this, pos, vel, RADIUS, COLOR)
  };

  Asteroid.inherits(Asteroids.MovingObject);

  var Aster = Asteroids.randomAsteroid = function(dimX, dimY) {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    var pos = [getRandomInt(0,1000), getRandomInt(0,1000)];
    var vel = [getRandomInt(-5,5), getRandomInt(-5,5)];
    return new Asteroid(pos, vel);
  }

})(this);