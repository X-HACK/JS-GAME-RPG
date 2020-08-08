const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 640, 400);

class Character {
  constructor(image, x, y) {
    var img = new Image();   // Create new img element
    img.src = image; // Set source path
    this.image = img
    this.posX = x
    this.posY = y

    this.image.onload = () => this.draw()
  }

  draw() {
    ctx.drawImage(this.image, this.posX, this.posY);
    ctx.beginPath();
  }
}

var chara = new Character('./assets/images/character/akuma.png', 0, 0)
