"use strict";
// Basic Types
// string, number, boolean
// console.log('Hello, TypeScript!');
// const country = 'Bangladesh is a small country';
// console.log(country);
// let firstName = "Md. Nuruzzaman";
// console.log(firstName);
// firstName = 70;
// console.log(firstName);
// TypeScript provides strict types for better safety. Here are some common ones:
/*



let message : string = "Hello, TypeScript!";
let count: number = 19;
let isReactAwesome: boolean = true;

    //string, number, boolean are basic types.
    //Use const for values that don’t change.


console.log(`I  really like ${message} and I have ${count} books. And it's ${isReactAwesome} that React is awesome!`);

let fruits = ['Apple', 'Banana', 'Orange'];

let mixedArr = ['Apple', 56, 'Banana', 78, 'Orange', 90, true];
mixedArr.push({
    name: 'Md. Nuruzzaman',
    age : 28

}); // not working

fruits.push(56); // not working

console.log(fruits);

// for objects


let person = {
    name: 'Md. Nuruzzaman Chowdhury',
    age: 28,
    isDeveloper: true
}
person.country = 'Bangladesh'; // not working




let x: string;
let y: number;
let a: string = 'Hello';
let b: number = 10;

x = "TypeScript";
y= 59;


// Array

// normal array
let arr: string[] = [];

arr.push('Nuruzzaman');

// mixed array

let arr2: (string | number | boolean)[] = [];

arr2.push('Nuruzzaman', 623, true);

console.log(arr2);



// object types
let c: object;
c = {
    name: 'Md. Nuruzzaman',
    age: 623,
    isDeveloper: true
}

let e: {
    name: string,
    age: number,
    isDeveloper: boolean
};
e = {
  name: "Md. Nuruzzaman",
  age: 623,
  isDeveloper: true,
};
console.log(`Name: ${e.name}, Age: ${e.age}, Developer: ${e.isDeveloper}`);



// Dynamic Type & any type in TypeScript

// let a: any = 10;
// a = 'Hello';

// for array
// let arr: any[] = [];
// arr.push(10);
// arr.push('Hello');
// arr.push(true);

// for object
 
let a : any = {
    name: 'Md. Nuruzzaman',
    age: 28,
    isDeveloper: true
}

a = {
    country: 'Bangladesh',
    population: 170000000
}

let b: {
    name: any,
    age: any,
    isDeveloper: any
}

b = {
    name: 'Md. Nuruzzaman',
    age: 28,
    isDeveloper: true
}



// Function Type in TypeScript

// Functions & Type Annotations

// function add(a: number, b: number): number {
//     return a + b;
// }

let myFunc: Function;

// ? for optional parameter

myFunc = (a: number, b: number, c: string = "Default Value") : string => {

    return a + b + " " + c;
}
console.log(myFunc(10, 20, "Nice"));

*/
// Type Aliases in TypeScript
/*


const userDetails = (
    id: string | number,
    user: {name: string,
         age: number}
) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: {name: string, age: number}) => {
    console.log(`Hello, ${user.age > 50 ? "Sir" : "Mr."} ${user.name}!`);
}

userDetails(1, {name: 'Md. Nuruzzaman', age: 28});
sayHello({name: 'Md. Nuruzzaman Chowdhury', age: 58});

*/
/*
// Type Aliases in TypeScript
type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`Hello, ${user.age > 50 ? "Sir" : "Mr."} ${user.name}!`);
};

*/
/*


// Function Signature in TypeScript

let myFunc: () => void;
let sum: (a: number, b: number) => number;

sum = (x: number, y: number) => {
   return x + y;
}
console.log(sum(10, 20));

*/
/*



let calculation: (a: number, b: number, c: string) => number;

calculation = (x: number, y: number, z: string) => {
    if(z === 'add') {
        return x + y;
    } else {
  return x - y;
    }
};

console.log(calculation(10, 20, 'minus'));


let userDetails: (id: number | string, userInfo:{
    name: string,
    age: number
}) => void;

userDetails = (id: number | string, user: {
    name: string,
    age: number
}) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
}
console.log(userDetails(1, {name: 'Md. Nuruzzaman', age: 28}));

*/
// Classes - TypeScript
/*


class Person {
    name: string;
    age: number;
    isDeveloper: boolean;

    constructor(name: string, age: number, isDeveloper: boolean) {
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    }

    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
}

const devnuru = new Person('Md. Nuruzzaman', 28, true);
devnuru.sayHello();



class Player {
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string) {
       this.name = n;
       this.age = a;
       this.country = c;
    }

    play() {
        console.log(`${this.name} from ${this.country} is playing cricket!`);
    }
}

const masrafi = new Player('Masrafi', 38, 'Bangladesh');
const dhoni = new Player('Dhoni', 44, 'India');


console.log(masrafi.name);

const players: Player[] = [];


players.push(masrafi);
players.push(dhoni);

// Access Modifiers in TypeScript

// Access modifiers control the visibility of properties and methods in a class. TypeScript provides three main access modifiers:
// 	1.	public (default) – Accessible from anywhere.
// 	2.	private – Accessible only inside the class.
// 	3.	protected – Accessible inside the class and its subclasses.


// Readonly Modifier in TypeScript
// 	•	Makes properties immutable after initialization.
// 	•	Can be combined with public, private, or protected.

// Accessible in Class but but not reassignable


*/
/*



// class
class User {
    public name: string; // Can be accessed anywhere
    private age: number; // Can only be accessed inside this class
    protected country: string; // Can be accessed in subclasses
 
    constructor(n: string, a: number, c: string) {
      this.name = n;
      this.age = a;
      this.country = c;

    }

    public getAge(): number{
        return this.age;
    }
}


// shortcuts

// class User {
//     constructor(public name: string, private age: number, protected country: string) {}
// }




// subclass

class Developer extends User {
    public position: string;

    constructor(n: string, a: number, c: string, p: string) {
        super(n, a, c);
        this.position = p;
    }

    public getDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.getAge()}`);
        console.log(`Country: ${this.country}`);
        console.log(`Position: ${this.position}`);
    }
}

// Testing

const devNuru = new Developer('Md. Nuruzzaman Chowdhury', 28, 'Bangladesh', 'Frontend Developer');
devNuru.getDetails();

console.log(devNuru.name); // ✅ Allowed (public)
 //console.log(devNuru.age); // ❌ Error: Property 'age' is private
console.log(devNuru.getAge()); // ✅ Allowed (via public method)
//console.log(devNuru.country); // ❌ Error: Property 'country' is protected
console.log(devNuru.position); // ✅ Allowed (public)



class Product {
  public name: string; // Can be accessed anywhere
  private price: number; // Can only be accessed inside this class
  protected category: string; // Can be accessed in subclasses

  constructor(name: string, price: number, category: string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  public getPrice(): number {
    return this.price; // Allowed since it's inside the class
  }
}

// Subclass
class Electronic extends Product {
  public warranty: number; // Warranty in years

  constructor(name: string, price: number, category: string, warranty: number) {
    super(name, price, category);
    this.warranty = warranty;
  }

  public getDetails() {
    console.log(`Product: ${this.name}`);
    console.log(`Category: ${this.category}`); // ✅ Allowed (protected)
    console.log(`Warranty: ${this.warranty} years`);
  }
}

// Testing
const laptop = new Electronic("Laptop", 1200, "Computers", 2);

console.log(laptop.name); // ✅ Allowed (public)
// console.log(laptop.price); ❌ Error: Property 'price' is private
console.log(laptop.getPrice()); // ✅ Allowed (via public method)
laptop.getDetails(); // ✅ Allowed (protected properties accessed inside subclass)

*/
/*
// Module System

import { User } from './classes/user.js'

const devnuru = new User('Md. Nuruzzaman Chowdhury', 28, "Bangladesh");
const sexyWife = new User('Sexy Wife', 24, "Bangladesh");

console.log(sexyWife.age);
console.log(sexyWife.country);

const users: User[] =[];

users.push(sexyWife)
users.push(devnuru)

*/
/*
interface RectangleOptions{
    width: number;
    length: number
}

function drawRectangle(options: RectangleOptions) {
  let width = options.width;
  let length = options.length;
}

// drawRectangle({
//     width: 80,
//     length: 120,
//     height: 50
// });
let threeDoptions = {
    width: 80,
    length: 120,
    height: 50
}

drawRectangle(threeDoptions)

*/
/*


/*

import {Player} from './classes/Player.js';
import {IsPlayer} from './interfaces/IsPlayer.js'

const masrafi = new Player("Masrafi", 56, "Banglasedh")
let sakib: IsPlayer;

sakib = new Player("Sakib", 34, "Bangladesh");

const players: IsPlayer[] = [];

players.push(sakib);
players.push(masrafi);

*/
var ;
(function () {
})( || ( = {}));
