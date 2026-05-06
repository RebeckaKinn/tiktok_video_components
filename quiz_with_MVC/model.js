const model = {
  app: document.getElementById("app"),
  viewState: {
    points: null,
    openQuiz: false,
    currentQuestionIndex: null,
  },
  quiz: {
    title: "17. mai quiz!",
    points: 0,
    questions: [
      {
        question: "Når ble Norges grunnlov signert?",
        options: [
          { text: "17. mai 1814", isCorrect: true },
          { text: "7. juni 1905", isCorrect: false },
          { text: "1. januar 1814", isCorrect: false },
        ],
      },
      {
        question: "Hvor ble grunnloven signert?",
        options: [
          { text: "Eidsvoll", isCorrect: true },
          { text: "Oslo", isCorrect: false },
          { text: "Bergen", isCorrect: false },
        ],
      },
      {
        question: "Hva heter Norges nasjonalsang?",
        options: [
          { text: "Ja, vi elsker dette landet", isCorrect: true },
          { text: "Gud signe vårt dyre fedreland", isCorrect: false },
          { text: "Norge i rødt, hvitt og blått", isCorrect: false },
        ],
      },
    ],
  },
};
