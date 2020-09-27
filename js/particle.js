export default class Particle {
  constructor(positionX, positionY, speedY, speedX, size = 10) {
    console.log("Particle created");

    this.positionX = positionX;
    this.positionY = positionY;
    this.speedY = speedY;
    this.speedX = speedX;

    this.elem = document.createElement("div");
    this.elem.classList.add("particle");
    this.elem.style.position = "absolute";
    this.elem.style.width = size + "px";
    this.elem.style.height = size + "px";
    this.elem.style.top = this.positionY + "px";
    this.elem.style.left = this.positionX + "px";
    document.body.appendChild(this.elem);
  }
  accelerate(x, y) {
    this.speedY += y;
    this.speedX += x;
  }

  update() {
    this.positionX += this.speedX;
    this.positionY += this.speedY;

    this.elem.style.top = this.positionY + "px";
    this.elem.style.left = this.positionX + "px";

    const friction = 0.95;
    this.speedX *= friction;
    this.speedY *= friction;
  }
}
