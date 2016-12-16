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
let Player1 = new Player(0, 60);

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
    }

  }, 1000);
}
//Outputting Counter
counter();
//printing Question 1
printQA(0);
//Updating Score
$('#score').html(Player1.score);
