
const bubbleImg = document.createElement('img');
bubbleImg.src = './images/bubble.png';

class Bubbles {
	constructor(canvasContext,positionY, speed, ) {
	  this.x = Math.floor(Math.random() * canvas.width + 1);
	  this.ctx = canvasContext
	  this.width = 70;
	  this.height = 70;
	  this.speed = 1.5;
	  this.y = positionY;
	  this.vx = .5;
	  this.vy =2;
	  
	//   this.directionX = Math.random() * 6 - 3;
	//   this.directionY = 1;
	  this.score = 5;
	}
  
	//draw the bubble
	draw= () => {
	  this.ctx.drawImage(bubbleImg, this.x, this.y, this.width, this.height);
	};
  
	//move bubble


	//move() {
	//	this.y += 3;
	//}

	    move() {
		//this.ctx.clearRect(0,0, canvas.width, canvas.height);
		this.draw();
		this.x += this.vx;
		this.y += this.vy;
		if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
		this.vy *= -1;
	  }
	  if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
		this.vx *= -1;
	  }
	  }
	  
	 //this.interval= this.setInterval(this.move, 20)
	
    
  }
  