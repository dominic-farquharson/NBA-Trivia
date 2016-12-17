console.log('App.js is connected');
//Putting questions into an array
let Questions = [
   new Question('Question 1' , ['question 1', 'blue', 'green', 'yellow-correct'] , 'yellow-correct'),
   new Question('Question 2' , ['question 2', 'blue', 'green-correct', 'yellow'] , 'green-correct'),
   new Question('Question 3' , ['question 3', 'blue-correct', 'green', 'yellow'] , 'blue-correct'),
   new Question('Question 4' , ['question 3', 'blue', 'green-correct', 'yellow'] , 'green-correct'),
   new Question('Question 5' , ['I"m correct', 'blue', 'green', 'yellow'] , 'I"m correct')
]

//Creating a Player
let Player1 = new Player(0, 59);
//Creating computer
let Computer1 = new Computer(10, 15);

//timer
function counter() {
  //Interval runs every second
  //let counters = 60;
  let timer = setInterval(function() {
  $('#timer').html(Player1.time + 's');
    Player1.time--;
    if(Player1.time === -1) {
      // alert('time is up');
      clearInterval(timer);
      //End game when time is up
      alert('Time is up!');
      endStartNew();
    }

  }, 1000);
}
//End Game Screen - Restart Game
function endStartNew() {
    //$('#options').html(Player1.score);
    //Hiding Quiz Questions + Timer
    $('#options').velocity('slideUp', {duration:800});
    $('#question').velocity('slideUp', {duration:800});
    $('#timer').velocity('slideUp', {duration:800});
    $('#clock>h3').velocity('slideUp', {duration:800});





}



//Starting Car
Computer1.move();
//Outputting Counter
counter();
//printing Question 1
printQA(0);
//Updating Score
$('#score').html(Player1.score);
