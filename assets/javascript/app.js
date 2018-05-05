$(document).ready(function() {
    var index = 0;
    var countdownTimer = {
          time : 30,
        reset: function() {
                this.time = 30;
                $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
            },
            start: function() {
                counter = setInterval(countdownTimer.count, 1000);	
            },
            stop: function() {
                clearInterval(counter);
            },
            count: function() {
                    countdownTimer.time--;
                    console.log(countdownTimer.time);
    //				$('.timer').html(countdownTimer.time);
                if (countdownTimer.time >= 0) {
                    $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
                }
                else {
                    index++;
                    answerWrong();
                    countdownTimer.reset();
                    if (index < questionArray.length) {
                        loadQuestion(index);
                    } else {
                        $(".answerchoice").hide();
                        showScore();
                    }
                }
            }
        };
    
        //variables contain questions and answers
    var correct = 0;
var wrong = 0;
var q1 = {
	question : "If I wanted to imitate thunder in a musical way, would I most likely use Bass Clef notes or Treble Clef notes?",
	possibleAnswers : ['A. Bass Clef',
				 'B. Treble'],
	flags : [true, false],
	answer : 'A. Bass Clef'
};

var q2 = {
	question: 'Which dynamic symbol tells you to play loud?',
	possibleAnswers: ['A. P',
				 'B. F'],
	flags : [false, true],
	answer : 'B. F'
};

var q3 = {
	question : 'What separates Treble Clef notes from Bass Clef notes?',
	possibleAnswers : ['A. Middle C',
				 'B. High C',
				 'C. Low C',],
	
	flags : [true, false, false],
	answer : 'A. Middle C'
};

var q4 = {
	question : 'Which one of these would be considered a string instrument?',
	possibleAnswers : ['A. Violin',
				 'B. Trombone',
				 'C. Tambourine'],
	flags : [true, false, false],
	answer : 'A. Violin'
};

var questionArray = [q1, q2, q3, q4];
    

//loading up our questions!
    function loadQuestion(questionSelection) {
        console.log(questionSelection);
        countdownTimer.reset();
      $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
      $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
      $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
      $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
      $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
    //  getAnswer();  
    //  nextQuestion(index);
    }
    
    //function nextQuestion() {
    //	index = index++;
    //	console.log(index);
    //}
    
    function setup() {
        index = 0;
        $('.question').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function() {
            $(this).hide();
            countdownTimer.start();
             loadQuestion(index);
        });
    }		
    
    function getAnswer() {
    
    //  nextQuestion();
        $('.answerchoice').on('click', function() {
          console.log('alert', index);
            index++;
            console.log('click', index);
            $(".question").text('');
            $("#buttonA").text('');
            $("#buttonB").text('');
            $("#buttonC").text('');
            $("#buttonD").text('');
            loadQuestion();
        })
    }
    //what happens when we get the answer right?
    function answerCorrect() {
        correct++;
        alert("Correct!");
        console.log("correct");
    }
    
    //what happens when we hit the wrong one?!
    function answerWrong() {
        wrong++;
        alert("Incorrect!");
        console.log("wrong");
    }
    
    //showing the final score
    function showScore() {
        $('.question').empty();
        $('.question').append("<h2><p>" + correct + " correct</p></h2>");
        $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();
    
    }
    

    //parameters for user answers
    setup();
    $('.answerchoice').on('click', function() {
     console.log($(this));
     if(this.id == 'buttonA') {
         var answerChosen = 'A';
     } else if(this.id == 'buttonB') {
         answerChosen = 'B';
     } else if (this.id == 'buttonC') {
         answerChosen = 'C';
     } else if (this.id == 'buttonD') {
         answerChosen = 'D';
     } 
     if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
         answerCorrect();
     } else if (answerChosen == 'A') {
         answerWrong();
     }
     if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
         answerCorrect();
     } else if (answerChosen == 'B') {
         answerWrong();
     }
    if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
         answerCorrect();
     } else if (answerChosen == 'C') {
         answerWrong();
     }
    if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
         answerCorrect();
     } else if (answerChosen == 'D') {
         answerWrong();
     }
    

     
     $(".question").text('');
     $("#buttonA").text('');
     $("#buttonB").text('');
     $("#buttonC").text('');
     $("#buttonD").text('');
     index++;
     if (index < questionArray.length) {
         loadQuestion(index);
     } else {
         $(".answerchoice").hide();
         showScore();
     }
    });
    
    
    //	$('#start').click(countdownTimer.start);
    });