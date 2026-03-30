const tooltip = document.getElementById("tooltip");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  tooltip.style.left = currentX + "px";
  tooltip.style.top = currentY + "px";

  requestAnimationFrame(animate);
}
animate();
