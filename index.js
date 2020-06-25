import Bird from "./bird.js";
import Pipe from "./pipe.js";
let x = document.getElementById("game");
let ctx = x.getContext("2d");
let background = document.getElementById("background");
let bird = null;
let pipe = null;
let pipe2 = null;
let score = 0;
function setup() {
  bird = new Bird();
  pipe = new Pipe(500);
  pipe2 = new Pipe(900);
  score = 0;
}
function collides(a, b) {
  return !(
    a.y + a.height < b.y ||
    a.y > b.y + b.height ||
    a.x + a.width < b.x ||
    a.x > b.x + b.width
  );
}
setup();
let lastTime = 0;
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyW" || event.code == "Space")
    if (bird.speed < 60) bird.speed = 120;
});
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  var lastTouchEnd = 0;
  document.addEventListener(
    "touchend",
    function (event) {
      var now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        event.preventDefault();
      }
      lastTouchEnd = now;
    },
    false
  );
  document.addEventListener(
    "touchmove",
    function (event) {
      event.preventDefault();
    },
    false
  );
  x.addEventListener("touchend", function () {
    if (bird.speed < 60) bird.speed = 120;
  });
} else
  document.addEventListener("click", function () {
    if (bird.speed < 60) bird.speed = 120;
  });
run(ctx);
function run(timestamp) {
  let deltatime = timestamp - lastTime;
  lastTime = timestamp;
  bird.update(deltatime);
  ctx.drawImage(background, 0, 0);
  bird.draw(ctx);
  pipe.update(deltatime);
  pipe.draw(ctx);
  pipe2.update(deltatime);
  pipe2.draw(ctx);
  ctx.font = "50px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(score, 10, 50);
  if (
    collides(bird.rect, pipe.rect1) ||
    collides(bird.rect, pipe.rect2) ||
    collides(bird.rect, pipe2.rect1) ||
    collides(bird.rect, pipe2.rect2)
  )
    setup();
  if (pipe.x + 25 < bird.x && pipe.scored == false) {
    score++;
    pipe.scored = true;
  }
  if (pipe2.x + 25 < bird.x && pipe2.scored == false) {
    score++;
    pipe2.scored = true;
  }
  let image = document.getElementById("front");
  ctx.drawImage(image, 0, 600, 500, 150);
  requestAnimationFrame(run);
}
