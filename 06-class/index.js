/*
console.log('im connected');

const person = {
    name: "Maddie Poshard",
    age: 31,
    greet: function() {
        console.log('Hello!');

    }
}

console.log(person);
*/


//exercise 1
const car = {
    make: 'Kia',
    model: 'Sportage',
    year: 2024,
    getInfo: function() {
        console.log(`Make:${this.make} Model:${this.model} Year:${this.year}`);
    }
};

    car.getInfo();

//exercise 2
const student = {
    name: 'Maddie',
    age: 31,
    grades: [100, 75, 50],
    calculateAverageGrade: function(grades) {
        const average = grades.reduce(function(sum, num) {return sum + num} , 0) / grades.length;
        console.log(`${this.name}'s average grade is ${average}`);
    }
}

student.calculateAverageGrade(student.grades);

//exercise 3
const element = document.getElementById('myDiv');
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    element.style.color = 'red';
  });
console.log(element)

//exercise 4
const btn = document.getElementById('myBtn');
const paragraph = document.getElementById('myPara');
btn.addEventListener('click', function() {
  const myPara = document.getElementById('myPara');
  const newPara = document.createElement('newPara');
  newPara.textContent = 'This is a new paragraph';
  paragraph.appendChild(newPara);
}); 

