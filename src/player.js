console.log('Player is connected');
class Player {
  constructor(score, time) {
    this.score = score;
    this.time = time;
  }

  updateScore() {
    this.score+=1;
  }
}
