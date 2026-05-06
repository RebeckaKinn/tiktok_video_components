function startQuiz() {
  model.viewState.openQuiz = true;
  model.viewState.points = 0;
  model.viewState.currentQuestionIndex = 0;
  updateView();
}

function checkQuestion(choice) {
  if (choice) model.viewState.points++;
  model.viewState.currentQuestionIndex++;
  checkQuestionIndex(model.viewState.currentQuestionIndex);
  updateView();
}

function checkQuestionIndex(index) {
  if (index >= model.quiz.questions.length) {
    model.viewState.openQuiz = false;
    model.quiz.points = model.viewState.points;
  }
}
