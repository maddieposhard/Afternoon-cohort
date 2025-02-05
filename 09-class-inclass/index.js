
// callback function
function processData(number, callback) {
    let result = number + 5
    callback(result)
}

function logResult(result) {
    console.log(`Processed results: ${result}`)
}

processData(10, logResult)

//

function double(number) {
    console.log(number * 2)
};
double (10);

// arrow function - condensed to a single line & automatically returns
const double2 = (number) => console.log(number * 2)
double2 (15)

//more advanced arrow function
const calculateAverage = (grades) => {
    let amountOfGrades = grades.length;
    let total = 0;
    for(let i = 0; i < grades.length; i++) {
        let currentGrade = grades[i];
        console.log(currentGrade);
        total += currentGrade
}
    console.log(total / amountOfGrades);
}
calculateAverage([10,70,50,79,90])

// higher function - array return
const doubled = (numbers) => {
    const numbersDoubled = numbers.map((num) => num * 2)
    console.log(numbersDoubled);
}

doubled([1,30,20,4,10,30,26])

//filter function
const logEvens = (nums) => {
    const evens = nums.filter((num) => num % 2 === 0)
    console.log(evens);
}

logEvens([1,30,20,4,10,30,26,3,9])

//For each function- doesnt return value just reads over what is inputed
const readNumbers = (nums) => nums.forEach((num) => console.log(num))
readNumbers([1,30,20,4,10,30,26,3,9])

//timeout functions, set timeout will perform adter a certain amount of time, set interval will perform a task at set intervals
const iTake5Seconds = () => {
    setTimeout(() => {
    console.log(`This message is logged after 5 seconds`)
    }, 5000)
}
iTake5Seconds();

const countDown = () => {
    let initialCount = 15
    setInterval(() => {
        initialCount--
        console.log(initialCount);
    }, 1000)
}
countDown();
/*

//Goal: create a calculator that has x amount of funtions to be able to take 2 numbers from a use and either sum,  multiply, divide, and subtract
//user inputs x2 - done
//buttons for operators - done
//connect html elements to js - done
//function to doMath - done
//math logic - done
//store answer - done

const inputOne = document.querySelector('#inputOne')
const inputTwo = document.querySelector('#inputTwo')
const sum = document.querySelector('#sum')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const subtract = document.querySelector('#subtract')
const submit = document.querySelector('#submit')
const clear = document.querySelector('#clear')

let selectedOperator = ''

const doMath = () => {
    //store answer
    let num1 = Number(inputOne.value)
    let num2 = Number(inputTwo.value)
    let answer = 0
    //math logic
    switch(selectedOperator){
    case 'sum':
        answer = num1 + num2
        console.log(answer)
        break;
    case 'multiply':
        answer = num1 * num2
        console.log(answer)        
        break;
    case 'divide':
        answer = num1 / num2
        console.log(answer)        
        break;
    case 'subtract':
        answer = num1 - num2
        console.log(answer)    
    default:
        console.log('please select operator')
}
}
doMath()

const sumHandler = () => {
    selectedOperator = 'sum'
    console.log(selectedOperator);
}

const multiplyHandler = () => {
    selectedOperator = 'multiply'
    console.log(selectedOperator);
}

const divideHandler = () => {
    selectedOperator = 'divide'
    console.log(selectedOperator);
}

const subtractHandler = () => {
    selectedOperator = 'subtract'
    console.log(selectedOperator);
}

sum.addEventListener('click', sumHandler) 
multiply.addEventListener('click', multiplyHandler) 
divide.addEventListener('click', divideHandler) 
subtract.addEventListener('click', subtractHandler) 


//Goal: buttons need to decide which operator to use
//use addEventListener
