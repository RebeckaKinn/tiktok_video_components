const DiceModel = (() => {
  const dice = [
    { name: "d20", maxNum: 20, img: "./img/d20.png" },
    { name: "d10", maxNum: 10, img: "./img/d10.png" },
    { name: "d6", maxNum: 6, img: "./img/d6.png" },
    { name: "d4", maxNum: 4, img: "./img/d4.png" },
  ];

  const roll = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  const getAllDice = () => {
    return dice;
  };

  return { roll, getAllDice };
})();

const DiceView = (() => {
  const app = document.getElementById("app");

  let resultText;
  let resultImg;

  const renderLayout = () => {
    app.innerHTML = `
      <h1>🎲 Dice Roller</h1>

      <div id="dice-container"></div>

      <div id="result">
        <div class="dice-display">
          <img id="dice-img" src="" alt="">
          <div id="dice-result">?</div>
        </div>
      </div>
    `;

    resultText = document.getElementById("dice-result");
    resultImg = document.getElementById("dice-img");
  };

  const renderDiceButtons = (diceList, onClick) => {
    const container = document.getElementById("dice-container");

    container.innerHTML = "";

    diceList.forEach((d) => {
      const btn = document.createElement("div");
      btn.classList.add("dice-btn");

      btn.innerHTML = `
        <img src="${d.img}" alt="${d.name}">
        <p>${d.name}</p>
      `;

      btn.addEventListener("click", () => onClick(d));

      container.appendChild(btn);
    });
  };

  const updateResult = (value) => {
    resultText.textContent = value;
  };

  const setImage = (img) => {
    resultImg.src = img;
  };

  const shake = () => {
    resultImg.classList.add("shake");
  };

  const stopShake = () => {
    resultImg.classList.remove("shake");
  };

  return {
    renderLayout,
    renderDiceButtons,
    updateResult,
    setImage,
    shake,
    stopShake,
  };
})();

const DiceController = ((model, view) => {
  const handleRoll = (die) => {
    view.setImage(die.img);
    view.shake();

    let rolls = 10;

    const interval = setInterval(() => {
      const value = model.roll(die.maxNum);
      view.updateResult(value);

      rolls--;

      if (rolls <= 0) {
        clearInterval(interval);

        const finalValue = model.roll(die.maxNum);
        view.updateResult(finalValue);
        view.stopShake();
      }
    }, 100);
  };

  const init = () => {
    view.renderLayout();

    const diceList = model.getAllDice();
    view.renderDiceButtons(diceList, handleRoll);
  };

  return { init };
})(DiceModel, DiceView);

DiceController.init();
