// dh for print hello world
console.log('Hello world');
// let is for changing stuff 
let myConstVariable = 'Ahmed'
myConstVariable = 'Hello'
// for print
console.log(myConstVariable)
// array for numbers
const myArray = [1, 2, 3, 4, 5]
// object for azyd mn shy like age and name and lazm benhm fa9la
const myObject = {
    name: 'Ahmed',
    age: 20
}

const fruits = ['apple', 'orange', 'banana']
console.log(fruits)
// dh y6b3 first one only and uk its 0 1 2 bla bla
console.log(fruits[1])

// undefined this couz no third
console.log(fruits[3])

// ds 7g alobject y6b3 ela tbeh u like hne name
console.log(myObject.name)

// hne y6b3 klshe
console.log(myObject)

// this for replace the banana b pineapple
fruits[2] = 'pineapple'
console.log(fruits)

// hne ygolk chm orange fe
console.log(fruits.indexOf('orange'))

// hne ygolk chm shy inside fruits 
console.log(fruits.length)

// ds couz mafe lychee
console.log(fruits.indexOf('lychee'))

// is to add something 
fruits.push('pear')
console.log(fruits)

// delete the last one
fruits.pop()
console.log(fruits)

// t67 w7dh new fe albdaia
fruits.unshift('cherry')
console.log(fruits)

// tshel awl w7dh 
fruits.shift()
console.log(fruits)

//  dh 3shan t76 benhm things like fa9la or and
console.log(fruits.join(' , '))
console.log(fruits.join(' and '))
console.log(fruits.join(1))

// dh al loop
for (let i = 0; i < fruits.length; i++){
    console.log('I have a ' + fruits[i])
}

for (let i=0; i < 10; i++){
    console.log(i)
}

// dh Infinity
// for (let i=0; true; i++){
//     console.log(i)
// }

// const conditional = false
if(1 === 2){
    console.log('conditional is true')
} else{
    console.log('the conditional evaluate as false')
}

// how if and else work
const temp = 24
if (temp < 10){
    console.log('Wear a big coat!')
}else if(temp < 25){
    console.log('Wear a light jumper')
} 

else{
    console.log('Wear a T shirt')
}
 
// dh mal between stuff
if(temp<30 && temp>10){
    console.log('temp between 10 and 30')
}

// ds num to see if odd or even 
const myNumber = 1

if(myNumber % 2 === 0){
    console.log('number is evens')
}else{
    console.log('number is odd')
}

// will print all even num in loop both same
for (let i=0; i<= 100; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}
for(let i=0; i<=100; i=i+2){
    console.log(i)
}

// loop nfs ela fog bs 3ks
for(let i = 100; i>0; i--){
    console.log(i)
}