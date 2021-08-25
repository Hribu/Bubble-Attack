const bgImg = document.createElement('img');
bgImg.src = './images/city1Modern.png';

class Background {
    constructor( canvasContext ){
        (this.ctx = canvasContext),
        (this.x = 0),
        (this.y = 0),
        (this.width = 1000),
        (this.height = 600);
    }

    draw(){
        this.ctx.drawImage(bgImg, this.x, this.y, this.width, this.height);
    }


}