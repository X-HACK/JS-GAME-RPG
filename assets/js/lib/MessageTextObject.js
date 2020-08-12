class MessageTextObject extends TextObject {
  constructor(text = "empty", posX = 0, posY = 0, fontSize = 18, color = "white") {
    super(null, posX, posY, 0, 0)
    this.gameScreenCtx = ctx
    this.fontName = 'Press Start 2P';
    this.fontSize = fontSize
    this.color = color
    this.position = new Position(posX, posY);
    this.counter = 0

    this.text = text
    this.currentText = ""
    this.currentIndex = 0

    this.setConfig()
  }

  setText(message) {
    this.text = message
    this.currentIndex = 0
    this.currentText = ""
  }

  draw() {
    this.setConfig()

    if (this.currentText.length < this.text.length) {
      this.currentText += this.text[this.currentIndex]
      this.fillText(this.currentText)
      this.currentIndex += 1
    }
  }

  setConfig() {
    this.gameScreenCtx.font = `${this.fontSize}px "${this.fontName}"`;
    this.gameScreenCtx.fillStyle = `${this.color}`
  }

  fillText(message) {
    this.gameScreenCtx.fillText(message, this.position.x, this.position.y)
  }
}