const questions = [
    {
        index: 0,
        question: "In which movie series does Michael Myers terrorize the villagers?",
        answers: [
           { option: "Friday the 13th", correct: false},
           { option: "Halloween", correct: true},
           { option: "Saw", correct: false},
           { option: "Texas Chainsaw Massacre", correct: false}
        ]
    },


    {
        index: 1,
        question: "Which is the highest rated movie of all time, according to IMDB?",
        answers: [
           { option: "Shawshank Redemption", correct: true},
           { option: "The Godfather", correct: false},
           { option: "The Godfather II", correct: false},
           { option: "Pulp Fiction", correct: false}
        ]
    },

    {
        index: 2,
        question: "Who plays Lara Croft in the 2018 Tomb Raider?",
        answers: [
           { option: "Lily James", correct: false},
           { option: "Cara Delevingne", correct: false},
           { option: "Ana de Armas", correct: false},
           { option: "Alicia Vikander", correct: true}
        ]
    },

    {
        index: 3,
        question: "Which iconic Formula 1 rivalry is depicted in Rush?",
        answers: [
           { option: "Hunt vs Lauda", correct: true},
           { option: "Senna vs Prost", correct: false},
           { option: "Schumacher vs Hakkinen", correct: false},
           { option: "Hamilton vs Verstappen", correct: false}
        ]
    },

    {
        index: 4,
        question: "Which actor siad the legendary line 'Hasta la vista, baby'?",
        answers: [
           { option: "Jackie Chan", correct: false},
           { option: "Sylvester Stallone", correct: false},
           { option: "Arnold Schwarzenegger", correct: true},
           { option: "Steven Seagal", correct: false}
        ]
    },

    {
        index: 5,
        question: "Before becoming Captain Marvel, which movie granted Brie Larson an oscar?",
        answers: [
           { option: "Spotlight", correct: false},
           { option: "Room", correct: true},
           { option: "Kong: Skull Island", correct: false},
           { option: "The Glass Castle", correct: false}
        ]
    },

    {
        index: 6,
        question: "Which movie sees Brad Pitt battling hordes of undead zombies to save the planet?",
        answers: [
           { option: "World War Z", correct: true},
           { option: "Zombieland", correct: false},
           { option: "28 Days Later", correct: false},
           { option: "Shaun of the Dead", correct: false}
        ]
    },

    {
        index: 7,
        question: "Who portrayed Stephen Hawking in the theory of Everything?",
        answers: [
           { option: "Oscar Isacc", correct: false},
           { option: "Cillian Murphy", correct: false},
           { option: "Adam Driver", correct: false},
           { option: "Eddie Redmayne", correct: true}
        ]
    },

    {
        index: 8,
        question: "Which is the highest grossing film of all time?",
        answers: [
           { option: "Avengers", correct: false},
           { option: "Avengers: Endgame", correct: false},
           { option: "Avatar", correct: true},
           { option: "Jurassic World", correct: false}
        ]
    },

    {
        index: 9,
        question: "Which actress won more oscars during their career?",
        answers: [
           { option: "Katherine Hepburn", correct: true},
           { option: "Helen Mirren", correct: false},
           { option: "Lupita Nyong'o", correct: false},
           { option: "Merryl Streep", correct: false}
        ]
    },

    {
        index: 10,
        question: "Where can you find Jack Black using very unique methods of teaching?",
        answers: [
           { option: "High School Musical", correct: false},
           { option: "Summer School", correct: false},
           { option: "Dead Poets Society", correct: false},
           { option: "School of Rock", correct: true}
        ]
    },

    {
        index: 11,
        question: "How many oscars did the Lord of the Rings Trilogy won?",
        answers: [
           { option: "11", correct: false},
           { option: "14", correct: false},
           { option: "17", correct: true},
           { option: "19", correct: false}
        ]
    },

    {
        index: 12,
        question: "Which actress rose to fame after starring in The Wolf of Wall Street?",
        answers: [
           { option: "Margot Robbie", correct: true},
           { option: "lily Collins", correct: false},
           { option: "Emma Roberts", correct: false},
           { option: "Lucy Hale", correct: false}
        ]
    },

    {
        index: 13,
        question: "Which of these movies was not directed by Christopher Nolan?",
        answers: [
           { option: "Memento", correct: false},
           { option: "Interstellar", correct: false},
           { option: "Inception", correct: false},
           { option: "Shutter Island", correct: true}
        ]
    },


    {
        index: 14,
        question: "What is the first rule of Fight Club?",
        answers: [
           { option: "Bring Your Own Booze", correct: false},
           { option: "You do not talk about Fight Club", correct: true},
           { option: "Phones must be in silent mode", correct: false},
           { option: "You must show a negative Covid test", correct: false}
        ]
    },


];



let questionDisplayed = document.getElementById("question-displayed");
let answerOne = document.getElementById("answer-one");
let answerTwo = document.getElementById("answer-two");
let answerThree = document.getElementById("answer-three");
let answerFour = document.getElementById("answer-four");
const nextBtn = document.getElementById('next-btn');
let index = 0, score = 0;


function startQuiz() {
    index = 0;
    score = 0;
    addEventListeners();
    showNextQuestion();
}

function resetOptionColors() {
    answerOne.style.backgroundColor = 'white';
    answerTwo.style.backgroundColor = 'white';
    answerThree.style.backgroundColor = 'white';
    answerFour.style.backgroundColor = 'white';
}

function toggleOptions(disableState) {
    answerOne.disabled = disableState;
    answerTwo.disabled = disableState;
    answerThree.disabled = disableState;
    answerFour.disabled = disableState;
}

function showNextQuestion() {

    if(index >14) {
        endQuiz();
       
    }
    resetOptionColors();
    toggleOptions(false);
    nextBtn.style.display = "none";
    // Display question
    questionDisplayed.innerText = questions[index].question;

    // Display options
    answerOne.innerText = questions[index].answers[0].option;
    answerTwo.innerText = questions[index].answers[1].option;
    answerThree.innerText = questions[index].answers[2].option;
    answerFour.innerText = questions[index].answers[3].option;

    answerOne.value = questions[index].answers[0].correct;
    answerTwo.value = questions[index].answers[1].correct;
    answerThree.value = questions[index].answers[2].correct;
    answerFour.value = questions[index].answers[3].correct;

    index++;
    document.getElementById("correct").innerHTML = score;
    
  
   
}


function addEventListeners() {
    answerOne.addEventListener("click",checkAnswer);
    answerTwo.addEventListener("click",checkAnswer);
    answerThree.addEventListener("click",checkAnswer);
    answerFour.addEventListener("click",checkAnswer);

    nextBtn.addEventListener("click",  showNextQuestion);
}


function checkAnswer(event) {
    nextBtn.style.display = "block";
    toggleOptions(true);
   const isCorrectAnswer = event.target.value === 'true';
   const selectBox = event.target;


   if (isCorrectAnswer) {
     
       selectBox.style.backgroundColor ="green";
       selectBox.style.color = "white"
       score++;
       
     
   }
   else {
        selectBox.style.backgroundColor ="red";
        selectBox.style.color = "white"
        
       
   }
}

function endQuiz() {
    const finalScore = score;
    let hideQuiz = document.getElementById('entire-container');
    hideQuiz.classList.add('hide');
    let showResults = document.getElementById('final-results');
    showResults.classList.remove('hide');
    document.getElementById('user-score').innerHTML = finalScore;
}


startQuiz();