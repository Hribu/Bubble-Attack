class Laser {
  constructor(player) {
    this.x = player.x/2
    this.y = player.y;
    this.width = 4;
    this.height = 10;
    this.speed = 5 ;
  }

  drawLaser = () => {
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  moveLaser = () => {
    this.y -= this.speed;
  };
}
