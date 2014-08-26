$(document).ready(function() {
//-------------------------------------------------------------
//-------------------------------------------------------------	
//FUNTIONS-------------------------------------------------------
//-------------------------------------------------------------	
//-------------------------------------------------------------


var globalSecretNum;
//start new game function
var newGame = function() {
    //generate secret number between 1 and 100
    resetGuess();
    resetCounter();
	resetGuessList();	
	resetFeedback();
    secretNumber();
    resetGuess();

};

//GENERATE RANDOM NUMBER
var secretNumber = function() {
    var randomNumber = Math.floor(Math.random() * 99);
    globalSecretNum = randomNumber;
    console.log(randomNumber);
    return randomNumber;
};

//GUESS Functionaliyu	
var guess = function(userInput) {

	var distanceFromNum = Math.abs(userInput - globalSecretNum);
	
	if(userInput <1 || userInput > 100){$('#feedback').text('Enter a number between 1 and 100')}
		
    else if (userInput != "") {
	$("ul#guessList").append("<li>"+userInput+"</li>");
        guessCounter();
        resetGuess();
        console.log("user Input:" + userInput + "Number is:" + globalSecretNum);
        
		//hot
        if (distanceFromNum == 0) {
            $("#feedback").text("you got it!")
        } else if (distanceFromNum <= 5) {
            $("#feedback").text("you be getting hot!!");
        }
        //warm
        else if (distanceFromNum <= 15) {
             $("#feedback").text("you be gettin warmer!!");
        }
        //cold
        else if (distanceFromNum <= 30) {
            $("#feedback").text("you be cold!!");
        }
        //ice cold
        else {
             $("#feedback").text("Ice ice cold baby")
        }

    }
	
	
};

//The Guess Counter
var guessCounter = function() {
    var guessCount = parseInt($("#count").text());
    guessCount++;
    $("#count").text(guessCount);
}


//-------------------------------------------------------------	
//RESETS-------------------------------------------------------
//-------------------------------------------------------------	

var resetCounter = function() {
    $("#count").text(0);
};

var resetGuess = function() {
    $("#userGuess").val("");
};

var resetGuessList = function(){
	 $("#guessList li").remove("");
	};

var resetFeedback = function(){
	$("#feedback").text("Make your Guess!");
	};


    //Start New Game on Load
    newGame();

    //Start new game on click
    $(".new").on("click", function() {
        newGame();
    });

    //guess
    $("#guessButton").on("click", function(e) {
        e.preventDefault();
		var userGuess = $("#userGuess").val();
        guess(userGuess);
		
    });

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });


});

