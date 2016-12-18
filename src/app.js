console.log('App.js is connected');
//Putting questions into an array
let Questions = [
   new Question('Question 1' , ['question 1', 'blue', 'green', 'yellow-correct'] , 'yellow-correct'),
   new Question('Question 2' , ['question 2', 'blue', 'green-correct', 'yellow'] , 'green-correct'),
   new Question('Question 3' , ['question 3', 'blue-correct', 'green', 'yellow'] , 'blue-correct'),
   new Question('Question 4' , ['question 3', 'blue', 'green-correct', 'yellow'] , 'green-correct'),
   new Question('Question 5' , ['I"m correct', 'blue', 'green', 'yellow'] , 'I"m correct'),
   new Question('Question 6' , ['orange', 'blue', 'I"m correct', 'yellow'] , 'I"m correct'),
]

//Creating a Player
let Player1 = new Player(0, 59);
//Creating computer
let Computer1 = new Computer(0, 15);

//End Game Screen - Restart Game
function endStartNew() {
    //Hiding Quiz Questions + Timer,
    $('#options').velocity('slideUp', {duration:800});
    $('#question').velocity('slideUp', {duration:800});
    $('#timer').velocity('slideUp', {duration:800});
    $('#clock>h3').velocity('slideUp', {duration:800});
    //making try again button appear
    $('#tryAgain').toggle();
    if(Player1.score>Computer1.score) {
      alert('You have defeated the Comptuer');
    }
    if(Player1.score==Computer1.score) {
      alert('You have tied the Comptuer');
    }
    else if(Player1.score<Computer1.score) {
      alert('The computer has beaten you!')
    }

}


//printing Question 1
printQA(0);
//Outputting Initial Score
$('#playerScore').html(Player1.score);
$('#computerScore').html(Computer1.score);
