
const bubbleImg = document.createElement('img');
bubbleImg.src = '/images/bubble300.png'



class Bublles {
	constructor(canvasContext, positionX, positionY, width, height, speed) {
		    this.ctx = canvasContext,
			this.x = positionX,
			this.y = positionY,
			this.width = width,
			this.height = height,
			this.color = 'black';
            this.speed = speed
	}



	draw(){
        this.ctx.drawImage(bubbleImg, this.x, this.y, this.width, this.height);
    }  



	/*draw() {
	this.ctx.fillStyle = this.color;
	this.ctx.arc(100, 100, 10, 0, Math.PI*2);
} */

	move() {
		this.y += this.speed;
	}
}



