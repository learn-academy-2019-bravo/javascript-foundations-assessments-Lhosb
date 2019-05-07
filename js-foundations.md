# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

Data types:
  //primitive
  1. number
  2. boolean
  3. string
  4. undefined
  5. null
  6. symbol
  //non-primitive
  7. object
  8. array
  9. empty

2. What's the difference between =, ==, and === in JavaScript?

The '===' operator tests if something is equal in both type and value.
The '==' operator tests if something is equal in just value. For example a string of '3' and the number 3 are == but not === ('3' == 3 --> True but '3' === 3 --> False).
The single equal operator '=' is used to set variable throughout a program.

3. What is the difference between an array's index and length?

The array's index starts a 0 while the array length starts at 1. An index can be used to call a certain element in a array. The length is usually used in a for loop which runs through each element of an array.

For example:
let array ['blue', 'green', 'red']
array.indexOf('blue') = 0 //the index of 'blue' is 0
array.indexOf('red') = 2 //the index of 'red' is 2
array.length() = 3 //the length of the array is 3

4. What are the three parts of a for loop?

The basic syntax of a for loop is:
  for (starting position, duration, direction)

5. What is a function's declaration, argument, and call?

A functions declaration is the name of the function. The argument is a variable that is going to be ran through the function. The argument is optional. The call is used to run a function.

Example of basic syntax:

function declaration (argument) {
  //code goes here
}

declaration(variable) //the call

6. What are the three main steps in saving work to github?

  1. git add . OR file name you changed
  2. git commit -m "what you changed"
  3. git push

7. What is the terminal command to move directories?

cd

8. Do you have a suggestion for a Check In question?

What is your favorite part about coding so far?

9. What was your favorite topic this week?

Not really a topic, but the pig-latin project was a lot of fun.

10. What was your "A-ha!" moment this week?

Definitely solving some logic in the pig-latin project.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```
'undefined'

If the variable text, either instances, were moved above the console.log but remained inside of the function, the log would print the correct value of text

2. What is JSON? How does it relate to javascript objects?

Javascript Object Notation. It is the syntax on how to build an object.

3. Describe a closure, what is it good for and how do you recognize one?

A closure is a function within a function.
