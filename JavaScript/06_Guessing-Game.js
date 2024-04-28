// Guessing Game :-)

// User enters a maximum number & then tries to guess a random generated number between 1 to maximum.

const max = prompt("Enter a maximum number");

const randomNumber = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
  if (guess == "quit") {
    console.log("User Quit Game");
    break;
  } else if (guess == randomNumber) {
    console.log("Congratulations!! You Win random number was :- ", randomNumber);
    break;
  } else if (guess < randomNumber) {
    guess = prompt("hint: your guess wasToo low. Please try again");
  } else {
    guess = prompt("hint: your guess was Too high. Please try again");
  }
}
