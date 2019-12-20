var question = "How old is Timmy?";
var answers = ['64', '55', '70', '89'];
var answerButtons = document.getElementsByClassName('quizButton');
var correct = 0; 

document.getElementById('question').innerHTML = question;

for(var spot=0; spot<answers.length; spot++)
{
     answerButtons[spot].innerHTML = answers[spot];
     
     answerButtons[spot].addEventListener('click', function(){
    if(this.innerHTML == answers[correct]){
        this.setAttribute('style', 'background-color:rgb(76,175,80);');
    } else {
        this.setAttribute('style', 'background-color:rgb(210,50,35);');
    }
});
     
}
function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:rgb(110,60,35);');
}

function disableALL() {
    for(var num=0; num<answerButtons.length; num++){
        answerButtons[num].setAttribute('disabled', true);
    }
}

for(var spot=0; spot<answers.length; spot++)
{
    answerButtons[spot].innerHTML = answers[spot];

    answerButtons[spot].addEventListener('click', function() {
        disableALL(); 
        if(this.innerHTML == answers[correct]) {
            this.setAttribute('style','background-color:rgb(76,175,80);');
        } else {
            this.setAttribute('style','background-color:rgb(210,50,35);');
        }
    });
}
