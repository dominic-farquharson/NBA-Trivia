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
    $('#question').text(Questions[x].question).attr('value', x);
    for(let y = 0; y <4; y++) {
    $(`.option${y}`).text(Questions[x].answerChoices[y])
  }
}


//index will represent question number, using it to change questions after correct answer selection
let index=0;
//Check if Choice is correct answer
function checkRight(userChoice) {

  if(userChoice === Questions[index].correctAnswer){
    console.log('Correct!'); index++;
    //Temporary: Preventing error when question index greater than # of questions
    if(index>4){
      index=0;
    }
    //updating score if correct
    Player1.updateScore();
    $('#score').html(Player1.score);
    //changing Question
    printQA(index)}
    else {
      console.log('incorrect')
    }
  }
