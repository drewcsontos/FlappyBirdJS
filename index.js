import Bird from "./bird.js";
import Pipe from "./pipe.js";
let x = document.getElementById("game");
let ctx = x.getContext("2d");
let background = document.getElementById("background");
let bird = new Bird();
let pipe = new Pipe(500);
let pipe2 = new Pipe(900);

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
  let image = document.getElementById("front");
  ctx.drawImage(image, 0, 600, 500, 150);
  requestAnimationFrame(run);
}
