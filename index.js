import Bird from "./bird.js";
let x = document.getElementById("game");
let ctx = x.getContext("2d");
let background = document.getElementById("background");
let bird = new Bird();
let lastTime = 0;
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyW" || event.code == "Space")
    if (bird.speed < 60) bird.speed = 120;
});

document.addEventListener("click", function (event) {
  if (event.code == "KeyW" || event.code == "Space")
    if (bird.speed < 60) bird.speed = 120;
});

run(ctx);
function run(timestamp) {
  let deltatime = timestamp - lastTime;
  lastTime = timestamp;
  bird.update(deltatime);
  ctx.drawImage(background, 0, 0);
  bird.draw(ctx);
  requestAnimationFrame(run);
}
