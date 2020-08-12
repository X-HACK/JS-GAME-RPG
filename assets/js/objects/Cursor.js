class Cursor extends GameObject {
  constructor(messageWindow) {
    super(null, 200, 200)
    this.messageWindow = messageWindow
    this.messageTextObject1 = new StatusTextObject("▷", 25, 340)
  }

  draw(event) {
    if (event) {
      console.log(event)
    }
    this.setText()
  }

  keyDown(e) {
    let kc = e.keyCode
    console.log(kc)
    if (kc === 40) {
      if (this.messageTextObject1.position.y < 400) {
        this.moveDown()
      }
    } else if (kc === 38) {
      if (this.messageTextObject1.position.y > 340) {
        this.moveUp()
      }
    } else if (kc === 13) {
      if(this.messageTextObject1.position.y === 340){
        console.log("たたかう")
        this.messageWindow.setText(["ゆうしゃの こうげき", "", "", ""])
      }
      if(this.messageTextObject1.position.y === 370){
        console.log("ぼうぎょ")
        this.messageWindow.setText(["ゆうしゃは みをまもっている", "", "", ""])
      }
      if(this.messageTextObject1.position.y === 400){
        console.log("にげる")
        this.messageWindow.setText(["ゆうしゃは にげだした", "", "", ""])
      }
    }
  }

  moveDown() {
    this.messageTextObject1.position.y += 30
  }

  moveUp() {
    this.messageTextObject1.position.y -= 30
  }

  setText() {
    this.messageTextObject1.setText("▷")
  }
}