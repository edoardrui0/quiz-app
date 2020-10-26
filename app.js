/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Who is the current NBA Commissioner?',
      answers: [
        'David Stern',
        'Adam Silver',
        'LeBron James',
        'Roger Goodell'
      ],
      correctAnswer: 'Adam Silver'
    },
    {
      question: 'Who were the 2020 NBA Champs?',
      answers: [
        'Miami Heat',
        'New York Knicks',
        'Los Angeles Lakers',
        'Boston Celtics'
      ],
      correctAnswer: 'Los Angeles Lakers'
    },
    {
      question: 'What does the NBA stand for?',
      answers: [
        'North Basketball Association',
        'National Basketball Association',
        'New Basketball Arena',
        'North Ball Associates'
      ],
      correctAnswer: 'National Basketball Association'
    },
     {
      question: 'A free throw is worth ____',
      answers: [
        '1 point',
        '2 points',
        '3 points',
        'There are no free throws in basketball'
      ],
      correctAnswer: '1 point'
    },
    {
      question: 'Who is the greatest basketball player of all time?',
      answers: [
        'Michael Jordan',
        'LeBron James'
      ]
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)