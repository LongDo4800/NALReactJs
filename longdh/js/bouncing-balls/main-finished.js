// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// define Ball constructor

// function Ball(x, y, velX, velY, color, size) {
//   this.x = x;
//   this.y = y;
//   this.velX = velX;
//   this.velY = velY;
//   this.color = color;
//   this.size = size;
// }

function Shape(x, y, velX, velY) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = true;
}

function EvilCircle(x, y){
  Shape.call(this, x, y, 20, 20);
  this.color = 'white';
  this.size = 10;
}

EvilCircle.prototype.draw = function(){
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
}

EvilCircle.prototype.checkBound = function(){
  if((this.x + this.size) >= width) {
    this.size += 10;
    // this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.size += 10;
    // this.velX = -(this.velX);
  }

  if((this.y + this.size) >= height) {
    this.size += 10;
    // this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.size += 10;
    // this.velY = -(this.velY);
  }
}

EvilCircle.prototype.collisionDetect = function(){
  for(let j = 0; j < balls.length; j++) {
    if(balls[j].exists) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].exists = false;
      }
    }
  }
};

EvilCircle.prototype.setControls = function() {
  var _this = this;
  window.onkeydown = function(e) {
    if(e.key === 'a') {
      _this.x -= _this.velX;
    } else if(e.key === 'd') {
      _this.x += _this.velX;
    } else if(e.key === 'w') {
      _this.y -= _this.velY;
    } else if(e.key === 's') {
      _this.y += _this.velY;
    }
  };
};


function Ball(x, y, velX, velY, color, size) {
  Shape.call(this, x, y, velX, velY)
  this.color = color;
  this.size = size;
};

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

// define ball draw method

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// define ball update method

Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};

// define ball collision detection

Ball.prototype.collisionDetect = function() {
  for(let j = 0; j < balls.length; j++) {
    if(!(this === balls[j]) && balls[j].exists) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
      }
    }
  }
};

// define array to store balls and populate it

let balls = [];

while(balls.length < 25) {
  const size = random(10,20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the adge of the canvas, to avoid drawing errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );
  balls.push(ball);
}

// define loop that keeps drawing the scene constantly

const evil = new EvilCircle(50, 50);
evil.setControls();

function loop() {
  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);

  for(let i = 0; i < balls.length; i++) {
    if(balls[i].exists){
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }


  evil.draw();
  evil.checkBound();
  evil.collisionDetect();

  requestAnimationFrame(loop);
}

loop();
