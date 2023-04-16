// Define a youRock function that accepts a string argument of
//  a name and returns a string using that name.
function youRock(name){
    console.log(`You rock, ${name}!`)
}
youRock("Ahmed");
youRock("sami");


// Define a square function that accepts a number argument and 
// returns that number multipled by itself.
function square(num1){
    console.log(num1*num1)
}

square(2)
square(3)

// Define a cube function that accepts a number argument and returns
//  that number raised to the third power.
function cube(num2){
    console.log(num2 ** 3) //or tgdr t76 da5l 8os Math.pow(num2, 3)
}
cube(2)
cube(3)

// Define a toTheFourth function that accepts a number argument
//  and returns that number raised to the fourth power.
function toTheFourth(num3){
    console.log(Math.pow(num3,4))
}
toTheFourth(2)
toTheFourth(3)

// LAB Challenge
// If you finish the Lab, try this challenge.
// Write a function that will add, subtract, multiply or divide two numbers and return the answer
function calculate(num1, num2, num3){
    if(num3 === 'add'){
        return num1+num2
    }else if(num3 === 'multiply'){
        return num1*num2
    }else if(num3 === 'subtract'){
        return num1- num2
    }else if(num3 === 'divide'){
        return num1/num2
    }else{
        return 'wrong operate, you numpty'
    }
}

console.log(calculate(1,5, 'add'))
console.log(calculate(1,5, 'subtract'))
console.log(calculate(1,5, 'multiply'))
console.log(calculate(1,5, 'divide'))
console.log(calculate(1,'cat', 'add'))

// Lab: FizzBuzz Function
// Write a function that accepts an argument of a number
// If it is a multiple of 3, return “Fizz” instead of the number.
// If it is a multiple of 5, return “Buzz” instead of the number.
// If it is a multiple of both 3 and 5, return “FizzBuzz” instead of the number.
// Otherwise, return the number
function fizzBuzz(num){
    if(num %3 === 0 && num % 5 === 0){
        return 'FizzBuzz';
    }else if(num % 3 === 0){
        return 'Fizz';
    }else if(num % 5 === 0){
        return 'Buzz';
    }else{
        return num;
    }
}
console.log(fizzBuzz(15))


// Lab: RainDrop Function
// Write a function that accepts an argument of a number
// If the number contains 3 as a factor, output ‘Pling’.
// If the number contains 5 as a factor, output ‘Plang’.
// If the number contains 7 as a factor, output ‘Plong’.
// If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
function rainDrop(num) {
    let output = '';
    if (num % 3 === 0) {
      output += 'Pling';
    }
    if (num % 5 === 0) {
      output += 'Plang';
    }
    if (num % 7 === 0) {
      output += 'Plong';
    }
    if (output === '') {
      return num.toString();
    } else {
      return output;
    }
  }
  console.log(rainDrop(28)); // Plong
  console.log(rainDrop(1755)); // PlingPlang
  console.log(rainDrop(34)); // 34




// 7l gorge


function youRock(name) {
    console.log(`You Rock ${name}`)
    console.log('You Rock ' + name)
}
youRock('Ahlam')

function square(num) {
    console.log(num * num)
    console.log(num ** 2)
    console.log(Math.pow(num, 2))
}

square(9)

function cube(num) {
    console.log(num ** 3)
}

cube(3)

function toTheFourthPower(num) {
    console.log(num ** 4)
}

toTheFourthPower(3)

function calculate(num1, num2, operator) {
    if (operator === 'add') {
        return num1 + num2
    } else if (operator === 'subtract') {
        return num1 - num2
    } else if (operator === 'multiply') {
        return num1 * num2
    } else if (operator === 'divide') {
        return num1 / num2
    } else {
        return 'Wrong operator, you numpty'
    }
}

console.log(calculate(1, 5, 'add'))
console.log(calculate(1, 5, 'subtract'))
console.log(calculate(1, 5, 'multiply'))
console.log(calculate(1, 5, 'divide'))
console.log(calculate(1, 'cat', 'sausage'))


function fizzBuzz (num) {
    if (num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz'
    } else if (num % 5 === 0) {
        return 'Buzz'
    } else if (num % 3 === 0) {
        return 'Fizz'
    } else {
        return num
    }
}
console.log(fizzBuzz(15))

function rainDrop (num) {
    let output = ''
    if (num % 3 === 0) {
        output = output + 'Pling'
    } 

    if (num % 5 === 0){
        output = output + 'Plang'
    } 
    
    if (num % 7 === 0) {
        //output = output + 'Plong'
        output += 'Plong'
    }

    if (num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0){
        output = output +  num.toString()
    }

    return output
}
console.log(rainDrop(1755))

const number = 10

console.log(number)
console.log(typeof number)
console.log(typeof number.toString())