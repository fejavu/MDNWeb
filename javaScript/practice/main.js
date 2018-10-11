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

function Ball (x,y,velX,velY,color,size) {
	this.x = x;
	this.y = y;
	this.velX = velX;
	this.velY = velY;
	this.color = color;
	this.size = size;	
}

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
				balls[i].velX += 1;
				balls[i].velY += 1;
				this.velX += 1;
				this.velY += 1;

			}
		}
	}
}

var balls = [];

function loop () {
	// body...
	ctx.fillStyle = 'rgba(0,0,0,0.25)';
	ctx.fillRect(0,0,width,height);

	while(balls.length < 1){
		var ball = new Ball(
			random(0,width),
			random(0,height),
			random(-2,2),
			random(-2,2),
			'rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')',
			random(10,20)
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