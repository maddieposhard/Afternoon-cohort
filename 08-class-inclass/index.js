//datatypes- string, boolean, number
//data structure- objects {}, arrays []
/*
const arrayObject = [
    {
        email: "",
        username: "",
        password: "",
    }
]
*/

const colors = ["red", "blue", "green", "yellow"]
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

const mixedArray = [1, 'hi', true, {name: "Maddie"}, [10, 20]]

console.log(mixedArray);
console.log(mixedArray [4][1]);

colors.push('orange')
colors.pop()

colors.splice(2,1, "purple");

let newColors = colors.splice()
console.log(colors);
console.log(newColors);

//shift adds to the beginning array, pop removes at the end of the array, slice removes part of an array

let count = 3
while (count > 0) {
    console.log(count);
    count--
}

console.log("count 2:", count);


let fruits = ['apple', 'orange', 'grape', 'cherry']
for (const fruit of fruits) {
    console.log(fruit);
}


const user = {
    name: "Maddie",
    age: 31,
    profession: "nurse"
}

for (const key in user) {
    if (Object.hasOwnProperty.call(user, key)) {
        console.log(`${key}: ${user[key]}`)
    }
}


function sum() {
    let sum = 0
    let numbers = [1,20,30,80]

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i]
        sum += currentNumber
    }
    console.log(sum);
}

sum()



function doubledNumbers() {
    const numbers2 = [2,5,9,1]
    const doubled = []
    for (let i = 0; i < numbers2.length; i++) {
        let currentNumber = numbers2[i]
        let multipliedNumber = currentNumber * 2
        doubled.push(multipliedNumber)
    }
    console.log(doubled)
}
doubledNumbers()

// can be one line of code   ----   doubled.push(numbers[i] * 2)


//goal: log only even numbers
function evenNumbers() {
    const numbers = [2,5,9,1,4,6,8]
    let evens = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0)
        evens.push(numbers[i])
    }
    console.log(evens);
}
evenNumbers()
