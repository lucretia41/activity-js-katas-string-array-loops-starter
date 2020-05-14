/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

// YOUR CODE HERE

const Array = [1, 1, 2, 3, 3, 4]
const newArray = []

let index = 0
while (Array.length > index) {
  if (!newArray.includes(Array[index])) {
    newArray.push(Array[index])
  }
  index += 1
}
console.log("first Array" + String(Array))
console.log("New Array" + String(newArray))