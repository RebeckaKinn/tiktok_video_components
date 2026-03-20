const progressBar = document.getElementById("progressBar");
const startButton = document.getElementById("startButton");
const precent = document.getElementById("precent");

startButton.addEventListener("click", () => {
  let progress = 0;

  const interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
    } else {
      progress++;
      progressBar.style.width = progress + "%";
      precent.textContent = progress + "%";
    }
  }, 50);
});
