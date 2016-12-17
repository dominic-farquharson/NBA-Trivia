console.log('Player is connected');
//add user attempts
class Player {
  constructor(score, time) {
    this.score = score;
    this.time = time;
  }

  updateScore() {
    this.score+=1;
  }
}
//Make computer move
let move = 50;
class Computer {
  constructor(score, time) {
    this.score = score;
    this.time = time;
  }
  move() {
    console.log(move);
    $('#car').velocity({translateX:600},{duration:60000}, {easing: 'easeInBounce' });
      console.log(move);

  }

}
