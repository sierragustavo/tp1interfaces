class Rectangulo extends Figura {
  constructor(posX, posY, width, height, fill, context) {
    super(posX, posY, width, height, fill, context);
  }

  draw() {
    ctx.fillStyle = this.fill;
    ctx.beginPath();
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
    ctx.fill();
    ctx.stroke();
  }

  estaSeleccionado(x, y) {
    return (
      x > this.posX &&
      x < this.width + this.posX &&
      y > this.posY &&
      y < this.width + this.posY
    );
  }

  moveTo(x, y) {
    ctx.clearRect(this.posX,this.posY,this.width,this.height);
    ctx.fillStyle = this.fill;
    ctx.beginPath();
    ctx.fillRect(x, y, this.width, this.height);
    ctx.fill();
    ctx.stroke();
    this.posX = x;
    this.posY = y;
  }
}
