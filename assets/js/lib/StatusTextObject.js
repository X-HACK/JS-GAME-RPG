class StatusTextObject extends TextObject {
  constructor(text = "empty", posX = 0, posY = 0, fontSize = 18, color = "white") {
    super(null, posX, posY, 0, 0)
    this.gameScreenCtx = ctx
    this.fontName = 'Press Start 2P';
    this.fontSize = fontSize
    this.color = color
    this.position = new Position(posX, posY);

    this.setConfig()
  }

  setText(message) {
    this.currentText = message
  }

  draw() {
    if(this.currentText){
      this.fillText(this.currentText)
    }
  }

  move(pos) {
    this.position = pos
  }

  setConfig() {
    this.gameScreenCtx.font = `${this.fontSize}px "${this.fontName}"`;
    this.gameScreenCtx.fillStyle = `${this.color}`
  }

  outputTextComplete() {
    return this.currentText.length === this.text.length
  }

  fillText(message) {
    this.gameScreenCtx.fillText(message, this.position.x, this.position.y)
  }
}