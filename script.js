const Questions = [
  {
    question: "which is the largest animal in the world?",
    answer: [
      { text: "shark", correct: false },
      { text: "blue-whale", correct: true },
      { text: "elephant", correct: false },
      { text: "giraffe", correct: false },
    ],
  },
  {
    question: "which is the smallet country in the world?",
    answer: [
      { text: "vatican", correct: true },
      { text: "bhutan", correct: false },
      { text: "nepal", correct: false },
      { text: "shri lanka", correct: false },
    ],
  },
  {
    question: "which is the largest dessert in the world?",
    answer: [
      { text: "kalhari", correct: false },
      { text: "godi", correct: false },
      { text: "sahara", correct: false },
      { text: "antartica", correct: true },
    ],
  },
  {
    question: "which is the smallet continent in the world?",
    answer: [
      { text: "asia", correct: false },
      { text: "austrilia", correct: true },
      { text: "artic", correct: false },
      { text: "Africa ", correct: false },
    ],
  },
];

const questionElement = document.getElementById("Question");
const answerButoon = document.getElementById("Answers-Button");
const nextButoon = document.getElementById("next-btn");

let currectQuestionIndex = 0;
let score = 0;

function StartQuiz() {
  currectQuestionIndex = 0;
  score = 0;
  // nextButoon.innerHTML = "Next";
  showQuestions();
}

function showQuestions() {
  resetState();
  let currentQuestion = Questions[currectQuestionIndex];
  let QuestionNo = currectQuestionIndex + 1;
  questionElement.innerHTML = QuestionNo + "." + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const Button = document.createElement("button");
    Button.innerHTML = answer.text;
    Button.classList.add("btn");
    answerButoon.appendChild(Button);

    if (answer.correct) {
      Button.dataset.correct = answer.correct;
    }

    Button.addEventListener("click", selectanswer);
  });
}

function resetState() {
  nextButoon.style.display = "none";
  while (answerButoon.firstChild) {
    answerButoon.removeChild(answerButoon.firstChild);
  }
}

function selectanswer(e) {
  const selectbtn = e.target;
  const iscorrect = selectbtn.dataset.correct === "true";
  if (iscorrect) {
    selectbtn.classList.add("correct");
    score++;
  } else {
    selectbtn.classList.add("incorrect");
  }

  Array.from(answerButoon.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  nextButoon.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${Questions.length}!`;
  nextButoon.innerHTML = " Play Again";
  nextButoon.style.display = "block";
}

function handlenextbutton() {
  currectQuestionIndex++;
  if (currectQuestionIndex < Questions.length) {
    showQuestions();
  } else {
    showScore();
  }
}

nextButoon.addEventListener("click", () => {
  if (currectQuestionIndex < Questions.length) {
    handlenextbutton();
  } else {
    StartQuiz();
  }
});

StartQuiz();

// 1) first we created a variable Questions and then assign question and aanswers to it which we gonna disply.
// 2) then we selected the Question, button and next and store it in a variable.
// 3) then we declare the currect index and score so that we get track of the index and the score.
// 4) then we create a fuction StartQuiz and assign currectQuestionIndex and score as 0. and then call showquestion fuctions.
// 5) Now we have called the resetState() fuction so that we can reset the iniitally written in html.
// 6) Then we created the fuction called showQuestions in which we get the currentQuestion using it index value.
// 7) Now we display the QuestionNo in which the index start from 0 in array so thats  why we have done +1
// 8) And then finally in questionElement we updeted the question number and the question.
// 9) then we use the forEach loop to go through each answer for the current question.
// 10) Then we created a button and for that button we updated the inner html to the answer.
// 11) then we finally provided the css property to the button
// 12) then we append the button in the place of answerButoon.
// 13) now we use the if block to check that the answer. here we set the correct attribute on button which will show true if it is correct.
// 14) then we add the addEventListener on button and then callthe selectanswer fuction.
// 15) now we called the resetState fuction in whch first we hide the next button so that after clicking next it should be disapper.
// 16) then we run the while loop to remove all the answers which we write in html in buttton.
// 17) now here we create another fuction selectanswer.
// 18) here we write const selectbtn = e.target, where first we idenfify which button we clicked.
// 19) now we check that the button is clicked is correct then it is true and are score will be increase.
// 20) and then we passit in if and else to check true and fasle.
// 21 now we run the foreach loop in which we write that if answer is correct then turn it green and after that block all the clicks.
// 22) And then we show the next button to go to next question.
// 23) now we created the showScore() fuction which display the final score.
// 24) we use resetState() to clear all the buttons. and questions
// 25) then we updated the questionElement.innerHTML in which we update the score out of how many questions.
// 26) now we called the handleNextButton() fuction in which we put currectQuestionIndex++ s that it should go to next question.
//  27) now we run if and else loop in which we write that if index is less then the legth then show question rather display score.
// 28) now we add the event listner on nextButton in which in if block block we write condition that if still question left then show handlenextbutton
// 29) else start quiz again.
