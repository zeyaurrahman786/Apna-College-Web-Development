// Loops :----------------------------------------------------------------



// for Loops :-)
// for(let i=1; i<=5; i++){
//     console.log(i);
// }


// for(let i=5; i>=1 ; i--){
//     console.log(i);
// }






//  Print all odd numbers (1 to 15) :-)
// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }


// for(let i=15; i>=1; i=i-2){
//         console.log(i);
// }






//  Print all even numbers (2 to 10) :-)
// for(let i=2; i<=10; i=i+2){
//     console.log(i);
// }


// for(let i=10; i>=2; i=i-2){
//     console.log(i);
// }






// Print the multiplication table for 5 :-)
// for(let i=5; i<=50; i=i+5){
//     console.log(i);
// }






// Tables using taking inputs :-)
// let n = prompt("Write the multiplication table of : ");
// n = parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }






// Nested for Loop :-)
// for(let i=1; i<=3; i++){
//     console.log(`Outer loop ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }





// While Loop :-)
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }


// let i=10;
// while(i>=1){
//     console.log(i);
//     i--;
// }






// Favorite Movie :-)
//  const favMovie = "Pathan";

//  let guess = prompt("Guess My Favorite Movie");

//  while((guess != favMovie) && (guess != "quit")){
//     guess = prompt("Wrong Guess. Please try again!");
//  }

//  if(guess == favMovie){
//     console.log("Congratulations!!");
//  }
//  else{
//     console.log("You have quit the game!");
//  }





// break keyword :-)
// let i =1;
// while(i<=5){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("We break at 3");





//  const favMovie = "Pathan";

//  let guess = prompt("Guess My Favorite Movie");

//  while(guess != favMovie){
//     if(guess == "quit"){
//         console.log("You Quit");
//         break;
//     }
//     guess = prompt("Wrong Guess. Please try again!");
//  }

//  if(guess == favMovie){
//     console.log("Congratulations!!");
//  }





// Loops with Arrays :-)
// let fruits = ["mango", "apple","banana","litchi","orange"];
// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }



// let fruits = ["mango", "apple","banana","litchi","orange"];
// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i]);
// }





// Nested Loops with Nested Arrays :-)
// let heroes = [
//     ["Ironman", "Spiderman", "Thor"],
//     ["Superman", "Wonder Women", "Flash"],
// ];

// for(let i=0; i<heroes.length; i++){
//     console.log(i, heroes[i], heroes[i].length);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j = ${j}, ${heroes[i][j]}`);
//     }
// }



// let student = [["Zeyaur", 95], ["Rahman", 98], ["Neayaj", 96], ["Alam", 90]]

// for(let i=0; i<student.length; i++){
//     console.log(`Info. of student #${i+1} `);
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }





// for of loop :-)
// let fruits = ["mango", "apple","banana","litchi","orange"];

// for(let fruit of fruits){
//     console.log(fruit);
// }



// for(char of "zeyaur"){
//     console.log(char);
// }





// Nested for of loop :)
// let heroes = [
//     ["Ironman", "Spiderman", "Thor"],
//     ["Superman", "Wonder Women", "Flash"],
// ];

// for(list of heroes){
//     for(hero of list){
//       console.log(hero);  
//     }

// }