class CommandWindow extends GameObject {
  constructor(image, message) {
    super(image, -70, 180, 165, 200)
    var img = new Image(); // Create new img element
    img.src = image; // Set source path
    this.image = img
    this.image.onload = () => this.draw()
    this.messageTextObjectList = []
    
    this.messageTextObject1 = new StatusTextObject(message[0], 45, 340)
    this.messageTextObject2 = new StatusTextObject(message[1], 45, 370)
    this.messageTextObject3 = new StatusTextObject(message[2], 45, 400)
    this.messageTextObject4 = new StatusTextObject(message[3], 45, 430)
  }

  setText(messages) {
    this.messageTextObject1.setText(messages[0])
    this.messageTextObject2.setText(messages[1])
    this.messageTextObject3.setText(messages[2])
    this.messageTextObject4.setText(messages[3])
  }
}