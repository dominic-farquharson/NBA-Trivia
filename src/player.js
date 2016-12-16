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
