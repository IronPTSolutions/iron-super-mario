class Game {
  constructor(ctx) {
    this._ctx = ctx

    this._intervalId = null

    this._bg = new Background(this._ctx)
    this._mario = new Mario(this._ctx)

    this._audio = new Audio("http://www.sonidosmp3gratis.com/sounds/ringtones-super-mario-bros")
    this._audio.loop = true;

    this._obstacles = []

    this._tick = 0
  }

  isRunning() {
    return this._intervalId !== null
  }

  start() {
    this._audio.play()

    this._intervalId = setInterval(() => {
      this._checkGameOver()
      this._clear()
      this._draw()
      this._move()
      this._addObstacle()
    }, 1000 / 60);
  }

  stop() {
    this._audio.pause()
    clearInterval(this._intervalId)
    this._intervalId = null
  }

  _addObstacle() {
    if (this._tick % 300 === 0) {
      const newObstacle = new Obstacle(this._ctx)

      this._obstacles.push(newObstacle)
    }
  }

  _clear() {
    this._obstacles = this._obstacles.filter(o => o.x + o.w > 0)

    this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
  }

  _draw() {
    if (this._tick++ > 10000) {
      this._tick = 0
    }

    this._bg.draw()
    this._mario.draw()
    this._obstacles.forEach(o => o.draw())
  }

  _move() {
    this._bg.move()
    this._mario.move()
    this._obstacles.forEach(o => o.move())
  }

  _checkGameOver() {
    const m = this._mario

    this._obstacles.forEach(o => {
      const colX = o.x < (m.x + m.w) && (o.x + o.w) > m.x
      const colY = (o.y + o.h) > m.y && o.y < (m.y + m.h)

      if (colX && colY) {
        this._gameOver()
      }
    })
  }

  _gameOver() {
    this.stop()
    alert("GAME OVER")
  }
}
