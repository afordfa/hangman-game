	

		$(document).ready(function() {

			var cities = ["Florence", "Melbourne", "Beijing", "Dallas", "Edinburgh", "San Francisco", "New South Wales",
				"Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"];

				//https://www.youtube.com/watch?v=fHxO0UdpoxM

				//<iframe width="560" height="315" src="https://www.youtube.com/embed/fHxO0UdpoxM" frameborder="0" allowfullscreen></iframe>

			var currGame = cities[Math.floor(Math.random()*cities.length)];
			var lowerGame = currGame.toLowerCase();
			console.log(lowerGame);
			var solution = [];
			var usedLetters = [];					
			var numberWrong = 0;
			var guess = "";
			var displaySolution = $(".gameBoard");
			var displayLetters = $(".letterTracker");
			var gameOver = "no";

			$(".resetButton").on("click", function() {
     			startGame()
          	});
			
			startGame();


			function startGame() {
				currGame = cities[Math.floor(Math.random()*cities.length)];
				lowerGame = currGame.toLowerCase();
				console.log(lowerGame);
				solution = [];
				usedLetters = [];					
				numberWrong = 0;
				guess = "";
				var gameOver = "no";
				$(displayLetters).html(usedLetters.sort().join("\xa0\xa0"));

	
				//loops through the challenge word and sets the solution variable to underscores
				//to display to the user as unsolved letters.
				for (i = 0; i < currGame.length; i++) {
					if (currGame[i] === " "){
						solution[i] = "\xa0\xa0";
					}
					else {
						solution[i] = "_";
					}
				};


				
				$(displaySolution).html(solution.join("\xa0"));
				console.log(solution.join("\xa0"));


				console.log(solution.indexOf("_"));
			}
			



				//ends game after 6 wrong guesses (stickman is drawn):
						//1 - head
						//2 - body
						//3 - leg 1
						//4 - leg 2
						//5 - arm 1
						//6 - arm 2
				//also ends the game if the solution does not have any blanks "_" remaning to guess

			// while (numberWrong < 6 && solution.indexOf("_") != -1){


				
					document.onkeyup = function(event) {

		                var guess = event.key;
		                console.log(guess);
		                checkLetter(guess);
		            }
		          


				//get guess from user.  Change this to onKeyUp in final
				// guess = prompt("Guess a letter.");


				//check to see if the guess is part of the usedLetters array. If not, add it.
				//display the array to the user in alphabetical order
				//if it is already part of that array, ignore it and move to the next if statement
			
				function checkLetter(letter) {


				//check to see if the guess is part of the goal word and also
					//check to see if the letter has been guessed before
				//if it is not, add 1 to the numberWrong variable 
				//(and draw the next piece of the stick-figure)

					if (lowerGame.indexOf(letter.toLowerCase()) == -1 && usedLetters.indexOf(letter.toUpperCase()) === -1) {
						numberWrong++;
						usedLetters.push(letter.toUpperCase());
						console.log(usedLetters.sort());
						$(displayLetters).html(usedLetters.sort().join("\xa0\xa0"));
						console.log("Wrong  " + solution.join(" "));
						console.log("misses: " + numberWrong);
					}

					else if (usedLetters.indexOf(letter.toUpperCase()) === -1) {

						usedLetters.push(letter.toUpperCase());
						$(displayLetters).html(usedLetters.sort().join("\xa0\xa0"));
						console.log(usedLetters.sort());
						console.log(numberWrong);

				//if the guess is part of the goal word, update the solution array
				//everywhere the letter appears.

						for (i = 0; i < solution.length; i++) {
							if (lowerGame[i] === letter.toLowerCase()) {
								solution[i] = currGame[i];
							}
						}

					}

				//after all locations are updated, display the updated solution
				//to the user.
				$(displaySolution).html(solution.join("\xa0"));
				console.log(solution.join("\xa0"));



				//check number of incorrect guesses to determine if the user has lost the game
					if (numberWrong === 6) {
						var replay = alert("You Lose! Click OK to play again!");
						gameOver = "lose";

						
					};


				//check solution to see if user has guessed all letters and won the game
					if (solution.indexOf("_") === -1) {
					console.log(solution.join("\xa0"));alert("You Win!")
					gameOver = "win";
					};
				};
			
		});

	
	