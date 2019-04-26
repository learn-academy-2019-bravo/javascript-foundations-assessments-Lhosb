// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

let divisibleBy3 = (num) => {
  if (num % 3 === 0) {
    let response = `${num} is evenly divisible by three`
    console.log(response);
  } else {
    let response = `${num} is not evenly divisble by three`
    console.log(response);
  }
}
divisibleBy3(6)
divisibleBy3(5)

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

let helloMe = {
  first_name: 'Luke',
  last_name: 'Olson',
  age: 23,
  ocupation: 'LEARN student',
}

let describeMe = (obj) => {
  let response = `Hello! My name is ${obj.first_name} ${obj.last_name}. I am ${obj.age} years old and am a ${obj.ocupation}`
  console.log(response);
}

describeMe(helloMe)

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

let groceryList = ['pasta', 'chicken', 'bread', 'milk', 'eggs']

let printFML = (array) => {
  let firstItem = array[0]
  let middleItem = array[Math.floor(array.length / 2)]
  let lastItem = array[array.length-1]
  let groceryString = `${firstItem}, ${middleItem}, ${lastItem}`
  return groceryString
}
console.log(printFML(groceryList));

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

let testString = "learn"

let alphabetize = (str) => {
  let strArray = testString.split("")
  let alphString = strArray.sort().join("")
  return alphString
}
 console.log(alphabetize(testString));

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

let animalNums = () => {
  for (let i = 0; i < nums.length; i++) {
    let concat = nums.map(x => `${x} ${nouns[i]}`)
    console.log(concat[i]);
  }
}
animalNums()

// let concated = nums.map(v => `${v} ${nouns[nums.indexOf(v)]}`)
// console.log(concated);

// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

var numbers = [5, 7, 1, 3, 10]

let mult5 = (array) => {
  let multiplyBy5 = []
  for (let i = 0; i < array.length; i++) {
    let numBy5 = array[i] * 5
    multiplyBy5.push(numBy5)
  } return multiplyBy5
}
 console.log(mult5(numbers));

//easy method with .map
let multiplyByFive = numbers.map(v => v * 5)
console.log(multiplyByFive);
