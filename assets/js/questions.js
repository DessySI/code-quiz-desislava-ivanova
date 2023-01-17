
//value
//event.preventDefault
//dataAttributes (switch states in this case melody in right or wrong answer)
//displayMessage (day3 00:48:43 && 55 min)
//localStorage

//present question upon start butten clicked
/*
var startButton = document.querySelector("#start");
startButton.addEventListener("click", showQuestions);
var questions = document.getElementById("#questions");
var wrapper = document.querySelector("#wrapper");
var substractTime;

  
//present questions

function showQuestions() {
   questions = [
        {
            question: "Commonly used data types DO NOT include ?",
            answers: ["Strings", "Booleans", "Alerts", "Numbers"],
            correctAnswer: "Alertsc"
          },
        {
            question: "Arrays in javascript can be used to store what ?",
            answers: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
            correctAnswer: "All of the above"
          },
        {
            question: "A very useful tool used during development and debugging for printing content to debugger is ?",
            answers: ["Javascript", "Terminal/bash", "For loops", "Console log"],
            correctAnswer: "Console log"
          },   
        {
            question: "The condition in an if / else statement is enclosed within ?",
            answers: ["Quotes", "Curly brackets", "Paraentheses", "Square brackets"],
            correctAnswer: "Curly brackets"
          }, 
        {
            question: "String values must be enclosed within____ when being assigned to variables",
            answers: ["Commas", "Curly brackets", "Quotes", "Paraentheses"],
            correctAnswer: "Commas"
          }      
    ];

    document.getElementById("question-title").innerHTML = questions[0].question; 
    


};


/*
function render(questionNumber) {
    // Clears existing data 
    questions.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionNumber].title;
        var userChoices = questions[questionNumber].choices;
        questions.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questions.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            // Correct condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}

//when a question is answered -> present another question

//subtracted 10secs from the clock from the clock if question answer is incorrect

//WHEN all questions are answered or the timer reaches 0 -> THEN the game is over

*/
