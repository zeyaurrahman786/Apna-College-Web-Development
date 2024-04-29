// Arrow Functions :-)

// const sum = (a, b) => {
//     console.log(a+b);
// }
// sum(15, 85);





// const cube = (a) =>{
//     return a*a*a;
// };
// console.log(cube(5));





// const cube = a =>{
//     return a*a*a;
// };
// console.log(cube(5));





// const hello = () => {
//     console.log("Hello World!");
// }
// console.log(hello());






// Implicit Return :-)

// const multi = (a, b) => a*b;
// console.log(multi(5,5));





// Set Timeout :-)   setTimeout(function, timeout)


// console.log("Hi there!");
// setTimeout(() =>{
//     console.log("Apna College");
// }, 4000)
// console.log("Welcome to");






// Set Interval :-)   setInterval(function, timeout)

// setInterval(()=>{
//     console.log("Zeyaur Rahman");
// }, 2000)





// let id = setInterval(()=>{
//     console.log("Zeyaur Rahman");
// }, 2000)
// console.log(id);

// clearInterval(1) :-> for stop our function type clearInterval(1); in console. (1 :- this is id)





// this with Arrow Functions :-) 

// const student = {
//     name : 'Zeyaur',
//     age : 23,
//     property : this,   // Global Scope
//     getName : function () {
//         console.log(this);
//         return this.name;
//     },
//     getAge : () => {
//         console.log(this);   // Parent's Scope -> Window
//         return this.age;
//     },
// };
// console.log(student.getName());
// console.log(student.getAge());





// const student = {
//     name : 'Zeyaur',
//     age : 23,
//     property : this,   // Global Scope
//     getName : function () {
//         console.log(this);
//         return this.name;
//     },
//     getAge : () => {
//         console.log(this);   // Parent's Scope -> Window
//         return this.age;
//     },

//     getInfo1: function () {
//         setTimeout (() => {
//             console.log(this);  // Student's Object
//         }, 2000)
//     },

//     getInfo2: function () {
//         setTimeout (() => {
//             console.log(this);   // Window Object
//         }, 5000)
//     },
// };

// // console.log(student.getName());
// // console.log(student.getAge());

// console.log(student.getInfo1());   // student.getInfo1(); :-> Console me type karte hai code run karne ke liye
// console.log(student.getInfo2());

// Note :-) Normal function ke liye this hota hai jo object usse call lga rahi hai aur hamare arrow function ke liye this hota hai hamare prenent ko call lagane wali object yani Lexical Scope wha par chalta hai normal function scope nahi chalta hai.






// Practice Question :-) Write an arrow function that returns the square of a number 'n'.

// const square = n => n*n;
// console.log(square(5));





// Practice Question :) Write a function that prints "Hello World" 5 times at intervals of 2s each.

let id = setInterval(()=>{
    console.log("Hello World");
}, 2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("Clear interval ran");
}, 10000);