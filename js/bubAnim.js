
const bubbleImg = document.createElement('img');
bubbleImg.src = './images/bubble.png';

class Bubbles {
	constructor(canvasContext,positionY, speed) {
	  this.x = Math.floor(Math.random() * canvas.width + 1);
	  this.ctx = canvasContext
	  this.width = 70;
	  this.height = 70;
	  this.speed = speed;
	  this.y = positionY;
	//   this.directionX = Math.random() * 6 - 3;
	//   this.directionY = 1;
	  this.score = 5;
	}
  
	//draw the bubble
	draw= () => {
	  this.ctx.drawImage(bubbleImg, this.x, this.y, this.width, this.height);
	};
  
	//move bubble


	move() {
		this.y += 3;
	}


	
    
  }
  