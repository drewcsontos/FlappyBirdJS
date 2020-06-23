export default class Pipe {
  constructor(x) {
    this.x = x;
    this.random = Math.random() * 175 - 75;
  }
  update(deltatime) {
    if (!deltatime) return;
    this.x -= 40 / deltatime;
    if (this.x < -200) {
      this.x = 600;
      this.random = Math.random() * 175 - 75;
    }
  }
  draw(ctx) {
    let bottom = document.getElementById("pipe");
    let top = document.getElementById("pipe1");
    ctx.fillStyle = "green";
    ctx.drawImage(top, this.x, -200 + this.random, 100, 400);
    ctx.drawImage(bottom, this.x, this.random + 375, 100, 400);
  }
}
