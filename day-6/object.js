const person = 'Ahmed Hisham'
const age = 20
const eyeColor = 'brown'

const personArray = ['Ahmed Hisham', 20, 'brown']

console.log('My name is '+ personArray[0] + ' I am' + personArray[1])

const personObj ={
    name: 'Ahmed Hisham',
    age: 20,
    eyeColor: 'Brownish'
}

console.log('My name is ' + personObj.name + ' I am '+ personObj.age)

const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 2000,
    speed: 10,
    increaseSpeed: function (amount){
        //
        car.speed += amount
    }
}

console.log(car.speed)
car.increaseSpeed()
console.log(car.speed)

class Car {
    constructor(make, model){
        this.carMake = make
        this.carModel = model
    }
    returnMakerInCapital(){
        return this.carModel.toUpperCase() + this.carMake.toUpperCase()
    }
}

const myCar = new Car('Toyota', 'Yaris')
console.log(myCar)
const yourCar = new Car('Ferrari', 'Enzo')
console.log(yourCar)
console.log(typeof yourCar)
console.log(yourCar.returnMakerInCapital())


class Cake {
    constructor(flavor, icing, weight){
        this.flavor = flavor
        this.frosting = icing
        this.weight = weight
    }
}

const myCake = new Cake('Chocolate', 'white', 300)
console.log(myCake.frosting)

// console.log(car)

// car.make = 'Toyota'

// console.log(car)

// car.topSpeed = 150

// console.log(car)

// delete car.topSpeed

// console.log(car)

// for(const key in car){
//     console.log('the key is: ' + key)
//     console.log('the value is: ' + car[key])
// }


// console.log(car['make'])


