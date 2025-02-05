//Exercise 1
const logDiscount = (prices, discount, callback) => {
    const discounted = prices.map((price) => price - (price * discount) / 100)
    callback(discounted);
}
const logData = (discounted) => {
    console.log(`This is the discounted price: ${discounted}`);
}
logDiscount([20, 10, 15, 30], 25, logData)

//Exercise 2
const squareAndPrint = (numbers) => {
    const squared = numbers.map((number) => number * number)
    console.log(squared)
};
squareAndPrint ([2,4,5,6])

//Exercise 3
const reverseStrings = (array) => {
    return array.map(string => string.split('').reverse().join(''));
}
console.log(reverseStrings(["hello", "coding", "maddie"]));
//return ends a function

//Exercise 4
const logOdds = (nums) => {
    const odds = nums.filter((num) => num % 2 != 0);
    console.log(odds);
}
logOdds([1,30,20,4,10,30,26,3,9])

//Exercise 5
setTimeout(function () {
    console.log(`Task Completed!`);
  }, 5000);

setInterval(function () {
    console.log(`Still waiting...`)
}, 2000);
