// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function Shape (x,y,velX,velY,exists) {
	this.x = x;
	this.y = y;
	this.velX = velX;
	this.velY = velY;
	this.exists = exists;	
}

function Ball (x,y,velX,velY,exists,color,size) {
	Shape.call(this,x,y,velX,velY,exists);
	this.color = color;
	this.size = size;	
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.draw = function() {
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
	ctx.fill();
}

Ball.prototype.update = function() {
	if ((this.x + this.size)>=width) {
		this.velX = -(this.velX);
	}

	if ((this.x - this.size)<=0) {
		this.velX = -(this.velX);
	}

	if ((this.y + this.size)>=height) {
		this.velY = -(this.velY);
	}

	if ((this.y - this.size)<=0) {
		this.velY = -(this.velY);
	}

	this.x += this.velX;
	this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
	// body...
	for (var i = 0; i < balls.length; i++) {
		if(!(this === balls[i])){
			var dx = this.x - balls[i].x;
			var dy = this.y - balls[i].y;
			var distance = Math.sqrt(dx*dx+dy*dy);

			if (distance < this.size + balls[i].size) {
				balls[i].color = 'rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';
				this.color = 'rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';
				// balls[i].velX += 1;
				// balls[i].velY += 1;
				// this.velX += 1;
				// this.velY += 1;

			}
		}
	}
}

function EvilCircle (x,y,exists) {
	// body...
	Shape.call(this,x,y,exists);
	this.color = 'white';
	this.size = 15;
	this.velX = 20;
	this.velY = 20;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

EvilCircle.prototype.draw = function() {
	// body...
	ctx.beginPath();
	ctx.strokeStyle = this.color;
	ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
	ctx.stroke();
}

EvilCircle.prototype.checkBounds = function() {

	// The ball is beyond right bound
	if ((this.x + this.size)>=width) {
		this.x -= this.size; 
	}

	// The ball is beyond left bound
	if ((this.x - this.size)<=0) {
		this.x += this.size;
	}

	// The ball is beyond bottom bound
	if ((this.y + this.size)>=height) {
		this.y -= this.size;
	}

	// The ball is beyond top bound;
	if ((this.y - this.size)<=0) {
		// this.velY = -(this.velY);
		this.y += this.size;
	}
}

var balls = [];

function loop () {
	// body...
	ctx.fillStyle = 'rgba(0,0,0,0.25)';
	ctx.fillRect(0,0,width,height);

	while(balls.length < 15){
		var ball = new Ball(
			random(0,width),
			random(0,height),
			random(-8,8),
			random(-8,8),
			true,
			'rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')',
			random(15,30)
		);
		balls.push(ball);
	}

	for (var i = 0; i < balls.length; i++) {
		balls[i].draw();
		balls[i].update();
		balls[i].collisionDetect();
	}

	requestAnimationFrame(loop);
}

loop();