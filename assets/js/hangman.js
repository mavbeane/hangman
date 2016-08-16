window.onload = function() {

//Set up global variables'
	var wordSelection = ['FULL HOUSE', 'SEINFELD', 'SAVED BY THE BELL', 'HOME IMPROVEMENT', 'FAMILY MATTERS', 'THE NANNY', 'ROSEANNE', 'FRASIER', 'BLOSSOM', 'PARTY OF FIVE', 'NORTHERN EXPOSURE', 'NYPD BLUE', 'DAWSONS CREEK', 'WINGS', 'COACH', 'DESIGING WOMEN', 'FRESH PRINCE'];
	var wins = 0;
	var loses = 0;
	var guessesArray = [];
	var guessesDiv = document.getElementById('guessed_letters');
	var gamesCount = 0
	var won;

	var onGameOver = function() {
	    // Display Win and Loses
	    document.getElementById('wins').innerHTML = wins;
	    document.getElementById('loses').innerHTML = loses;
	    guessesArray = [];
	    var won;
	    console.log('guessesArray');
	    guessesDiv.innerHTML = guessesArray;
	    document.getElementById('play_game').innerHTML = 'Play Again';
	    document.getElementById('overlay').classList.remove('display-none');

	    // Display Win/Lose text + Play again button

	    //document.getElementById('play_again').classList.add('display-block').onclick = startGame;
	    // Display Win/Lose text + Play again button

	    //if wins or loses == 10 then restart stats

	  };

	  //var startGame = document.getElementById('play_game');
	  document.getElementById('play_game').onclick = startGame;

	  /*if (gamesCount + 1 == wordSelection.length) {
	  	alert('Sorry we are out of words! Refresh to replay!')
	  }*/

	  function startGame() {

	    document.getElementById('overlay').classList.add('display-none');

	    var guess;
	    var spaces;
	    var lives = 10;
	    var livesDiv = document.getElementById('guess_count');

	    //Display Lives
	    livesDiv.innerHTML = lives;

	    //Random word is selected
	    var word = wordSelection[Math.floor(Math.random() * wordSelection.length)];
	    //var word = wordSelection[gamesCount];
	    console.log(word);
	    /*if (index > -1) {
		    		array.splice(index, 1);
					console.log(word);
					onsole.log(word);
				}*/
	    // variable + append – Add word to Screen with _ and spaces 

	    //var showWord = [word];
	    //Show word placeholder
	    var wordArray = word.split("");
	    console.log(wordArray);
	    var wordDisplayedArray = [];
	    var wordDiv = document.getElementById('word_placeholder');

	    for (var i = 0; i < word.length; i++) {

	      if (wordArray[i] == ' ') {

	        wordDisplayedArray.push(' &nbsp; ');

	      } else {

	        wordDisplayedArray.push('_');

	      }
	      console.log(wordDisplayedArray);

	    };
	    wordDiv.innerHTML = wordDisplayedArray.join(' ');

	    /* for (var i = 0; i < wordDisplayedArray.length; i++) {
	    	console.log('hello');
	    	var underscorePlacement = wordDisplayedArray.indexOf('_');
	    	console.log(underscorePlacement);

	    	if (underscorePlacement < 0) {
	    		won = true;
	    	}
	    	console.log(won);
	    }; */

	    document.onkeyup = function(event) {

	      if (lives == 0) {
	        loses++;
	        document.getElementById('win_lose').innerHTML = 'You lOsT! The wOrd waS ' + word + '!';
	        onGameOver();
	        gamesCount++;
	      }
	      /*else if () {
	      		alert('You win')
	      } */
	      // User Guesses letter – Make sure letter is chosen on keyup
	      else if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 97 && event.keyCode <= 122) {

	        guess = String.fromCharCode(event.keyCode).toUpperCase();
	        console.log(guess);

	        var letterPlacement = word.indexOf(guess);
	        console.log(letterPlacement);
	        //IF guess letter not found

	        console.log(guessesArray);

	        if (wordDisplayedArray.indexOf(guess) != -1 || guessesArray.indexOf(guess) != -1) {

	          alert('You already guessed that letter!');

	        } else if (letterPlacement < 0) {
	          // --remainingGuesses
	          guessesArray.push(guess);
	          guessesDiv.innerHTML = guessesArray.join(' ');
	          wordDiv.innerHTML = wordDisplayedArray.join(' ');
	          lives--;
	          livesDiv.innerHTML = lives;

	        } else if (letterPlacement >= 0) { // find all letter
	          console.log('this is correct');
	          wordDisplayedArray[letterPlacement] = guess;

	          for (var i = letterPlacement; i < word.length; i++) {
	            letterPlacement = word.indexOf(guess, i);
	            wordDisplayedArray[letterPlacement] = guess;
	            //console.log(wordDisplayedArray);
	          };
	          //	for (var i = letterPlacement; i < word.length; i++) {
	          //		var underscores = 
	          //		if letterPlacement = word.indexOf('_', i) {

	          //		}
	          //	}

	        };

	        wordDiv.innerHTML = wordDisplayedArray.join(' ');

	        for (var i = 0; i < wordDisplayedArray.length; i++) {
	          var underscorePlacement = wordDisplayedArray.indexOf('_');
	          if (underscorePlacement < 0) {
	            won = true;
	          }
	        };
	        if (won == true) {

	          wins++;
	          document.getElementById('win_lose').innerHTML = 'YOu WoN!';
	          onGameOver();
	          gamesCount++;
	        };
	      };
	    }; //end of on keyup	
	 }; //End document play_game
};