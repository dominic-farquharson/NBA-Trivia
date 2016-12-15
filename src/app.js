//Player Class
class Player {
  constructor(timer, questions) {
    this.timer = timer;
    this.questions = questions;
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

//testing
let Player1 = new Player(60, 'hello');
console.log(Player1.timer);
console.log(Player1);
Player1.timerDecrease();
console.log(Player1.timer);
console.log(Player1);
