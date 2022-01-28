if (document.readyState === "complete") {
   
    startQuiz();
} else {
    
    window.addEventListener("DOMContentLoaded", startQuiz);
}

const question= document.getElementById('question');
const options= Array.from(document.querySelectorAll('.option-content'));


function startQuiz() {
   console.log("startedquiz")
   randomQuestions = questions.sort (() => Math.random() -0.5)

}


const questions = [
    {
        question: "In which movie series does Michael Mayer terrorize the villagers?",
        answers: [
           { option: "Friday the 13th", correct: false},
           { option: "Halloween", correct: true},
           { option: "Saw", correct: false},
           { option: "Texas Chainsaw Massacre", correct: false}
        ]
    },


    {
        question: "Which is the highest rated movie of all time, accoreding to IMDB?",
        answers: [
           { option: "Shawshank Redemption", correct: true},
           { option: "The Godfather", correct: false},
           { option: "The Godfather II", correct: false},
           { option: "Pulp Fiction", correct: false}
        ]
    },

    {
        question: "Who plays Lara Croft in the 2018 Tomb Raider?",
        answers: [
           { option: "Lily James", correct: false},
           { option: "Cara Delevingne", correct: false},
           { option: "Ana de Armas", correct: false},
           { option: "Alicia Vikander", correct: true}
        ]
    },

    {
        question: "Which iconic Formula 1 rivalry is depicted in Rush?",
        answers: [
           { option: "Hunt vs Lauda", correct: true},
           { option: "Senna vs Prost", correct: false},
           { option: "Schumacher vs Hakkinen", correct: false},
           { option: "Hamilton vs Verstappen", correct: false}
        ]
    },

    {
        question: "Which actor siad the legendary line 'Hasta la vista, baby'?",
        answers: [
           { option: "Jackie Chan", correct: false},
           { option: "Sylvester Stallone", correct: false},
           { option: "Arnold Schwarzenegger", correct: true},
           { option: "Steven Seagal", correct: false}
        ]
    },

    {
        question: "Before becoming Captain Marvel, which movie granted Brie Larson an oscar?",
        answers: [
           { option: "Spotlight", correct: false},
           { option: "Room", correct: true},
           { option: "Kong: Skull Island", correct: false},
           { option: "The Glass Castle", correct: false}
        ]
    },

    {
        question: "Which movie sees Brad Pitt battling hordes of undead zombies to save the planet?",
        answers: [
           { option: "World War Z", correct: true},
           { option: "Zombieland", correct: false},
           { option: "28 Days Later", correct: false},
           { option: "Shaun of the Dead", correct: false}
        ]
    },

    {
        question: "Who portrayed Stephen Hawking in the theory of Everything?",
        answers: [
           { option: "Oscar Isacc", correct: false},
           { option: "Cillian Murphy", correct: false},
           { option: "Adamm Driver", correct: false},
           { option: "Eddie Redmayne", correct: true}
        ]
    },

    {
        question: "Which is the highest grossing film of all time?",
        answers: [
           { option: "Avengers", correct: false},
           { option: "Avengers: Endgame", correct: false},
           { option: "Avatar", correct: true},
           { option: "Jurassic World", correct: false}
        ]
    },

    {
        question: "Which actress won more oscars during their career?",
        answers: [
           { option: "Katherine Hepburn", correct: true},
           { option: "Helen Mirren", correct: false},
           { option: "Lupita Nyong'o", correct: false},
           { option: "Merryl Streep", correct: false}
        ]
    },

    {
        question: "Where can you find Jack Black using very unique methods of teaching?",
        answers: [
           { option: "High School Musical", correct: false},
           { option: "Summer School", correct: false},
           { option: "Dead Poets Society", correct: false},
           { option: "School of Rock", correct: true}
        ]
    },

    {
        question: "How many oscars did the Lord of the Rings Trilogy won?",
        answers: [
           { option: "11", correct: false},
           { option: "14", correct: false},
           { option: "17", correct: true},
           { option: "19", correct: false}
        ]
    },

    {
        question: "Which actress rose to fame after starring in The Wolf of Wall Street?",
        answers: [
           { option: "Margot Robbie", correct: true},
           { option: "lily Collins", correct: false},
           { option: "Emma Roberts", correct: false},
           { option: "Lucy Hale", correct: false}
        ]
    },

    {
        question: "Which of these movies was not directed by Christopher Nolan?",
        answers: [
           { option: "Memento", correct: false},
           { option: "Interstellar", correct: false},
           { option: "Inception", correct: false},
           { option: "Shutter Island", correct: true}
        ]
    },

    {
        question: "Which is the highest rated movie of all time, accoreding to Rotten Tomatoes?",
        answers: [
           { option: "It happened One Night", correct: true},
           { option: "Citizen kane", correct: false},
           { option: "The Godfather II", correct: false},
           { option: "Shawshank Redemption", correct: false}
        ]
    },

    {
        question: "Which actor won the most oscars during their career?",
        answers: [
           { option: "Tom Hanks", correct: false},
           { option: "Daniel Day-Lewis", correct: true},
           { option: "Humphrey Bogart", correct: false},
           { option: "Mahershala Ali", correct: false}
        ]
    },


    {
        question: "Which was the first animated movie Disney ever released?",
        answers: [
           { option: "Bambi", correct: false},
           { option: "Snow White", correct: true},
           { option: "Cinderella", correct: false},
           { option: "Mickey Mouse", correct: false}
        ]
    },

    {
        question: "Which director was once most known for starring in Westerns?",
        answers: [
           { option: "Henry Fonda", correct: false},
           { option: "James Stewart", correct: false},
           { option: "Pedro Almodovar", correct: false},
           { option: "Clint Eastwood", correct: true}
        ]
    },

    {
        question: "In which movie can you find Robert de Niro asking 'You talkin' to me'?",
        answers: [
           { option: "Goodfellas", correct: false},
           { option: "Rebel Without a Cause", correct: false},
           { option: "Taxi Driver", correct: true},
           { option: "My Dinner with Andre", correct: false}
        ]
    },

    {
        question: "In Citizen Kane, what does Charles Foster Kane say in his deathbed?",
        answers: [
           { option: "If there is a God, give me a sign", correct: false},
           { option: "Tulips", correct: false},
           { option: "I'd rather die than watching another minute of this s... ", correct: false},
           { option: "Rosebud", correct: true}
        ]
    },

    {
        question: "Which actor plays himself in Zombieland?",
        answers: [
           { option: "Bill Murray", correct: true},
           { option: "Jonah Hill", correct: false},
           { option: "Woody Harrelson", correct: false},
           { option: "Jamie Foxx", correct: false}
        ]
    },

    {
        question: "Which movie was wrongly declared the winner of the 2017 edition of the oscars?",
        answers: [
           { option: "Moonlight", correct: false},
           { option: "Roma", correct: false},
           { option: "La La Land", correct: true},
           { option: "Moonlight", correct: false}
        ]
    },

    {
        question: "Which movie was roughly based on the Battle of Thermopylae?",
        answers: [
           { option: "Braveheart", correct: false},
           { option: "300", correct: true},
           { option: "Troy", correct: false},
           { option: "Battle of the Red Cliff", correct: false}
        ]
    },

    {
        question: "Which instrument does Milles Teller play in Whiplash?",
        answers: [
           { option: "Piano", correct: false},
           { option: "Trumpet", correct: false},
           { option: "Drums", correct: true},
           { option: "Vuvuzela", correct: false}
        ]
    },

    {
        question: "Which is the highest grossing picture of all time, when taking inflation into account?",
        answers: [
           { option: "Ben Hur", correct: false},
           { option: "Gone With the Wind", correct: true},
           { option: "The Wizard of Oz", correct: false},
           { option: "The Lion King", correct: false}
        ]
    },

    {
        question: "Which become the first foreign movie to win Best Picture at the Oscars?",
        answers: [
           { option: "Parasite", correct: true},
           { option: "Oldboy", correct: false},
           { option: "Memories of Murder", correct: false},
           { option: "The Lives of Others", correct: false}
        ]
    },

    {
        question: "Which holiday is the subject of Disney's Coco?",
        answers: [
           { option: "Independance Day", correct: false},
           { option: "Day of the Dead", correct: true},
           { option: "Christmas", correct: false},
           { option: "Thanksgiving", correct: false}
        ]
    },

    {
        question: "Who wrote the score for The Good, The Bad and the Ugly?",
        answers: [
           { option: "John Williams", correct: false},
           { option: "Hanz Zimmer", correct: false},
           { option: "Ennio Morricone", correct: true},
           { option: "Henry Mancini", correct: false}
        ]
    },

    {
        question: "In Seven, what was in the Box?",
        answers: [
           { option: "The head of Det. Mills wife", correct: true},
           { option: "Nothing", correct: false},
           { option: "Det. Mills Dog", correct: false},
           { option: "Anthrax", correct: false}
        ]
    },

    {
        question: "What is the first rule of Fight Club?",
        answers: [
           { option: "Bring Your Own Booze", correct: false},
           { option: "You do not talk about Fight Club", correct: true},
           { option: "Phones must be in silent mode", correct: false},
           { option: "You must show a negative Covid test", correct: false}
        ]
    },

]