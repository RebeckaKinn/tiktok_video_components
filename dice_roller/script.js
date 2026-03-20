const dice = [
  { name: "d20", maxNum: 20, img: "./img/d20.png" },
  { name: "d10", maxNum: 10, img: "./img/d10.png" },
  { name: "d6", maxNum: 6, img: "./img/d6.png" },
  { name: "d4", maxNum: 4, img: "./img/d4.png" },
];

function renderLayout() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    <h1>🎲 Dice Roller</h1>
    <div id="dice-container"></div>
    <div id="result">
      <div class="dice-display">
        <img id="dice-img" src="" alt="">
        <div id="dice-result">?</div>
      </div>
    </div>
    <div id="confetti-container"></div>
  `;
}

function renderDiceButtons() {
  const container = document.getElementById("dice-container");

  container.innerHTML = "";

  dice.forEach(function (d) {
    const btn = document.createElement("div");
    btn.classList.add("dice-btn");

    btn.innerHTML = `
      <img src="${d.img}" alt="${d.name}">
      <p>${d.name}</p>
    `;

    btn.addEventListener("click", function () {
      rollDice(d);
    });

    container.appendChild(btn);
  });
}

function roll(max) {
  return Math.floor(Math.random() * max) + 1;
}

function rollDice(die) {
  const resultText = document.getElementById("dice-result");
  const resultImg = document.getElementById("dice-img");

  resultImg.src = die.img;
  resultImg.classList.add("shake");

  let rolls = 10;

  const interval = setInterval(function () {
    const value = roll(die.maxNum);
    resultText.textContent = value;

    rolls--;

    if (rolls <= 0) {
      clearInterval(interval);

      const finalValue = roll(die.maxNum);
      resultText.textContent = finalValue;

      resultImg.classList.remove("shake");
      createConfetti();
    }
  }, 100);
}

function createConfetti() {
  const confettiContainer = document.getElementById("confetti-container");

  // Lag 30 konfetti-biter
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // tilfeldig farge og posisjon
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.animationDuration = 1 + Math.random() * 1.5 + "s";
    confetti.style.width = 6 + Math.random() * 6 + "px";
    confetti.style.height = 6 + Math.random() * 6 + "px";

    confettiContainer.appendChild(confetti);

    // Fjern konfetti etter animasjon
    setTimeout(function () {
      confetti.remove();
    }, 2000);
  }
}

// =====================
// 🚀 START
function init() {
  renderLayout();
  renderDiceButtons();
}

init();
