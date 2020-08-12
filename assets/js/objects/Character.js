class Character extends GameObject {
  constructor(image, x, y, delayTime) {
    super(image, x, y, 100, 100)
    var img = new Image(); // Create new img element
    img.src = image; // Set source path
    this.image = img
    this.delayTime = delayTime
    this.image.onload = () => this.appearance()
    this.isAppearance = false
  }

  draw() {
    if (this.isAppearance) {
      super.draw()
    }
  }

  appearance() {
    setTimeout(() => {
      super.draw()
      this.isAppearance = true
    }, this.delayTime)
  }
}