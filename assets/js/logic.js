//start timer and show question upon start butten clicked

var startButton = document.querySelector("#start");
var time = document.getElementById("time");
var questionsArr = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var answerOptions = document.querySelector("#answer");
var wrapper = document.querySelector("#wrapper");
var substractTime;

startButton.addEventListener("click", setTime);

function setTime() {
    document.querySelector("#start-screen").removeAttribute("class");
    document.querySelector("#start-screen").setAttribute("class", "hide");
    questionsArr = document.querySelector("#questions").removeAttribute("class");

    var secondsLeft = 76;
    var timerInterval = setInterval(function() {
     
      secondsLeft--;
      time.textContent = secondsLeft;
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        finalScore();
      }
      

    }, 500);
  }

  // present final score page
  function finalScore() {
    document.querySelector("#end-screen").removeAttribute("class");
    document.querySelector("#questions").removeAttribute("class");
    document.querySelector("#questions").setAttribute("class", "hide");  
  };

  // questions
    questionsArr = 
         [
          {
            question: "Commonly used data types DO NOT include ?", 
            answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
            correctAnswer: "3. Alerts"
          },
          {
            question: "Arrays in javascript can be used to store what ?", 
            answers: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
            correctAnswer: "4. All of the above" 
          },
          {
            question: "A very useful tool used during development and debugging for printing content to debugger is ?",
            answers: ["1. Javascript", "2. Terminal/bash", "3. For loops", "4. Console log"],
            correctAnswer: "4. Console log"
          },
          {
            question: "The condition in an if / else statement is enclosed within ?", 
            answers: ["1. Quotes", "2. Curly brackets", "3. Paraentheses", "4. Square brackets"],
            correctAnswer: "2. Curly brackets"
          },
          {
            question: "String values must be enclosed within____ when being assigned to variables", 
            answers: ["1. Commas", "2. Curly brackets", "3. Quotes", "4. Paraentheses"],
            correctAnswer: "1. Commas"
          },            
        ];

function startQuestions() {
var qShown = questionsArr.length;
for (let i = 0; i < qShown; i++) {
document.getElementById("question-title").innerHTML = questionsArr[i].question;
var checkAnswer = questionsArr[i].correctAnswer;  
        
const answersContainerEl = document.createElement("ol");
const answerText = document.createTextNode("");
const elementDiv = document.getElementById("answer");
answersContainerEl.appendChild(answerText);
elementDiv.appendChild(answersContainerEl);

// Render a new li for each answerText
var answersShown = questionsArr[0].answers.length;
for ( i = 0; i < answersShown; i++) {
var answerElNew = questionsArr[i].answers;

var answersNewVar = answerElNew.length;
for ( i = 0; i < answersNewVar; i++) {

var li = document.createElement("li");
var selectBtn = document.createElement("button");
li.setAttribute("data-index", i);
selectBtn.setAttribute("data-index", i);
li.append(selectBtn);
selectBtn.textContent = answerElNew[i];
answersContainerEl.appendChild(li);
li.style.padding = "0px";

}

}
}
}

/*
function playSounds(event) {
  var sound=new Audio(); 
  event.preventDefault();
  if(answerEl === checkAnswer) {
    selectBtn.addEventListener('click', playSounds);
    sound.src = 'assets/sfx/correct.wav'; 
    sound.play();
    console.log('Correct!');
    i++;
  }else{
    selectBtn.addEventListener('click', playSounds); 
    sound.src = 'assets/sfx/incorrect.wav'; 
    sound.play();
    console.log('Incorrect!');
    i++; 
  }
  };
  playSounds();

}
}
}
};
*/
  startQuestions();
/*
document.querySelector('button').addEventListener('click', function() {
  var context = new AudioContext();
  // Setup all nodes
  // ...
});

var sound = new Audio(); 
      function playSounds() { 
        if(questions.question[0].answer[0][2] || questions.question[1].answer[1][3]){
      selectBtn.addEventListener('click', playSounds);
      sound.src = 'assets/sfx/correct.wav'; 
      sound.play();
      console.log('correct!'); 
    }else{
      selectBtn.addEventListener('click', playSounds); 
      sound.src = 'assets/sfx/incorrect.wav'; 
      sound.play() 
    }
    };

    selectBtn.addEventListener('click', questions.questionTitle); 
 
*/



