const canvas = document.getElementById("my-canvas")
const ctx = canvas.getContext("2d")

const game = new Game(ctx)

document.querySelector("#toggle").onclick = function() {
  if (game.isRunning()) {
    game.stop()
    this.innerText = 'START'
  } else {
    game.start()
    this.innerText = 'STOP'
  }
}
