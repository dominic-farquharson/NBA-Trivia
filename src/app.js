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
  //Check if Question is right or wrong
  checkRight() {
    check(this.input);
  }

}
//Creating Player 1
let Player1 = new Player(60,'hello', 2, 3);
//Grabbing Answer Choice Inputs
$('.one').click(Player1.checkRight);

  //Player.checkRight);




//Checks for write or wrong answer
function check(x) {
  console.log('I hear you.');
  if(this.input === 3) {
    console.log('you are correct');
  }
  else {
    Player1.timerDecrease;
    console.log(Player1.timer);
  }
}

//Questions class?

//testing

console.log(Player1.timer);
console.log(Player1);
Player1.timerDecrease();
console.log(Player1.timer);
console.log(Player1);
Player1.timerIncrease();
Player1.timerIncrease();
console.log(Player1.timer);
