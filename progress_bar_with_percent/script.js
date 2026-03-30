const progressBar = document.getElementById("progressBar");
const precent = document.getElementById("precent");

let interval;

function startProgress() {
  let progress = 0;
  clearInterval(interval);
  progressBar.style.width = "0%";
  precent.textContent = "0%";

  interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
    } else {
      progress++;
      progressBar.style.width = progress + "%";
      precent.textContent = progress + "%";
    }
  }, 50);
}
