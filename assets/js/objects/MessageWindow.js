class MessageWindow extends GameObject {
  constructor(image, message) {
    super(image, -50, 180, 460, 200)
    var img = new Image(); // Create new img element
    img.src = image; // Set source path
    this.image = img
    this.image.onload = () => this.draw()
    this.messageTextObjectList = []
    
    this.messageTextObject1 = new MessageTextObject(message[0], 200, 340)
    this.messageTextObject2 = new MessageTextObject(message[1], 200, 370)
    this.messageTextObject3 = new MessageTextObject(message[2], 200, 400)
    this.messageTextObject4 = new MessageTextObject(message[3], 200, 430)
  }

  setText(messages) {
    this.messageTextObject1.setText(messages[0])
    this.messageTextObject2.setText(messages[1])
    this.messageTextObject3.setText(messages[2])
    this.messageTextObject4.setText(messages[3])
  }
}