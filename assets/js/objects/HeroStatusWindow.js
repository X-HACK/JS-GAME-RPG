class HeroStatusWindow extends GameObject {
  constructor(image, heroes) {
    super(image, -200, -60, 420, 120)
    this.image = new Image();
    this.image.src = image; // Set source path
    this.image.onload = () => this.draw()
    // this.messageTextObjectList = []
    // this.heroes = []
    // heroes.forEach(element => {
    //   this.heroes.push(element)
    // })
    this.statusTextObject1 = new StatusTextObject("q", 40, 40)
    this.statusTextObject2 = new StatusTextObject("q", 40, 70)
    this.statusTextObject3 = new StatusTextObject("q", 40, 100)
  }

  setText(message) {
    this.statusTextObject1.setText(message[0])
    this.statusTextObject2.setText(message[1])
    this.statusTextObject3.setText(message[2])
  }
}