
const bubbleImg = document.createElement('img');
bubbleImg.src = '/images/bubble.png';

class Bubbles {
	constructor(canvasContext,positionY, speed) {
	  this.x = Math.floor(Math.random() * canvas.width + 1);
	  this.ctx = canvasContext
	  this.width = 70;
	  this.height = 70;
	  this.speed = speed;
	  this.y = positionY;
	  this.directionX = Math.random() * 6 - 3;
	  this.directionY = 1;
	  this.score = 5;
	}
  
	//draw the bubble
	draw= () => {
	  this.ctx.drawImage(bubbleImg, this.x, this.y, this.width, this.height);
	};
  
	//move bubble


	move() {
		this.y += 5;
	}


	
    /*move = () => {
	  this.y += this.speed * this.directionY;
	  this.x += this.speed * this.directionX;
	};
  
	//collisions
  
		wallCollision = () => {
	  if (this.x > canvas.width - this.width) {
		this.directionX *= -1;
	  }
	  if (this.y > canvas.height - this.height) {
		this.directionY *= -1;
	  }
	  if (this.x < 0) {
		this.directionX *= -1;
	  }
	  if (this.y < 0) {
		this.directionY *= -1;
	  }
	}; */
  }
  