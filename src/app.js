//Player Class
class Player {
  constructor(timer, questions, attempts, input) {
    this.timer = timer;
    this.questions = questions;
    this.attempts = attempts;
    this.input = input;
  }
  //Methods
  //Decrease the timer
  timerDecrease() {
    this.timer -= 5;
  }

  //Increase the timer
  timerIncrease() {
    this.timer +=5;
  }

}
//Creating Player 1
let Player1 = new Player(60,'hello', 2);
//Grabbing Answer Choice Inputs
$('.one').click(Player1.checkRight);
$('.two').click(Player1.checkRight);

  //Player.checkRight);


//Questions class
class Questions {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  //Check if Question is right or wrong
  checkRight() {
    //User selection, will change this
    let response = $('#answerSelection').val();
    console.log(response);
    if(response== this.answer) {
      console.log('you are correct');
      $('#testing').html(allQuestions[1]);
    }
    else {
      //Player1.timerDecrease;
      //console.log(Player1.timer);
      $('#timer').html(console.log(Player1.timer -= 5) )
      console.log('incorrect');
    }
  }
}

//Questions
let question1 = new Questions('Red or blue' , 2);
let question2 = new Questions('Green or Yellow' , 1);
let allQuestions = [question1.question, question2.question]
//testing
//questions testing

$('#testing').html(allQuestions[0]);


console.log(Player1.timer);
console.log(Player1);
Player1.timerDecrease();
console.log(Player1.timer);
console.log(Player1);
Player1.timerIncrease();
Player1.timerIncrease();
console.log(Player1.timer);
