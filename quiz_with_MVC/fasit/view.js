updateView();
function updateView() {
  const mainView = model.viewState.openQuiz
    ? showQuizView()
    : /*HTML*/ `<button onclick="startQuiz()">start</button>`;
  model.app.innerHTML = /*HTML*/ `
    <h1>${model.quiz.title}</h1>
    <p>${model.quiz.points == 0 ? "" : /*HTML*/ `<b>Du fikk ${model.quiz.points} poeng!</b>`}</p>
    <div>${mainView}</div>
    `;
}

function showQuizView() {
  const currentQuestion =
    model.quiz.questions[model.viewState.currentQuestionIndex];
  return /*HTML*/ `
    <section>
        <h3>${currentQuestion.question}</h3>
        <div>
            ${currentQuestion.options
              .map((element) => {
                return /*HTML*/ `
                <button onclick="checkQuestion(${element.isCorrect})">${element.text}</button>
                `;
              })
              .join("")}
        </div>
    </section>
  `;
}
