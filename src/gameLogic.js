console.log('gameLogic is connected');
let x = 0;
function print(y) {
    console.log(Questions[y])
}

//Grabbing innerHTML of question choices to compare with correct answer
$(`.option0`).click(function(){checkRight(this.innerHTML)});
$(`.option1`).click(function(){checkRight(this.innerHTML)});
$(`.option2`).click(function(){checkRight(this.innerHTML)});
$(`.option3`).click(function(){checkRight(this.innerHTML)});



//printing questions and answer
function printQA(x) {
    //using Velocity to add a fade effect
    $('#question').text(Questions[x].question).velocity('fadeIn', {duration:200});
    for(let y = 0; y <4; y++) {
    $(`.option${y}`).text(Questions[x].answerChoices[y]).velocity('fadeIn', {duration:600});
  }
}


//index will represent question number, using it to change questions after correct answer selection
let index=0;
//Check if Choice is correct answer
function checkRight(userChoice) {
Computer1.move();
  if(userChoice === Questions[index].correctAnswer){
    //Temporary: Preventing error when question index greater than # of questions
    //changing question 1
    index++;
    if(index>4){
      endStartNew();

    }
    //updating score if correct
    Player1.updateScore();
      $('#score').text(Player1.score);

    //Alert Correct
    // alert('Correct!');
    //changing Question
    printQA(index)}
    else {
      //moving computer car
      //Computer1.move();

      // alert('Wrong!');
      console.log(index);
    //change Questions
      index++;
      if(index>4){
        endStartNew();
      }
      printQA(index);
    }

  }
