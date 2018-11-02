//Creating global variables we will need to call for the game to run// 

var correctAnswers = 0;
var wrongAnswer = 0;
var countTimer = 30;
var unanswered = 0;
var setIntervalId;
var setTimeoutId;
var indexArray = 0;
var gameSpace = $("#quiz-area");
var buttonPress;

//Create an array for the questions to be stored that we can access later// 

var trivQuestions = [
    {
        question: "Who is Spider-man?",
        answers: ["A literal spider in a suit", "George W. Bush", "Peter Parker", "A menace!"],
        rightAnswer: "Peter Parker",
        image: "assets/images/question1.gif"
    },
    {
        question: "What was the name of Peter Parker's Uncle?",
        answers: ["Ben", "Benny", "Benny Benassi", "Papa Menace"],
        rightAnswer: "Ben",
        image: "assets/images/uncle ben.gif"
    },
    {
        question: "Which artist performed the hit song 'Hero' for the film Spider-Man (2002) directed by Sam Raimi?",
        answers: ["Blink-182", "Chad Kroeger of Nickel Back", "Linkin Park", "The Menace Men"],
        rightAnswer: "Chad Kroeger of Nickel Back",
        image: "assets/images/chad.gif"
    },
    {
        question: "When will Mr. Ditkovich, Peter's landlord, get his money?",
        answers: ["Every month on the 1st", "The second friday of every month", "When the NYPD finally catches the Spider-Menace", "When he fixes this damn door"],
        rightAnswer: "When he fixes this damn door",
        image: "assets/images/rent.gif"
    },
    {
        question: "True or False: Norman Osbourne is something of a scientist",
        answers: ["True", "False"],
        rightAnswer: "True",
        image: "assets/images/scientist.gif"
    },
    {
        question: "What does J. Jonah Jameson desire the most?",
        answers: ["Wealth", "Love", "For the Bugle to be the number 1 newspaper in New York", "Pictures of Spider-man"],
        rightAnswer: "Pictures of Spider-man",
        image: "assets/images/jameson.gif"
    },
    {
        question: "Which professional wrestler played the character 'Bonesaw' from the film Spider-Man (2002) directed by Sam Raimi?",
        answers: ["'Macho Man' Randy Savage", "Hulk Hogan", "'Stone Cold' Steve Austin", "Rey Mysterio"],
        rightAnswer: "'Macho Man' Randy Savage",
        image: "assets/images/bonesaw.gif"
    },
    {
        question: "How is the pie?",
        answers: ["A menace to my tastebuds", "Fine, thanks", "Good", "So Good"],
        rightAnswer: "So Good",
        image: "assets/images/so good.gif"
    }
];



function timerCountDown() {
    $("#counter").html(countTimer);
    countTimer--;
    if (countTimer === 0) {
        indexArray++;
    }
}
//create the funtion for starting the game//


function gameStart() {
    //this line will get rid of the start button when the game starts//
   
    $("#start").remove();
  
    
    // this line will initialize the first question and write it to the page//
    // We access the first question by going into the question array at positon 0, then accessing the 'question propery'//
   
    $("#question").html(trivQuestions[indexArray].question);
   
    //now we create a for loop to run through the answers

    //phil helped me see that in my for loop i was missing the [indexArray] variable that i needed. Also i previously was not using a variable indexArray to keep track of the iterations
    // i only put [0] in which is an issue because i had no variable to call and increment to get to the next item in the array. 
   
    for (var i = 0; i < trivQuestions[indexArray].answers.length; i++) {
       
    //now we assign the answers to buttons and their respective id's based on the index position from the answer property in the trivia questiosn array//


        $("#buttons").append("<button class='answerBtn'>" + trivQuestions[indexArray].answers[i] + "</button>");

    }
   
    //the next line runs the timerCountDown function every second, which will decrement from the set 30 second time//
   
    clearInterval(setIntervalId);

    setIntervalId = setInterval(timerCountDown, 1000);

    //next we need an on click event to check the answer clicked against the correct answer, and write conditions for a correct guess vs a wrong one//

   $(".answerBtn").on("click", function(){

    buttonPress = $(".answerBtn").val();

    if (buttonPress == trivQuestions[indexArray].rightAnswer){





    } 

   });


}






$("#start").on("click", function () {
    gameStart();
});