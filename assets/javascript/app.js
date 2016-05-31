//Initialize global variables
var pos = 0, trivia, triviaStatus, question, choice, choices, ch1, ch2, ch3, correct = 0, incorrect = 0;
var questions = [
	["What was the name of Homer's motorcycle gang?", "The Christ Punchers", "The Hell's Satans", "The Fat Boys", "2"],
	["What is Principal Skinner's real name?", "Armin Tamzarian", "Skip Rhodes", "Hans Moleman", "1"],
	["What was Lisa's nickname at school when she pretended to be a boy in order to attend the boys only classes?", "Skid Mark", "Toilet", "Brain Boy", "2"]
];

$(document).ready(function(){

	$(document).on('click', '.new', function(){
		showQuestion();
	});

	function showQuestion(){
		$("#triviaStatus").html("Question "+(pos+1)+" of "+questions.length);
		question = questions[pos][0];
		ch1 = questions[pos][1];
		ch2 = questions[pos][2];
		ch3 = questions[pos][3];
		$("#trivia").html("<h3>"+question+"</h3>");
		$("#choice1").html(ch1);
		$("#choice2").html(ch2);
		$("#choice3").html(ch3);
	};

	$('.choices').on('click', function(){
		guess = $(this).attr('value');
		if(guess == questions[pos][4]){
			correct++;
		}else{
			incorrect++;
		}
		pos++;
		console.log(correct);
		console.log(incorrect);
		showQuestion();	
	});

});

//organize questions and possible answers and answer videos in object

//randomly select question

//set timer for question

//if answer is selected, check if it is correct or incorrect

//record correct and incorrect guesses

//if no answer is chosen and timer runs out, the correct answer is displayed

//check to see if all questions have been asked and if game is over

//automatically select a new question and restart the timer

//if game is over, display the score and show button to restart the game