	

		$(document).ready(function() {

			var cities = ["Florence", "Melbourne", "Beijing", "Dallas", "Edinburgh", "San Francisco", "New South Wales",
				"Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"];

			var cities = ["Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"];

			var imgArray = new Array ();

			for (i = 0; i < 7; i++) {
				imgArray[i] = new Image();
				imgArray[i].src = "assets/images/gallows" + i + ".png"; 
			}

				//https://www.youtube.com/watch?v=fHxO0UdpoxM

				//<iframe width="560" height="315" src="https://www.youtube.com/embed/fHxO0UdpoxM" frameborder="0" allowfullscreen></iframe>

			var currGame = cities[Math.floor(Math.random()*cities.length)];
			var lowerGame = currGame.toLowerCase();
			var solution = [];
			var usedLetters = [];					
			var numberWrong = 0;
			var guess = "";
			var displaySolution = $(".gameBoard");
			$(displaySolution).attr("class", "usedHeader");
			var displayLetters = $("<p>");
			$(displayLetters).attr("class", "letterTracker");
			var gameOver = "no";
			var currentHangman = "";
			var currentHangmanImage = $(".hangman");

			$(".resetButton").on("click", function() {
     			$(".usedArea").empty();
     			startGame()
          	});
			
			startGame();


			function startGame() {
				currGame = cities[Math.floor(Math.random()*cities.length)];
				lowerGame = currGame.toLowerCase();
				currentHangmanImage.attr("src", imgArray[0].src);
				solution = [];
				usedLetters = [];					
				numberWrong = 0;
				guess = "";
				gameOver = "no";
				letterHeader = $("<h1>Letters Used</h1>"); 
				$(".usedArea").append(letterHeader);
				displayLetters.html(showUsedLetters())	
				$(".usedArea").append(displayLetters);
				showUsedLetters();

	
				//loops through the challenge word and sets the solution variable to underscores
				//to display to the user as unsolved letters.
				for (var i = 0; i < currGame.length; i++) {
					if (currGame[i] === " "){
						solution[i] = "\xa0\xa0";
					}
					else {
						solution[i] = "_";
					}
				};
				showSolution();
			};
			

			function showUsedLetters() {
				// $(displayLetters).html(usedLetters.sort().join("\xa0\xa0"));
				$(displayLetters).html(usedLetters.sort().join("\xa0\xa0"));
			}

			function showSolution() {
				if (solution.length > 20) {
					$(displaySolution).attr("class", "longSolution");
				}

				else {
					$(displaySolution).attr("class", "shortSolution");
				}

				$(displaySolution).html(solution.join("\xa0"));
			};

			// function updateHangman() {
			// 	if (numberWrong) == 0 {

			// 	} else if (numberWrong == 1) {

			// 	}
			// }



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

                guess = event.key;
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

				if (gameOver === "no" && lowerGame.indexOf(letter.toLowerCase()) == -1 && usedLetters.indexOf(letter.toUpperCase()) === -1) {
					numberWrong++;
					usedLetters.push(letter.toUpperCase());
					showUsedLetters();
				}

				else if (gameOver === "no" && usedLetters.indexOf(letter.toUpperCase()) === -1) {

					usedLetters.push(letter.toUpperCase());
					showUsedLetters();


			//if the guess is part of the goal word, update the solution array
			//everywhere the letter appears.

					for (var i = 0; i < solution.length; i++) {
						if (lowerGame[i] === letter.toLowerCase()) {
							solution[i] = currGame[i];
						}
					}

				}

			//after all locations are updated, display the updated solution
			//to the user.

				showSolution();

			//show hangman image based on number of wrong guesses
				currentHangmanImage.attr("src", imgArray[numberWrong].src);

			//if game is over, update gameOver variable. If game was won, display won image
				if (numberWrong == 6) {
					gameOver = "loss";
					// console.log(currGame);

				} else if (solution.indexOf("_") === -1) {
					gameOver = "win";
					currentHangmanImage.attr("src", "assets/images/gallowsWin.png");
					}



				if (gameOver != "no" && currGame === "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch") {
					
						$(".usedArea").empty();
						youtubeLongestCity();
					}
 			};


 			function youtubeLongestCity() {
 						videoDiv = $("<iframe>");
						// videoDiv.attr("width", "800", "height", "600", "src", "https://www.youtube.com/embed/fHxO0UdpoxM", "frameborder", "0", "allowfullscreen");
						videoDiv.attr({
							src: "https://www.youtube.com/embed/fHxO0UdpoxM",
							width: "600",
							height: "400",
							frameborder: "0",
							allowfullscreen: ""});
						// videoDiv.attr("width", "800");
						$(".usedArea").append(videoDiv);
 			}
		});

	
	