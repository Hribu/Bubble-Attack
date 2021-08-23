const playerImg = document.createElement('img');
playerImg.src = '/images/player.png'

class Car {

    constructor(canvasContext, positionX, positionY){
        this.ctx = canvasContext,
        this.image = carImg,
        this.x = positionX,
        this.y = positionY,
        this.width = 50,
        this.height = 100
    }

    draw(){
        this.ctx.drawImage(playerImg, this.x, this.y, this.width, this.height);
    }
}