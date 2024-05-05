// Call Stack =================================)

/*
    JavaScript call stack ek data structure hai jo JavaScript engine mein hota hai aur function calls ko track karta hai. Jab koi function call hota hai, JavaScript engine uss function ko call stack mein push karta hai. Jab function execute ho jata hai, woh stack se pop ho jata hai.

    Yeh stack Last In, First Out (LIFO) order follow karta hai, matlab jo function sabse last mein call hua hai, woh sabse pehle execute hoga.

    Call stack ka main role yeh hai ki wo function calls ka order maintain karta hai aur execution flow ko track karta hai. Agar function A mein function B ko call kiya gaya hai, toh B ka execution complete hone ke baad, A ka execution resume hota hai.

    Call stack mein overflow ho sakti hai agar bahut saare nested function calls hote hain ya phir infinite recursion hoti hai, jiski wajah se memory overflow ho jata hai. 
*/

// function hello () {
//     console.log("Inside Hello Function");
//     console.log("Hello");
// }

// function demo () {
//     console.log("Calling Hello Function");
//     hello();
// }

// console.log("Calling Demo Function");
// demo();
// console.log("Done, Bye!");









// Visualizing the Call Stack =================================)

// function one () {
//     return 1;
// }

// function two () {
//     return one () + one ();
// }

// function three () {
//     let ans = two () + one ();
//     console.log(ans);
// }

// three();  // 3










// Breakpoints =================================================)

/*
    Breakpoints are used to stop the execution of the program at a particular line of code.

    To set a breakpoint, right click on the line number of the code you want to stop at and select "Set Breakpoint". 

    
    Breakpoint ka matlab hota hai ek specific point jahan par code execution temporarily rok di jati hai debugging ke liye. Jab aap breakpoint set karte hain, code execution uss point par stop hoti hai aur aap code ke state ko examine kar sakte hain, variables ki values check kar sakte hain, aur code ki flow ko step-by-step track kar sakte hain.

    Breakpoint debugging ka ek important tool hai jo developers ko code ki samasyaon ko identify aur solve karne mein madad karta hai. Breakpoints aksar integrated development environments (IDEs) aur code editors mein available hote hain, jahan par aap code editor mein cursor laga kar breakpoints set kar sakte hain.

    Jab breakpoint set hota hai aur code execution uss point tak pahunchta hai, execution temporarily stop ho jata hai aur aapko options milte hain jaise single-step through the code (step into, step over, step out), variables ki values check karna, aur code ke current state ko examine karna. Ye process developers ko code ke behavior ko samajhne mein aur bugs ko fix karne mein madad karta hai.

*/











// Js is Single Threaded =================================)

/*
    JavaScript is a single threaded programming language. This means that only one line of code can be executed at a time.

    JavaScript is single threaded because it can only execute one line of code at a time.
*/

// Synchronous Nature
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);

// setTimeout (() => {
//     console.log("Zeyaur");
// }, 2000)

// console.log("Hello");










// CallBack Hell =================================)

/*
    Call back hell is a common problem in JavaScript. It occurs when a function calls another function, which in turn calls another function, which in turn calls another function, and so on. This creates a chain of function calls, which is difficult to read and understand.

    Call back hell is a common problem in JavaScript. It occurs when a function calls another function, which in turn calls another function, which in turn calls another function, and so on.

    Callback Hell ek term hai jo JavaScript mein asynchronous programming ke context mein use hota hai. Asynchronous programming mein, jab ek operation start hoti hai (jaise ki file read/write, network request, ya database query), code execution aage badhti hai aur operation complete hone par ek callback function execute hoti hai.

    Callback Hell tab hota hai jab code mein multiple nested callbacks hote hain, jiski wajah se code ka structure complex ho jata hai aur code maintain karna mushkil ho jata hai. Nested callbacks ka structure ek tree ki tarah hota hai jismein har new callback ek level deeper jata hai. Jab bahut saare nested callbacks hote hain, code ko padhna, samajhna aur debug karna mushkil ho jata hai.

    Callback Hell se bachne ke liye, JavaScript developers ab alternative approaches istemal karte hain jaise ki Promises aur async/await. Promises ek modern approach hai asynchronous programming ke liye jo callbacks ko reduce karta hai aur code ko flat structure mein rakhta hai, jisse code readibility aur maintainability improve hoti hai. Async/await syntax bhi Promises par based hai aur asynchronous code ko synchronous style mein likhne ki flexibility provide karta hai, jisse callback hell ko avoid kiya ja sakta hai.
*/

