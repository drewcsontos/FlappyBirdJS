export default class Bird {
  constructor() {
    this.x = 100;
    this.y = 0;
    this.speed = -10;
  }
  update(deltatime) {
    if (!deltatime) return;
    if (this.speed > -60) this.speed -= 4;
    this.y -= this.speed / deltatime;
  }
  draw(ctx) {
    let image = document.getElementById("bird");
    ctx.drawImage(image, this.x, this.y, 51, 36);
  }
}
