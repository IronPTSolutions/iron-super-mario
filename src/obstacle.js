class Obstacle {
  constructor(ctx) {
    this._ctx = ctx

    this.w = 40
    this.h = 40

    this.x = this._ctx.canvas.width
    this.y = this._ctx.canvas.height * 0.96 - this.h

    this.vx = -3

    this._img = new Image()
    this._img.src = 'https://www.mariowiki.com/images/f/f8/SMM-NSMBUSkewer.png'
  }

  draw() {
    this._ctx.drawImage(
      this._img,
      this.x,
      this.y,
      this.w,
      this.h
    )
  }

  move() {
    this.x += this.vx
  }
}
