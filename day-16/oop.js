const person = {
    firstName: 'George',
    lastName: 'Jones',
    sayHello: function(){
        return 'Hello I\'m George'
    }
}
// console.log(person.sayHello())

const focus = {
    make: 'ford',
    color: 'blue',
    fuel: 100,
    drive: function(){
        this.fuel--
        return 'Brum Brum'
    }
}

const yaris = {
    make: 'Toyota',
    color: 'yellow',
    fuel: 100,
    drive: function(){
        this.fuel--
        return 'Brum Brum'
    }
}
// console.log(yaris.drive())

function makeCar(make, color){
    return {
        make,
        color,
    }
}
const v90 = makeCar('Volvo', 'yellow')
// console.log(v90)
const mpv = makeCar('Mazda', 'Red')
// console.log(mpv)

class Car {
    constructor(make, color){
        this.make = make
        this.color = color
        this.fuel = 100
    }
    drive(){
        this.fuel --
        return 'brum brum'
    }
}

const sunny = new Car('Nissan', 'White')
// console.log(sunny)
sunny.drive()
// console.log(sunny)

class Person {
    constructor (name) {
        this.name = name
    }
    get name(){
        // Go and access an API to log this
        return this._name.toUpperCase()
    }
    set name(newName) {
        this._name = newName
        // this._name.toUpperCase()
    }
    uppercaseName() {
        return this.name.toUpperCase()
    }
}
// const me = new Person('George')
// console.log(me.name)
// console.log(me.uppercaseName())
// // me.name = 'John'
// console.log(me.name)

class Animal {
    constructor(name, type, sound){
        this.name = name
        this.type = type
        this.sound = sound
    }
    makeSound(){
        console.log(`${this.name} has sound ${this.sound}`)
    }
}
const cat = new Animal('bob', 'tabby', 'miau')
cat.makeSound()

class Dog extends Animal {
    constructor(name, type){
        super(name, type, 'Woof')
    }
    makeAnotherSound(){
        this.makeSound()
        console.log(`Hi I am ${this.name} and I say ${this.sound}`)
    }
}
const myDog = new Dog('Tony', 'Husky')
myDog.makeAnotherSound()