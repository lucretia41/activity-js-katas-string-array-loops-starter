/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/


// YOUR CODE HERE


const heights = [14923, 13430, 14900, 29000]


let tallestHeight = 0
let position = 0
while (position < heights.length) {
   const currentHeight = (heights)[position]
   if (currentHeight > tallestHeight) {
      tallestHeight = currentHeight
   }
   position += 1
}

alert(tallestHeight)