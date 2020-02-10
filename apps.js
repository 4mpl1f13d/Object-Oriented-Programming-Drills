// // Object Literals, Pseudo Classes / Objective 1
// let person1 = {
//     name: 'Caleb',
//     sayHello: function () {
//         console.log(`Hi! My name is ${this.name}!`);
//     }
// }

// let person2 = {
//     name: 'Chase',
//     sayHello: function () {
//         console.log(`Hi! My name is ${this.name}!`);
//     }
// }

// let person3 = {
//     name: 'Conner',
//     sayHello: function () {
//         console.log(`Hi! My name is ${this.name}!`);
//     }
// }

// let person4 = {
//     name: 'Special K',
//     sayHello: function () {
//         console.log(`Hi! My name is ${this.name}!`);
//     }
// }

// let person5 = {
//     name: 'Ceasar',
//     sayHello: function () {
//         console.log(`Hi! My name is ${this.name}!`);
//     }
// }

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

// // Objective 2
// class Person {
//     constructor(name, city, age) {
//         this.name = name;
//         this.city = city;
//         this.age = age;
//     }

//     sayHello() {
//         alert(`Hey! My name is ${this.name}! I am ${this.age} years old, and live in ${this.city}.`);
//     }
// }

// // Objective 3
// let p1 = new Person('Jane', 'Birmingham, AL', 29);
// let p2 = new Person('John', 'Trussville, AL', 28);
// let p3 = new Person('Jacob', 'Adamsville, AL', 27);
// let p4 = new Person('Joseph', 'Calera, AL', 26);
// let p5 = new Person('Janey', 'Alabaster, AL', 25);

// // Objective 4 &  5
// p1.sayHello();
// p2.sayHello();
// p3.sayHello();
// p4.sayHello();
// p5.sayHello();


// Inheritance
// Objective 1
class Vehicle {
    constructor(model, manufacturer, numWheels) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.numWheels = numWheels;
    }
    // Objective 2
    aboutVehicle() {
        console.log(`This vehicle is ${this.model}, manufactured by  ${this.manufacturer}, and has ${this.numWheels}.`);
    }

}
// Objective 3
class Truck extends Vehicle {
    constructor(model, manufacturer, numWheels, numDoors, truckBed) {
        super(model, manufacturer, numWheels);
        this.numDoors = numDoors;
        this.truckBed = truckBed;
    }
    aboutTruck() {
        console.log(`I have ${this.numDoors} doors and ${this.truckBed} truckbed.`)
    }
}

// Objective 4
class Sedan extends Vehicle {
    constructor(model, manufacturer, numWheels, size, mpg) {
        super(model, manufacturer, numWheels)
        this.size = size;
        this.mpg = mpg;
    }
    aboutSedans() {
        console.log(`I am ${this.size} and I get ${this.mpg} MPG.`)
    }

}

// Objective 5
class Motorcycles extends Vehicle {
    constructor(model, manufacturer, numWheels, handlebars, noDoors) {
        super(model, manufacturer, numWheels);
        this.handlebars = handlebars;
        this.noDoors = noDoors;
    }
    aboutMotorcycles() {
        console.log(`I have ${this.handlebars} and ${this.noDoors}`)
    }
}

// Objective 6
var1 = new Truck(`Siverado`, `Chevy`, `4`, `2`, `1`);
var1.aboutVehicle();
var1.aboutTruck();

var2 = new Sedan(`Malibu`, `Chevy`, `4`, `small`, `33`);
var2.aboutVehicle();
var2.aboutSedans();

var3 = new Motorcycles(`Runner`, `Indian`, `2`, `handlebars`, `no doors`);
var3.aboutVehicle();
var3.aboutMotorcycles();


