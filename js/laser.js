class Laser {
  constructor(player,canvasContext) {
    this.x = player.x + player.width/2 - 2
    this.y = player.y;
    this.width = 4;
    this.height = 10;
    this.speed = 7;
    this.ctx = canvasContext;
  }

  drawLaser = () => {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  moveLaser = () => {
    this.y -= this.speed;
  };
}
