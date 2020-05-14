/*
  LETTER COUNT

  1. Create a variable, named "word," which contains any lengthy word.
  2. Create a second variable, named "letter," which contains any
      letter. 
  3. Write a WHILE statement which loops over the "word" string and
     counts the number of times the "letter" appears.
  4. If the letter is found in the string, display on the page: "The letter X
     exists N times in this word!" (replacing "X" with
     the letter guessed and "N" with the letter count).
  5. If the letter isn't found in the string, display on the page: "Nope, that
     letter doesn't exist in my word!"
  6. OPTIONAL: Use an input textbox and click event listener to get user input
     for the "letter" variable in Step 2.

  TIP: What do we mean by "display on the page"? `.innerHTML` could achieve
       this!

*/

// YOUR CODE HERE

const word = ["blaupunktpunktblau"];
const letterGuessed = "y";

let letterCount = 0
let position = 0
while (position < word.length) {
   const currentLetter = word[position]
   console.log(position)

   const letterMatch = currentLetter.toLowerCase
   if (currentLetter.toLowerCase() === letterGuessed.toLowerCase) {
      letterCount += 1

   }

   postion += 1
}
console.log(letterCount)
const outputElement = document.querySelector('main')


let unknownletter = document.querySelector("#guess-button");
let guess = document.querySelector("#guess");
let result = document.querySelector("#result");
let word = "jaguar"


unknownletter.addEventListener('click', function () {
   let i = 0
   let count = 0
   let letter = guess.value.trim().toLowerCase()
   while (i < word.length) {
      if (letter == word[i]) {
         count++
      }
      i++
   }
   if (count > 0) {
      result.innerText = 'the letter ' + letter + ' exists ' + count + ' times in my word!'
   } else {
      result.innerText = 'nope, the letter ' + letter + ' does not exist in my word!'
   }
})



