class GameObject {
  // 初期化
  constructor(src, posX, posY, width = 64, height = 64) {
    if (src !== null) {
      this.image = new Image();
      this.image.src = src;
    }
    this.position = new Position(posX, posY);
    this.size = new Size(width, height);
    this.alive = true // 死活監視

    gameObjects.push(this)
  }
  // 毎フレーム実行したい処理をここに書く
  update(event) {
    this.draw(event)
  }

  // 描画処理
  draw() {
    ctx.drawImage(this.image, this.position.x + (this.size.width / 2), this.position.y + (this.size.height / 2), this.size.width, this.size.height)
  }
}

class Position {
  constructor(posX, posY) {
    this.x = posX
    this.y = posY
  }
}

class Size {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
}