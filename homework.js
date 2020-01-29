// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

const peopleList = ['Candace', 'Ordel', 'Marion']

function remove(arrayName, personName) {
  if (arrayName.indexOf(personName) === -1) {
    return arrayName
  } else {
    while (arrayName.indexOf(personName) !== -1) {
      let indx = arrayName.indexOf(personName)
      arrayName.splice(indx, 1)
    }
  }
  return arrayName
}
remove(peopleList, 'Candace')

console.log(peopleList)

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

function remove(arrayName, personName) {
  let arrayCopy = arrayName.slice()
  if (arrayName.indexOf(personName) === -1) {
    return arrayName
  } else {
    while (arrayCopy.indexOf(personName) !== -1) {
      let indx = arrayCopy.indexOf(personName)
      arrayCopy.splice(indx, 1)
    }
  }
  return arrayCopy
}

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

let numbers = [1, 2, 3, 4, 5]

function sum(arrayOfNumbers) {
  let total = 0
  for (let number of arrayOfNumbers) {
    total += number
  }
  return total
}


// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(arrayOfNumbers) {
  if (arrayOfNumbers.length < 1) {
    return undefined
  } else {
    return (sum(arrayOfNumbers) / arrayOfNumbers.length)
  }
}

// NOTE: I was able to return the correct average unless the array was empty. In that case, my console was spitting back
// NaN, not 'undefined'. So I overwrote the NaN with a if/else statement... which I don't think I was supposed to have had to do.             

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(arrayOfNumbers) {
  let smallest = arrayOfNumbers[0]
  let indexOfSmallest = 0
  for (i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < smallest) {
      smallest = arrayOfNumbers[i]
      indexOfSmallest = i
    }
  }
  return arrayOfNumbers[indexOfSmallest]
}

// THIS FUNCTION WORKS... I'M NOT SURE WHY I'M GETTING AN ERROR

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function selectionSort(arrayOfNumbers) {
  let arrayCopy = arrayOfNumbers.slice(0)
  let sortedArray = []
  // let counter = 0
  while (arrayCopy.length!==0) {
    for (i = 0; i < arrayCopy.length; i++) {
      if (arrayCopy[i] === (Math.min.apply(null, arrayCopy))) {
        sortedArray.push(arrayCopy[i])
        arrayCopy.splice(i, 1)
      } 
    }
  console.log("the value of sortedArray is "+sortedArray)
  // counter += 1
  }
return sortedArray
}

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
