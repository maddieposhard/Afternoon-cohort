
/* const iBtn = document.querySelector('#iBtn')
const dBtn = document.querySelector('#dBtn')
const insertCount = document.querySelector("#insert-count")


iBtn.addEventListener('click', clickIncrease);
dBtn.addEventListener('click', clickDecrease)


let count = 0

function clickIncrease() {
    count++
    console.log(count)
    insertCount.textContent = count
}
function clickDecrease() {
    count--
    console.log(count)
    insertCount.textContent = count
}


let quotes = ["The only way to do great work is to love what you do.",
"The journey of a thousand miles begins with a single step.",
"Be the change you want to see in the world.",
"Believe you can and you're halfway there.",
"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
];

const btn = document.querySelector('#btn')
const quotePlace = document.querySelector('#quote-goes-here')

btn.addEventListener("click", clickHandler)

function clickHandler() {
    let randomNumber = Math.floor(Math.random() * quotes.length);

    quotePlace.textContent = quotes[randomNumber]

    
}
*/

//Exercise 1
alert('Welcome to My Website!')

//Exercise 2
const button = document.querySelector('#button');
const para = document.querySelector('#para');

button.addEventListener('click', changeText);

function changeText() {
    para.textContent = "You clicked the button!"
};


//Exercise 3
const imageOneButton = document.querySelector('#image-one-button');
const imageTwoButton = document.querySelector('#image-two-button');
const imageChanger = document.querySelector('#image-changer');
const imageOne = "https://ih1.redbubble.net/image.2525901178.9960/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg";
const imageTwo = "https://hips.hearstapps.com/hmg-prod/images/heart-emoji-meanings-growing-heart-65a97f6122933.jpg?crop=1xw:1xh;center,top&resize=980:*";

imageOneButton.addEventListener('click', changeImageOne);
imageTwoButton.addEventListener('click', changeImageTwo);

function changeImageOne() {
    imageChanger.src = imageOne;
}

function changeImageTwo() {
    imageChanger.src = imageTwo;
}

//Exercise 4
const submitButton = document.getElementById('submit-button');
const inputText = document.getElementById('input-text');
const paraText = document.getElementById('para-text');

submitButton.addEventListener('click', showParagraph);

function showParagraph() {
    console.log(inputText.value);
    paraText.textContent = inputText.value;
}

//Exercise 5
let countdownValue = 10;
let timerInterval = null;

const timerDisplay = document.querySelector('#timer');
const startButton = document.querySelector('#start-btn');
const stopButton = document.querySelector('#stop-btn');

startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', stopTimer)

function startTimer() {
    if (timerInterval) return; 
    timerInterval = setInterval(() => {
        if (countdownValue > 0) {
            countdownValue--;
            timerDisplay.textContent = countdownValue;
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }, 1000);
};

function stopTimer () {
    clearInterval(timerInterval);
    timerInterval = null;
};

//Exercise 6






