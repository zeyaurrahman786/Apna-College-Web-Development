// console.dir(document.all);





// Selecting Elements =====================================

// document.getElementsById("");

// document.getElementsByClassName("");

// document.getElementsByTagName("");

// document.querySelector("");

// document.querySelectorAll("");




// Single Element Select hoga ===============================

// console.dir(document.querySelector("p"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"));






// All Elements Select hoga ===================================

// console.dir(document.querySelectorAll("p"));

// console.dir(document.querySelectorAll("#description"));

// console.dir(document.querySelectorAll(".oldImg"));

// console.dir(document.querySelectorAll("div a"));







// Manipulating Attributes =================================================


// const img = document.querySelector("img");

// console.log(img.getAttribute("src"));

// img.setAttribute("src", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");





// Manipulating Style =================================================

// using classList
// Object.classList



// classList.add() to add new classes

// classList.remove() to remove classes

// classList.contains() to check if a class exists

// classList.toggle() to toggle between add & remove





// Navigation =================================================

// parentElement
// children
// previousElementSib / nextElementSibling






// Adding Elements =================================================

// document.createElement('p)'

/*
    1. appendChild(element)
    2. append(element)
    3. prepend(element)
    4. insertAdjacentElement(where, element)
*/


 



// Removing Elements =================================================

/**
    1. removeChild(element)
    2. remove(element)
*/





// Practice Questions =================================================

/**
    Add the following elements to the container using only JavaScript and the DOM methods.

    1) a <p> with red text that says "Hey I'm red!"
    2) an <h3> with blue text that says "Hey I'm a blue h3!"
    3) a <div> with a black border and pink background color with the following elements inside of it :-
        a) another <h1> that says "I'm in a div"
        b) a <p> that says "ME TOO!"
*/


// 1) :-

let para1 = document.createElement("p");
para1.innerHTML = "Hey I'm red!";
document.querySelector("body").append(para1);

para1.classList.add("red");






// 2) :-

let h3 = document.createElement("h3");
h3.innerHTML = "I'm a blue h3!";
document.querySelector("body").append(h3);

h3.classList.add("blue");






// 3) :-

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);