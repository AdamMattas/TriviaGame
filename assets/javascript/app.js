$(document).ready(function(){
	//Initialize global variables
	var vid1 = document.getElementById("video1");
	//organize questions and possible answers and answer videos in object
	var pos = 0, trivia, triviaStatus, question, choice, choices, ch1, ch2, ch3, correct = 0, incorrect = 0, counter;
	var questions = [
		["What was the name of Homer's motorcycle gang?", "The Christ Punchers", "The Hell's Satans", "The Fat Boys", "2", vid1],
		["What is Principal Skinner's real name?", "Armin Tamzarian", "Skip Rhodes", "Hans Moleman", "1", vid2],
		["What was Lisa's nickname at school when she pretended to be a boy in order to attend the boys only classes?", "Skid Mark", "Toilet", "Brain Boy", "2", vid3]
	];
	var gameTimer = {
    time:30,
    reset: function(){
        gameTimer.time = 30;
        $('#display').html('30');
    },
    start: function(){
        counter = setInterval(gameTimer.count, 1000);
    },
    stop: function(){
        clearInterval(counter);
    },
    count: function(){
        gameTimer.time--;
        var converted = gameTimer.timeConverter(gameTimer.time);
        $('#display').html(converted);
    },
    timeConverter: function(t){
        var seconds = t;
        if (seconds <= 0){
            skipQuestion();
        }
        return seconds;
    }
	};

	$(document).on('click', '.new', function(){
		showQuestion();
	});

	function showQuestion(){
		//check if game is over and display the score and show button to restart the game
		if(pos >= questions.length){
			$('#trivia').html("<h2>You got "+correct+" of "+questions.length+" questions correct</h2>");
			$('#triviaStatus').html('Test Completed');
			pos = 0;
			correct = 0;
			incorrect = 0;
		}else{
			gameTimer.stop();
			gameTimer.reset();
			gameTimer.start();
			//select question by the pos variable
			$('#triviaStatus').html("Question "+(pos+1)+" of "+questions.length);
			question = questions[pos][0];
			ch1 = questions[pos][1];
			ch2 = questions[pos][2];
			ch3 = questions[pos][3];
			$('#trivia').html("<h3>"+question+"</h3>");
			$('#choice1').html(ch1);
			$('#choice2').html(ch2);
			$('#choice3').html(ch3);
		}
	};

	function skipQuestion(){
		incorrect++;
		gameTimer.stop();
		questions[pos][5].play();
		questions[pos][5].addEventListener('ended', function(e) {
			pos++;
			showQuestion();
		});

		//showQuestion();
	};

	//check if guess is correct and record correct and incorrect guesses
	$('.choices').on('click', function(){
		guess = $(this).attr('value');
		if(guess == questions[pos][4]){
			correct++;
			gameTimer.stop();
			questions[pos][5].play();
			questions[pos][5].addEventListener('ended', function(e) { 
				showQuestion();
			});
		}else{
			incorrect++;
			gameTimer.stop();
			questions[pos][5].play();
			questions[pos][5].addEventListener('ended', function(e) { 
				showQuestion();
			});
		}
		pos++;
		console.log(correct);
		console.log(incorrect);	
	});

});

//set timer for question

//if no answer is chosen and timer runs out, the correct answer is displayed

//check to see if all questions have been asked and if game is over

//automatically select a new question and restart the timer