class TextObject extends GameObject {
  constructor(text = "empty", posX = 0, posY = 0, fontSize = 14, color = "white") {
    super(null, posX, posY, 0, 0)
    this.gameScreenCtx = ctx
    this.fontName = 'Press Start 2P';
    this.fontSize = fontSize
    this.color = color
    this.text = text
    this.position = new Position(posX, posY);
    this.counter = 0
  }
}