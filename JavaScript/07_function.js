// Function :----------------------------------------------------------------

// function hello(){
//     console.log("Hello World!");
// }
// hello();




// function printName(){
//     console.log("Zeyaur Rahman");
// }
// printName();




// function print1to5(){
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }
// print1to5();





// function isAdult(){
//     let age = 25;
//     if(age >= 18){
//         console.log("Adult");
//     }
//     else{
//         console.log("Not Adult");
//     }
// }
// isAdult();





// Practice Question :-) Create a function that prints a poem.

// function printPoem(){
//     console.log("Twinkle Twinkle Little Star");
//     console.log("How I wonder what you are!");
//     console.log("Up above the world so high,");
//     console.log("Like a diamond in the sky.");
// }
// printPoem();





// Practice Question :-) Create a function to roll a dice & always display the value of the dice(1 to 6).

// function rollDice(){
//     let dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
// }
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();





// Functions with Arguments :-) Values we pass to the function.

// function printName(name){
//     console.log(name);
// }
// printName("Zeyaur Rahman");





// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo("Zeyaur", 23)





// function sum(a, b){
//     console.log(a+b);
// }
// sum(10, 25);





//  Practice Question :-) Create a function that gives us the average of 3 numbers. 

// function calcAvg (a, b, c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }
// calcAvg(10, 20, 30);





//  Practice Question :-) Create a function that prints the multiplication table of a number.

// function printTable(n){
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }
// printTable(10);





// Return Keyword :-) Return keyword is used to return some value from the function.

// function sum (a, b){
//     return a + b;
// }
// console.log(sum(3,4));





// function sum (a, b){
//     return a + b;
// }
// console.log(sum(sum(3,4),3));





//  Practice Question :-) Create a function that return the sum of a numbera from 1 to n.

// function getSum (n){
//     let sum = 0;

//     for(let i=1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log("Sum is :- ",getSum(100));





//  Practice Question :-) Create a function that returns the concatenation of all strings in an array.

// let str = ["Hello", "Hii", "Bye", "!"];

// function concat(str){
//     let result = "";

//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(concat(str));





// Scope :--------------------------------------------------------

// Function Scope :-)

// let sum = 54;  // Global Scope

// function calSum (a,b){
//     let sum = a + b;  // Function Scope
//     console.log(sum);
// }

// calSum(1, 2);
// console.log(sum);

// Global Scope wale variable ko kahi bhi use kiya ja sakta hai, Function ke andar Function scope ka value rahta hai aur Function ke bahar Global Scope ka value rahta hai.





// Block Scope :-) Isme {curley braces} ke bahar hum kuch bhi access nahi kar sakte hai. (var pe block scope kabhi bhi apply nahi hota hai)

// {
//     let a = 25;
// }
// console.log(a); // Error aayega 'a' is not define


// for(let i=1; i<=5; i++){
//     console.log(i); // Block Scope
// }
// console.log(i); // Error aayega 'i' is not define


// let age = 25;
// if(age >=18){
//     let str = "adult";
//     console.log(str); // Yeh chal jayega
// }
// console.log(str); // Error aayega 'str' is not define





// Lexical Scope :-) Isme function ke andar bhi function bna sakte hai (Nested Function).

//  function outerFun(){
//     let x = 5;
//     let y = 10;
//     function innerFun(){  // Function Scope
//         // let a = 20; // inverse not possible
//         console.log(x);
//         console.log(y);
//     }
//     // console.log(a); // Error aayega, yeh possible nahi hai 
//     console.log(innerFun());
//  }
//  console.log(outerFun());





// Practice Question :-)

// let greet = "Hello"; // Global Scope

// function changeGreet(){
//     let greet = "Namaste"; // Function Scope
//     console.log(greet);

//     function innerGreet(){
//         console.log(greet); // Lexical Scope
//     }
//     innerGreet();
// }
// console.log(greet);
// changeGreet();





// Function Expressions :-) Variable ke naam se hi function ko call karte hai. (isme value ko change bhi kar sakte hai update bhi kar sakte hai delete bhi kar sakte hai aur new value bhi likh sakte hai, agrument me pass bhi kar sakte hai aur return bhi kar sakte hai function me)

// let name = "Zeyaur"

// let sum = function (a, b){
//     return a+b;
// }
// console.log(sum(1,3));


// let hello = function (){
//     console.log("Hello !");
// }
// hello();





// Higher Order Functions :-)

// function multipleGreet(func, count){   // Higher Order Function
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("Hello");
// }

// multipleGreet(greet, 5);





// Higher Order Functions (Return) :-)

// function oddOrEvenFactory(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2 == 0));
//         }
//     }
//     else if(request == "even"){
//         return function(n){
//             console.log(n%2 ==0);
//         }
//     }
//     else {
//         console.log("Wrong Request");
//     }
// }

// let request = "odd"; // Even





// Methods :-) Jo function object ke andar define hota hai usse function method kahte hai.

// const calculator = {
//     add: function(a, b){
//         return a+b;
//     },
//     sub: function(a, b){
//         return a-b;
//     },
//     multi: function(a,b){
//         return a*b;
//     },
//     div: function(a,b){
//         return a/b;
//     }
// }
// console.log(calculator.add(5, 10));
// console.log(calculator.sub(50, 10));
// console.log(calculator.multi(5, 10));
// console.log(calculator.div(50, 10));





// Methods (Shorthand) :-)

// const calculator = {
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     multi(a,b){
//         return a*b;
//     },
//     div(a,b){
//         return a/b;
//     }
// };
// console.log(calculator.add(5, 8));
// console.log(calculator.sub(10, 5));
// console.log(calculator.multi(10, 8));
// console.log(calculator.div(15, 5));