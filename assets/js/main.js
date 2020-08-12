const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');
const gameObjects = []

ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 640, 480);

let monsters = ["akuma", "bat", "crab", "hand", "ghost", "harpy", "knight", "moai", "oumu", "pot"]
let monster1 = monsters[Math.floor(Math.random() * 10)]
let monster2 = monsters[Math.floor(Math.random() * 10)]
let monster3 = monsters[Math.floor(Math.random() * 10)]

var chara1 = new Character(`./assets/images/character/${monster1}.png`, 220, 140, 1500)
var chara2 = new Character(`./assets/images/character/${monster2}.png`, 110, 140, 1700)
var chara3 = new Character(`./assets/images/character/${monster3}.png`, 330, 140, 1900)
var messageWindow = new MessageWindow('./assets/images/controll/window.png', [])
var heroStatusWindow = new HeroStatusWindow('./assets/images/controll/window.png', [])
var commandWindow = new CommandWindow('./assets/images/controll/window.png', [])
var commandCursor = new Cursor(messageWindow)

messageWindow.setText(
  [
    "The monsters are here.",
    "",
    "",
    "",
  ],
)
heroStatusWindow.setText(
  [
    " HP 100  200  300 ", 
    " MP 200  300  400 ", 
    " LV   2    3    5 "
  ]
)
commandWindow.setText(
  [
    "たたかう", 
    "ぼうぎょ", 
    "にげる"
  ]
)

setInterval((event) => {
  ctx.clearRect(0, 0, 640, 480);
  gameObjects.map(_ => _.update(event))
}, 60);

window.addEventListener("keydown", (e) => {
  commandCursor.keyDown(e)
})