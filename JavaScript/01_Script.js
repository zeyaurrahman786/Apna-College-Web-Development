// console.log("Hello World!");



// let a = 5;
// let b = 10;
// console.log("Sum is : ", a+b);



// let pencilPrice = 10;
// let penPrice = 5;
// let output = `The total price is : ${penPrice + penPrice} Rupees.`;
// console.log(output);



// let pencilPrice = 10;
// let penPrice = 5;
// console.log(`The total price is : ${penPrice + penPrice} Rupees.`);



// Arithmetic Operations : ----------------
// let a = 10;
// let b = 5;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);



// Unary Operators : ----------------
// let a = 10;
// console.log(a++); // 10
// console.log(++a); // 12



// Assignment Operators : ----------------
// let a = 10;
// let b = 5;
// b=a;
// console.log(b); // 10



// Comparison Operators : ----------------
// let age = 15;
// console.log(age > 18); // false
// console.log(age < 18); // true
// console.log(age >= 18); // false
// console.log(age <= 18); // true



// Conditional Statements : ----------------

// if Statement
// console.log("Before my if statement");
// let age = 23;
// if(age >= 18){
//     console.log("You can Vote");
//     console.log("You can Drive");
// }
// console.log("After my if statement");



// Traffic Light System : ----------------
// let color = "red";

// if(color === "red"){
//     console.log("Stop! -> Light Color is Red");
// }
// if(color === "yellow"){
//     console.log("Slow Down. -> Light Color is Yellow");
// }
// if(color === "green"){
//     console.log("Go. -> Light Color is Green");
// }



// Traffic Light System : ----------------
// let color = "red";

// if(color === "red"){
//     console.log("Stop! -> Light Color is Red");
// }
// else if(color === "yellow"){
//     console.log("Slow Down. -> Light Color is Yellow");
// }
// else if(color === "green"){
//     console.log("Go. -> Light Color is Green");
// }



// else if Statement
// let marks = 55;

// if(marks >= 80){
//     console.log("A+");
// }
// else if(marks >= 60){
//     console.log("A");
// }
// else if(marks >= 33){
//     console.log("B");
// }
// else if(marks < 33){
//     console.log("F");
// }



// else Statement : ------------------------
// let age = 18;

// if(age >= 18){
//     console.log("You can Vote");
// }
// else{
//     console.log("You can't Vote");
// }



// Traffic Light System : ----------------
// let color = "black";

// if(color === "red"){
//     console.log("Stop! -> Light Color is Red");
// }
// else if(color === "yellow"){
//     console.log("Slow Down. -> Light Color is Yellow");
// }
// else if(color === "green"){
//     console.log("Go. -> Light Color is Green");
// }
// else{
//     console.log("Something went wrong!");
// }



// Practice Question :-) Create a system to calculate popcorn prices based on the size customer asked for :
// let size = 'M'

// if(size === 'S'){
//     console.log('Price is Rs. 50');
// }
// else if(size === 'M'){
//     console.log('Price is Rs. 100');
// }
// else if(size === 'L'){
//     console.log('Price is Rs. 200');
// }
// else if(size === 'XL'){
//     console.log('Price is Rs. 250');
// }
// else{
//     console.log('Something went wrong!');
// }



// Nested if-else Statement :------------------------
// let marks = 32;

// if(marks >= 33){
//     console.log("Grade : Pass");
//     if(marks >= 80){
//         console.log("Grade : Outstanding");
//     }
//     else{
//         console.log("Grade : A");
//     }
// }
// else{
//     console.log("Brtter Luck Next Time!");
// }



// Logical Operators : ------------------------------
// let marks = 80;

// if(marks >= 33 && marks >= 80){
//     console.log("Pass");
//     console.log("A+");
// }



// let marks = 30;

// if(marks >= 33 || marks >= 80){
//     console.log("Pass");
//     console.log("A+");
// }



// let marks = 30;

// if(!(marks <33)){
//     console.log("Pass");
//     console.log("A+");
// }



// let marks = 30;

// if((marks > 33 && marks >= 80) || !false){
//     console.log("Pass");
//     console.log("A+");
// }



// Practice Question : -) A "good string" is a string that starts with the letter "a" & has a length > 3. Write a Program to find if a string is good or not. 
// let str = "apple";

// if(str[0] === "a" && str.length > 3){
//     console.log("Good String");
// }
// else{
//     console.log("Not a Good String");
// }



// Predict the output of the following code :-)
// let num = 12;

// if((num%3 === 0 ) && ((num+1 == 15) || (num-1 == 11))){
//     console.log("Safe");
// }
// else{
//     console.log("Unsafe");
// }



// truthy & falsy : ----------------

// if(true)
// {
//     console.log("It has true value");
// }
// else{
//     console.log("It has false value");
// }



// if(false)
// {
//     console.log("It has true value");
// }
// else{
//     console.log("It has false value");
// }



// Switch Statement : --------------------------------
// let color = "black";

// switch (color){
//     case "red":
//         console.log("Stop!");
//         break;
//     case "yellow":
//         console.log("Slow Down!");
//         break;
//     case "green":
//         console.log("Go ->");
//         break;
//     default:
//         console.log("Traffic Light is Broken");
// }



// Prcatice Question :) Use switch statement to print the day of  the week using a number variable 'day' with values 1 to 7.    (1 = Monday, 2 = Tuesday & so on)

// let day = 8;

// switch (day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Wrong day number");
// }



// Alert & Prompt : --------------------------------

// alert("Something is wrong!");


// console.log("This is a message");
// console.error("This is an error message");
// console.warn("This is a warning message");


// prompt("Please enter Your Name");

// let rollNumber = prompt("Please enter your Roll Number");
// console.log(rollNumber);


// let firstName = prompt("Please enter your First Name");
// let lastName = prompt("Please enter your Last Name");
// console.log("Welcome", firstName, lastName, "!");


// let firstName = prompt("Please enter your First Name");
// let lastName = prompt("Please enter your Last Name");
// let message = "Welcome " + firstName + " " + lastName + "!";
// alert(message);