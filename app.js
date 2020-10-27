// Step 1: print the starting screen onto the page. Users should be able to click there to start the quiz.
// Step 2: Write pre-generated html functions to be rendered later
// Step 3: Render those functions onto the page, questions, answers
// Step 4: Understand how everything is working lol
// Step 5: clean up your code and css

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/**
 * Generates HTML for the start screen.
 * User clicks the button and it'll start up the quiz
 */
function generateStartScreenHtml() {
  return `
    <div class="start-screen">
      <p>This quiz will test your knowledge of the grand sport of basketball.</p>
      <button type="button" id="start">Start Quiz</button>
    </div>
  `;
}

/**
 * Generates the HTML for the section of the app
 * that displays the questionNumber and the userScore
 */
function generateQuestionNumberAndScoreHtml() {
  return `
  <ul class="questionsAndScores">
    <li class="questionsHtml">Question Number: ${STORE.questionNumber + 1}/${
    STORE.questions.length
  }</li>
    <li class="answersHtml">Score: ${STORE.userScore}/${
    STORE.questions.length
  }</li>
  </ul>`;
}

/**
 * Generates the list of possible answers for
 * one question
 */
function generateAnswersHtml() {
  const answersArray = STORE.questions[STORE.questionNumber].answers;
  let answersHtml = "";
  let i = 0;

  // for (let i = 0; i <= answersArray.length; i++) {
  //   answersHtml += `
  //   <div id="option-container-${i}">
  //   <input type="radio" name="options" id="option${i}" 
  //   value= "${answer}" tabindex ="${i}" required> 
  //   <label for="option${i}"> ${answer}</label>
  //   </div>
  //   `;
  // }
  // This for loop didn't work the way i wanted it to work, not sure why

  // moved onto a forEach loop
  answersArray.forEach((answer) => {
    answersHtml += `
      <div id="option-container-${i}">
        <input type="radio" name="options" id="option${
          i + 1
        }" value= "${answer}" tabindex ="${i + 1}" required>
        <label for="option${i + 1}"> ${answer}</label>
      </div>
    `;
    i++;
  });
  return answersHtml;
}

/**
 * Generates the HTML to display one question
 */
function generateQuestionHtml() {
  let questionNumber = STORE.questions[STORE.questionNumber];
  return `
    <form id="question-form" class="question-form">
      <fieldset>
        <div class="question">
          <legend> ${questionNumber.question}</legend>
        </div>
        <div class="options">
          <div class="answers">
            ${generateAnswersHtml()}
          </div>
        </div>
        <button type="submit" id="submit-answer-button" tabindex="5">Submit</button>
        <button type="button" id="next-question-button" tabindex="6"> Next &gt;></button>
      </fieldset>
    </form >
  `;
}

/**
 * Generates the HTML for the results screen
 */
function generateResultsScreen() {
  return `
    <div class="results">
      <form id="js-restart-quiz">
        <fieldset>
          <div class="row">
            <div class="col-12">
              <legend>Your Score is: ${STORE.userScore}/${STORE.questions.length}</legend>
            </div>
          </div>
        
          <div class="row">
            <div class="col-12">
              <button type="button" id="restart"> Restart Quiz </button>
            </div>
          </div>
        </fieldset>
    </form>
    </div>
  `;
}

/**
 * @param {string} answerStatus - 'correct' / 'incorrect'
 * @returns {string} - HTML providing the user with feedback
 * regarding whether their answer was correct or incorrect.
 */
function generateFeedbackHTML(answerStatus) {
  let correctAnswer = STORE.questions[STORE.questionNumber].correctAnswer;
  let html = "";
  if (answerStatus === "correct") {
    html = `
    <div class="right-answer">That is correct!</div>
    `;
  } else if (answerStatus === "incorrect") {
    html = `
      <div class="wrong-answer">That is incorrect. The correct answer is ${correctAnswer}.</div>
    `;
  }
  return html;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/**
 * All-purpose render function that will conditionally
 * render the page based upon the state of the STORE.
 */
function render() {
  let html = "";

  if (STORE.quizStarted === false) {
    // generates the start screen for the user
    $("main").html(generateStartScreenHtml());
    return;
  } else if (
    // generates the question/answers plus the result of the answer
    STORE.questionNumber >= 0 &&
    STORE.questionNumber < STORE.questions.length
  ) {
    html = generateQuestionNumberAndScoreHtml();
    html += generateQuestionHtml();
    $("main").html(html);
  } else {
    // generates the final results screen
    $("main").html(generateResultsScreen());
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

/**
 * Handles a click of the quiz's start button
 */
function handleStartClick() {
  $("main").on("click", "#start", function (event) {
    STORE.quizStarted = true;
    render();
  });
}

/**
 * Handles the click of the "next" button
 */
function handleNextQuestionClick() {
  $("body").on("click", "#next-question-button", (event) => {
    render();
  });
}

/**
 * Handles the submission of the question form
 */
function handleQuestionFormSubmission() {
  $("body").on("submit", "#question-form", function (event) {
    event.preventDefault();
    const questionNumber = STORE.questions[STORE.questionNumber];

    // get value from checkbox checked by user
    let selectedOption = $("input[name=options]:checked").val();
    /**
     * Creates an id '#option-container' + the index of
     * the current question in the answers array.
     *
     * Example: #option-container-0
     */
    let optionContainerId = `#option-container-${questionNumber.answers.findIndex(
      (i) => i === selectedOption
    )}`;

    if (selectedOption === questionNumber.correctAnswer) {
      STORE.userScore++;
      $(optionContainerId).append(generateFeedbackHTML("correct"));
    } else {
      $(optionContainerId).append(generateFeedbackHTML("incorrect"));
    }
    STORE.questionNumber++;
    // hide the submit button
    $("#submit-answer-button").hide();
    // disable all inputs
    $("input[type=radio]").each(() => {
      $("input[type=radio]").attr("disabled", true);
    });
    // show the next button
    $("#next-question-button").show();
  });
}
/**
 * Resets all values to prepare to restart quiz
 */
function restartQuiz() {
  STORE.quizStarted = false;
  STORE.questionNumber = 0;
  STORE.userScore = 0;
}

function handleRestartButtonClick() {
  $("body").on("click", "#restart", () => {
    restartQuiz();
    render();
  });
}

function handleQuizApp() {
  render();
  handleStartClick();
  handleNextQuestionClick();
  handleQuestionFormSubmission();
  handleRestartButtonClick();
}

$(handleQuizApp);
