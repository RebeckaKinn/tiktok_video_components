const dice = [
  { name: "d20", maxNum: 20, img: "./img/d20.png" },
  { name: "d10", maxNum: 10, img: "./img/d10.png" },
  { name: "d6", maxNum: 6, img: "./img/d6.png" },
  { name: "d4", maxNum: 4, img: "./img/d4.png" },
];

function renderDiceButtons() {
  return dice
    .map(
      (d) => /*HTML*/ `
    <button onclick="rollDice('${d.name}')" class="dice-btn">
      <img src="${d.img}" alt="${d.name}">
      <p>${d.name}</p>
    </button>
  `,
    )
    .join("");
}

function renderLayout() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    <h1>🎲 Dice Roller</h1>
    <div id="dice-container">
      ${renderDiceButtons()}
    </div>
    <div id="result">
      <div class="dice-display">
        <img id="dice-img" src="" alt="">
        <div id="dice-result">?</div>
      </div>
    </div>
  `;
}

function roll(max) {
  return Math.floor(Math.random() * max) + 1;
}

function renderResultDisplay(diceImg = "", diceValue = "?") {
  return /*HTML*/ `
    <div class="result">
      <div class="dice-display">
        <img class="dice-img" src="${diceImg}" alt="">
        <div class="dice-result">${diceValue}</div>
      </div>

    </div>
  `;
}

function rollDice(name) {
  const die = dice.find((d) => d.name === name);
  if (!die) return;

  const resultText = document.getElementById("dice-result");
  const resultImg = document.getElementById("dice-img");

  resultImg.src = die.img;
  resultImg.classList.add("shake");

  let rolls = 10;

  const interval = setInterval(() => {
    const value = roll(die.maxNum);
    resultText.textContent = value;

    rolls--;

    if (rolls <= 0) {
      clearInterval(interval);

      const finalValue = roll(die.maxNum);
      resultText.textContent = finalValue;
      resultImg.classList.remove("shake");
    }
  }, 100);
}

renderLayout();
