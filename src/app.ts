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

*/

// Function Type in TypeScript 



