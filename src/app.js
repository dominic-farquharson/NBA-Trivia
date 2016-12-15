
let counter = $('#timer');



//Player Class
class Player {
  constructor(timer, questions, attempts, input) {
    this.timer = timer;
    this.questions = questions;
    this.attempts = attempts;
    this.input = input;
  }
  //Methods
  //Counter - starts game
  counter() {

    let counters = this.timer;
    //Interval runs every second
    let timer = setInterval(function() {
    counter.html(counters + 's');
      counters--;
      if(counters === -1) {
        // alert('time is up');
        clearInterval(timer);
      }

    }, 1000);



  //Decrease the timer
  }
  timerDecrease() {
    counter.html(-5);
  }

  //Increase the timer
  timerIncrease() {
    counter.html(+5);
  }

}
//Creating Player 1
let Player1 = new Player(60,'hello', 2);
//Grabbing Answer Choice Inputs
/*
$('.one').click(Player1.checkRight);
$('.two').click(Player1.checkRight);

  //Player.checkRight);
*/

//Questions class
class Questions {
  constructor(question, answer, choices) {
    this.question = question;
    this.answer = answer;
    this.choices = choices;
  }

  //Check if Question is right or wrong
  checkRight(x) {
  
    //User selection, will change this
    //let response = $('#answerSelection').val();
    // console.log(response);
    // let testarr = $('.questions').filter(function(a) {
    //   return $(a).text() === this.answer;
    // });
    // console.log('Test Array: ', testarr);

    if( x == this.answer) {
      console.log('you are correct');


      //$('#testing').html(allQuestions[1]);
      //Player1.timerIncrease();

    }
    else {
      //Player1.timerDecrease;
      //console.log(Player1.timer);
      //$('#timer').html(console.log(Player1.timer -= 5) )
      console.log('incorrect');
    }
  }

  //Function to output Question
  printQuestions() {
      $('#questions').html(this.question);
  }
  //Function to output answers

  printChoices() {
    let answerChoice = 1;
    let ul = $('<ul />').appendTo('#answers');
    for (let index of this.choices) {
    let li = $('<li />');
    //setting answer attribute to check for correct answer
    li.append(index).attr({'class': 'questions', 'value':answerChoice, 'id':'question'+answerChoice});
    answerChoice++;

    ul.append(li);
  }


      //adding click event to check if answer is correct
    //Fat Arrow Syntax Function gives you access to outside scope


    $('#question1').click(() =>{
      console.log('Question 1' , answerChoice);
      this.checkRight(1);
    });
    $('#question2').click(() =>{
      console.log('Question 2' , answerChoice);
      this.checkRight(2);
    });
    $('#question3').click(() =>{
      console.log('Question 3' , answerChoice);
      this.checkRight(3);
    });
    $('#question4').click(() =>{
      console.log('Question 4' , answerChoice);
      this.checkRight(4);
    });



  }


  //start game
  start() {
    Player1.counter();
    $('#clock').toggle();
    this.printQuestions();
    this.printChoices();
  }

}

//Questions
let question1 = new Questions('Is your favorite color Red or blue' , 2, ['red', 'blue', 'green', 'yellow']);
let question2 = new Questions('Is your favorite color Green or Yellow' , 1, ['green', 'yellow', 'orange', 'purple']);
let start = [function(){question1.start()}, function(){question2.start()}];
//Event Listener
// $('#start').click(function(){question1.start()});
$('#start').click(start[0]);




/*
let allQuestions = [function(){question1.printQuestions()}, function(){question2.printQuestions()}];
let allAnswers =[function(){question1.printChoices()}, function(){question2.printChoices()}];
*/



//let otherQuestions =

//Change Question - Print Answers
/*
function changeQPrintA (x) {
  allQuestions[x]();
  allAnswers[x]();


let ul = $('<ul />').appendTo('#answers');
for(let index of question1.choices) {
  let li = $('<li />');
  li.html(index);
  ul.append(li);

}
}
*/




//testing
/* questions testing
Putting questions in an array
*/
//$('#testing').html(allQuestions[0]);






console.log(Player1.timer);
console.log(Player1);
//Player1.timerDecrease();
console.log(Player1.timer);
console.log(Player1);
//Player1.timerIncrease();
//Player1.timerIncrease();
console.log(Player1.timer);
