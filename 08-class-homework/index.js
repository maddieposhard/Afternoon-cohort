//Exercise 1
const todo = ["laundry", "dishes", "vaccuum"]
for (let i = 0; i < todo.length; i++) {
    console.log(todo[i]);
}

todo.shift();
todo.push("dust");
console.log(todo)

//Exercise 2
function evenNumbers() {
    const numbers = [1,2,5,6,7,8];
    let evens = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evens++
        }
}
console.log(evens);
}
evenNumbers()

//Exercise 3
let colors = ['red','blue','green']
const backwards = []
for (let i = colors.length -1; i >= 0; i--) {
    backwards.push(colors[i])
}
//colors.reverse()
console.log(colors = backwards)
//console.log(backwards)

//Exercise 4
let numberSet = [1,200,5,10,50]
let maxNumber = 0
for (let i = 0; i < numberSet.length; i++) {
    if (numberSet[i] > maxNumber) maxNumber = numberSet[i]
}

//Exercise 5

function greetUsers(names) {
    const greetings = ['hello', 'hi', 'welcome', 'good morning']
    for (let i = 0; i < names.length; i++){
        let randomGreetings = greetings[Math.floor(Math.random() * greetings.length)]
        console.log(`${randomGreetings} ${names[i]}`)
    }
}
greetUsers(['maddie', 'magaly', 'reece', 'travis'])