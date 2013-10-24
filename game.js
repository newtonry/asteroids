(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var DIM_X = 1000; var DIM_Y = 1000;

  var Game = Asteroids.Game = function (ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    this.addAsteroids(10);
    this.ship = new Asteroids.Ship([DIM_X/2, DIM_Y/2]);
    this.bullets = [];

    this.img = new Image();
    this.img.onload = function () {
      this.ctx.drawImage(this.img, 0, 0);
    };
    this.img.src = 'background-edit.jpg';
  }

  Game.prototype.addAsteroids = function(num) {
    for (i = 0; i != num; i++) {
      this.asteroids.push (Asteroids.randomAsteroid(DIM_X, DIM_Y));
    }
  }

  Game.prototype.checkCollisions = function () {
    var that = this;
    this.asteroids.forEach (function (asteroid) {
      if (that.ship.isCollidedWith(asteroid)) {
        console.log("stoppped vbeing run")
      that.stop();
      }
    })
  }

  Game.prototype.draw = function() {
    var that = this
    this.ctx.clearRect(0,0, DIM_X, DIM_Y);
    this.ship.draw(that.ctx);
    this.asteroids.forEach (function (asteroid) {
      asteroid.draw(that.ctx);
    })
    this.bullets.forEach (function (bullet) {
      bullet.draw(that.ctx);
    })


    this.ctx.drawImage(img, 0, 0);

  }

  Game.prototype.move = function() {
    var that = this;
    this.ship.move();
    this.bullets.forEach (function (bullet) {
      bullet.move();
    })

    this.asteroids.forEach (function (asteroid, index) {
      asteroid.move();
      if (that.isOffBoard(asteroid)) {
        that.asteroids.splice(index, 1);
      }

    });
  }

  Game.prototype.step = function () {
    this.move();
    this.draw();
    this.destroyAsteroids();
    this.checkCollisions();
    this.isOutOfBounds();

    if (this.asteroids.length < 5) {
      this.addAsteroids(5);
    }
  }

  Game.prototype.start = function () {
    var that = this;
    this.bindKeyHandlers();

    this.intervalId = setInterval(function () {that.step()}, 15);
  }

  Game.prototype.stop = function () {
    alert("YOU'RE DEAD, JIM")
    clearInterval(this.intervalId);
  }

  Game.prototype.isOffBoard = function(obj) {
    if ((obj.pos[0] > DIM_X) || (obj.pos[0] < 0)) {
      return true;
    }
    else if ((obj.pos[1] > DIM_Y) || (obj.pos[1] < 0)) {
      return true;
    } else {
      return false;
    }
  }

  Game.prototype.bindKeyHandlers = function () {
    var that = this;
    key('w', function(){ that.ship.power([0,-1]) });
    key('s', function(){ that.ship.power([0,1]) });
    key('a', function(){ that.ship.power([-1,0]) });
    key('d', function(){ that.ship.power([1,0]) });
    key('space', function(){ that.fireBullet() });
  }

  Game.prototype.fireBullet = function () {
    var bullet = this.ship.fireBullet()
    if (!(bullet === undefined)) {
    this.bullets.push(bullet);
    }
  }

  Game.prototype.destroyAsteroids = function () {
    var that = this;
    this.bullets.forEach (function (bullet) {
      var destroyedAsteroid = bullet.hitAsteroids(that.asteroids)

      if (destroyedAsteroid) {
        console.log("SHOT STUFF")
        that.removeBullet(bullet);
        that.removeAsteroid(destroyedAsteroid);
      }
    })
  }

  Game.prototype.removeAsteroid = function (asteroid) {
    console.log('destroyed!!!!!!!!!!')
    this.asteroids.splice(this.asteroids.indexOf(asteroid),1);
  }

  Game.prototype.removeBullet = function (bullet) {
    this.bullets.splice(this.bullets.indexOf(bullet),1);
  }

  Game.prototype.isOutOfBounds = function() {
    var that = this;
    this.bullets.forEach ( function(bullet) {
      if (that.isOffBoard(bullet)) {
        that.removeBullet(bullet);
      }
    });

    this.asteroids.forEach ( function(asteroid) {
      if (that.isOffBoard(asteroid)) {
        that.removeAsteroid(asteroid);
      }
    });

    if (that.isOffBoard(this.ship)) {
      var x = this.ship.pos[0] ; var y = this.ship.pos[1];
      this.ship.pos = [(1000 + x)% DIM_X, (1000 + y) % DIM_Y];
    }
  }



})(this);