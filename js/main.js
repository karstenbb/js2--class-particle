import Particle from "./particle.js";

const particles = [];

for (let i = 0; i < 200; i++) {
  const posX = Math.random() * 20 + 300;
  const posY = Math.random() * 20 + 300;
  const speedX = Math.random() * 20 - 10;
  const speedY = Math.random() * 20 - 10;

  const size = Math.random() * 10 - 3;
  const newParticle = new Particle(posX, posY, speedX, speedY, size);
  particles.push(newParticle);
}

setInterval(function () {
  moveParticle.update();
  particles.forEach(function (particle) {
    particle.update();
  });
}, 50);

const moveParticle = new Particle(200, 200, 0, 0);

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const speed = 4;
  if (key === "w") {
    console.log("go up!");
    moveParticle.accelerate(0, -speed);
  }
  if (key === "s") {
    console.log("go down!");
    moveParticle.accelerate(0, speed);
  }
  if (key === "a") {
    console.log("go left!");
    moveParticle.accelerate(-speed, 0);
  }
  if (key === "d") {
    console.log("go right!");
    moveParticle.accelerate(speed, 0);
  }
});
