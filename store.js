const STORE = {
  // 5 or more questions are required
  questions: [
    { // Question 1
      question: 'Who is the current NBA Commissioner?',
      answers: [
        'David Stern',
        'Adam Silver',
        'LeBron James',
        'Roger Goodell'
      ],
      correctAnswer: 'Adam Silver'
    },
    { // Question 2
      question: 'Who were the 2020 NBA Champs?',
      answers: [
        'Miami Heat',
        'New York Knicks',
        'Los Angeles Lakers',
        'Boston Celtics'
      ],
      correctAnswer: 'Los Angeles Lakers'
    },
    { // Question 3
      question: 'What does the NBA stand for?',
      answers: [
        'North Basketball Association',
        'National Basketball Association',
        'New Basketball Arena',
        'North Ball Associates'
      ],
      correctAnswer: 'National Basketball Association'
    },
    { //Question 4
      question: 'A free throw is worth ____',
      answers: [
        '1 point',
        '2 points',
        '3 points',
        'There are no free throws in basketball'
      ],
      correctAnswer: '1 point'
    },
    { // Question 5
      question: 'This Miami Heat player is commonly referred to as \'Baby Goat\'',
      answers: [
        'Duncan Robinson',
        'Tyler Herro',
        'KZ Okpala',
        'Kendrick Nunn'
      ],
      correctAnswer: 'Tyler Herro'
    },
    // { Question 6
    //   question: 'Who is the greatest basketball player of all time?',
    //   answers: [
    //     'Michael Jordan',
    //     'LeBron James'
    //   ]
    // }
    // this is a question for whomever views this code. There is no correct answer. 
    // Each player was great in their respective eras. If you have questions, feel free to Slack me about it.  
  ],
  quizStarted: false,
  questionNumber: 0,
  userScore: 0
};