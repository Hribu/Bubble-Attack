class Laser {
  constructor(player,canvasContext) {
    this.x = player.x + player.width/2 - 2
    this.y = player.y;
    this.width = 6;
    this.height = 15;
    this.speed = 7;
    this.ctx = canvasContext;
  }

  drawLaser = () => {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  moveLaser = () => {
    this.y -= this.speed;
  };
}
