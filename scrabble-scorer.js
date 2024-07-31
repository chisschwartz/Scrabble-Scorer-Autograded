// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
      word[i];
	  for (const pointValue in oldPointStructure) {
      letterPoints[oldPointStructure[pointValue][i]];
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}
	return letterPoints;
 };

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   word = input.question("Let's play some scrabble! Enter a word:");
   return word;
};

let newPointStructure = transform(oldPointStructure)
//console.log(newPointStructure);
//console.log(newPointStructure[0]);


let simpleScorer = function(word) {
      //console.log(word.length);
      return word.length;
};

let vowelBonusScorer = function(wordChosen) {
   let totalPoints = 0
    for (let index = 0; index < wordChosen.length; index++) {
      let vowels = ["a" , "e" , "i" , "o" , "u" , "y"]
      if (vowels.includes(wordChosen[index].toLowerCase())) {
         totalPoints += 3;
      } else {
         totalPoints += 1;
      } 
   }
   return totalPoints;
};

let scrabbleScorer = function(chosenWord) {
transform(oldPointStructure);
chosenWord = chosenWord.toLowerCase();
let totalScore = 0;

   for (let index = 0; index < chosenWord.length; index++) {
      chosenWord[index];
      totalScore += newPointStructure[chosenWord[index]];
   }
   return totalScore;
};

let simpleScore = {
   name : "Simple Score",
   description : "Each letter is worth 1 point.",
   scorerFunction: simpleScorer,
};

let bonusVowels = {
   name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction: vowelBonusScorer,
};

let Scrabble = {
   name: "Scrabble",
   description: "The traditional scoring method.",
   scorerFunction: scrabbleScorer,
};

const scoringAlgorithms = [simpleScore, bonusVowels, Scrabble];

function scorerPrompt(wordChosen) {
   console.log(`0: ${scoringAlgorithms[0].name} \n 1: ${scoringAlgorithms[1].name} \n 2: ${scoringAlgorithms[2].name}`);
   chosenScorer = input.question("Which scorer would you like to use? \n enter 0, 1, or 2: ")
   if (chosenScorer === "0") {
     return scoringAlgorithms[0].scorerFunction(wordChosen); 
   } else if (chosenScorer === "1") {
      return scoringAlgorithms[1].scorerFunction(wordChosen);
   } else {
      return scoringAlgorithms[2].scorerFunction(wordChosen);
   }
};

function transform(oldPointStructure) {
   let newPointStructure = {};

   // newStructure =  {"a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, 
   //  "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, 
   //  "x": 8, "y": 4, "z": 10};

   for (const pointValue in oldPointStructure) {
   for (let index = 0; index < oldPointStructure[pointValue].length; index++) {
         newPointStructure[oldPointStructure[pointValue][index].toLowerCase()] = Number(pointValue);
      }
   }
   return newPointStructure;
};

function runProgram() {
   //console.log(oldScrabbleScorer(initialPrompt()));
   console.log(scorerPrompt(initialPrompt()));
};

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