// let h1  = document.querySelector("h1");

// setTimeout(() => {
// h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
// h1.style.color = "green";
// }, 2000);

// setTimeout(() => {
// h1.style.color = "orange";
// }, 3000);

// setTimeout(() => {
// h1.style.color = "blue";
// }, 4000);

// setTimeout(() => {
// h1.style.color = "yellow";
// }, 5000);

// let h1  = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange ();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("orange", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 changeColor("yellow", 1000);
//             });
//         });
//     });
// });

// callBack Nesting ko hi callBack Hell kahte hai.











// Promises =================================)  

// The Promise object represents the eventual completion (or failure) of an asynchronous operation.


/*
    Promises are used to handle asynchronous operations in JavaScript.

    A promise is an object that represents the eventual completion or failure of an asynchronous operation.


    Promises JavaScript mein asynchronous programming ko handle karne ke liye ek powerful concept hai. Ye ek abstraction hai jisse aap asynchronous operations ko handle kar sakte hain, jaise ki network requests, file reads, ya database queries, bina code ko callback hell mein trapped hone ki problem ke saath.

    Ek promise ek future value ko represent karta hai, jo ek asynchronous operation ke result ko indicate karta hai, chahe wo success ho ya failure. Promise ek object hota hai jismein resolve aur reject functions hote hain.


    Promise ke states hote hain :-

    1. Pending: Initial state jab promise create hoti hai.
    2. Fulfilled: Jab promise resolve hoti hai (success state).
    3. Rejected: Jab promise reject hoti hai (failure state).

    Promise ko create karne ke liye aap new `Promise()` ka use karte hain, jismein ek executor function hoti hai jisse resolve aur reject functions pass kiye jate hain.

    For example :-

    let myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
        let success = true; // or false
        if (success) {
            resolve("Operation completed successfully!");
        } else {
            reject("Operation failed!");
        }
    }, 2000);
    });

    myPromise.then((result) => {
        console.log("Success: " + result);
    }).catch((error) => {
        console.error("Error: " + error);
    });


    Is example mein, `setTimeout` ek asynchronous operation hai jo ek promise ko resolve karta hai. `then` function use hota hai resolved value ko handle karne ke liye, aur `catch` function use hota hai agar promise reject hoti hai.

    Promise chaining bhi ek important concept hai, jismein aap ek promise ke baad dusre promises ko chain kar sakte hain, jisse code ko clean aur readable banaya ja sakta hai.
*/


//  function savetoDb (data) {

//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         console.log("Your data was saved : ", data);
//     }
//     else {
//         console.log("Weak Connection. Data not Saved");
//     }
//  }

// savetoDb("zeyaur@gmail.com");



function savetoDb (data, success, failure) {

    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    console.log(internetSpeed);
    if(internetSpeed > 4) {
        success();
    }
    else {
        failure();
    }
 }

savetoDb(
    "zeyaur@gmail.com",
     () => {
    console.log("Success : Your data was saved");
    savetoDb(
        "rahman@gmail.com",
        () => {
        console.log("Success2 : Your data2 was saved");
        savetoDb(
            "zeyaurrahman@gmail.com",
            () => {
                console.log("Success3 : Your data3 was saved");
            },
            () => {
                console.log("Failure3 : Weak Connection. Data not Saved");
            }
        );
    },
     ()=> {
        console.log("Failure2 : Weak Connection. Data not Saved");
    }
);
},
    () => {
        console.log("Failure : Weak Connection. Data not Saved");
    }
);