// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
// console.log(new Date)

const displayDate = () => {
  const currentDate = new Date();
  return currentDate;

  // document.getElementById("display-element").innerHTML = currentDate;
}
 
console.log(displayDate())

// Write a JavaScript program to convert a number to a string.

const numToString = (x) => {
  let numString = x.toString();
  console.log(`${numString} has changed from type Number to a type String.`);
  console.log("This is indeed the typeof: " + typeof numString)
}

numToString(12.5)
numToString(3)

// Write a JavaScript program to convert a string to the number.

const stringToNumber = (y)  =>  {
  let stringNum = parseFloat(y)
  console.log(`${stringNum} has converted from a String to a Number`)
  console.log("This is indeed the typeof: " + typeof stringNum)
}

stringToNumber('8.4')
stringToNumber('4')

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  
const diffData = (data) =>  {
  let whatType = typeof(data)
  console.log(whatType)
}

diffData(true)               // * Boolean
diffData(null)               // * Null
diffData(undefined)          // * Undefined
diffData(3.33)               // * Number
diffData(NaN)                // * NaN
diffData('I love my dog.')   // * String

// Write a JavaScript program that adds 2 numbers together.

const addTwo = (num1, num2) =>  {
  let sum = (num1 + num2);
  console.log(sum)
}

addTwo(6, 10)
addTwo(12, 26)

// Write a JavaScript program that runs only when 2 things are true.

const theseAreTrue = (statement1, statement2) =>  {
  if (statement1 && statement2)  {
    console.log('These are both TRUE.')
  } else  {
    console.log("At least one of these is not TRUE")
  }
}

theseAreTrue(true, true)
theseAreTrue(false, true)
theseAreTrue(null, true)
theseAreTrue(3, 3)
theseAreTrue(NaN, 6)
theseAreTrue(-1, 8)

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneIsTrue = (statement1, statement2) =>  {
  if (statement1 || statement2)  {
    console.log('At least on is TRUE.')
  } else  {
    console.log("Both are FALSE")
  }
}

oneIsTrue(true, false)
oneIsTrue(true, true)
oneIsTrue(false, false)
oneIsTrue(null, true)
oneIsTrue(1, -1)
oneIsTrue(0, 0)

// Write a JavaScript program that runs when both things are not true. 

const theseAreFalse = (statement1, statement2) =>  {
  if (!statement1 && !statement2)  {
    console.log('These are both NOT TRUE.')
  } else  {
    console.log("At least one of these is TRUE")
  }
}

theseAreFalse(false, false)
theseAreFalse(false, true)
theseAreFalse(null, null)
theseAreFalse(0, 1)
theseAreFalse(0, 0)
theseAreFalse(true, true)

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
