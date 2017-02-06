	

		$(document).ready(function() {

			var animals = ["alligator", "kangaroo", "meerkat", "raccoon", "antelope"];
			var cities = ["Florence", "Melbourne", "Beijing", "Dallas", "Edinburgh", "San Francisco"];
			var numberWrong = 0;
			var guess = "";


			var test = "New South Wales";
			lowerTest = test.toLowerCase();
			console.log(lowerTest);
			var solution = [];
			var usedLetters = [];


			//loops through the challenge word and sets the solution variable to underscores
			//to display to the user as unsolved letters.
			for (i = 0; i < test.length; i++) {
				if (test[i] === " "){
					solution[i] = " ";
				}
				else {
					solution[i] = "_";
				}
			};

			console.log(solution);
			console.log(solution.join(" "));


			console.log(solution.indexOf("_"));

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

					if (lowerTest.indexOf(letter.toLowerCase()) == -1 && usedLetters.indexOf(letter.toUpperCase()) === -1) {
						numberWrong++;
						usedLetters.push(letter.toUpperCase());
						console.log(usedLetters.sort());
						console.log("Wrong  " + solution.join(" "));
						console.log("misses: " + numberWrong);
					}

					else if (usedLetters.indexOf(letter.toUpperCase()) === -1) {

						usedLetters.push(letter.toUpperCase());
						console.log(usedLetters.sort());
						console.log(numberWrong);

				//if the guess is part of the goal word, update the solution array
				//everywhere the letter appears.

						for (i = 0; i < solution.length; i++) {
							if (lowerTest[i] === letter.toLowerCase()) {
								solution[i] = test[i];
							}
						}

					}

				//after all locations are updated, display the updated solution
				//to the user.
					console.log(solution.join(" "));



				//check number of incorrect guesses to determine if the user has lost the game
					if (numberWrong === 6) {
						alert("You Lose!");
					};


				//check solution to see if user has guessed all letters and won the game
					if (solution.indexOf("_") === -1) {
						alert("You Win!")
					};
				};
			
		});

	
	