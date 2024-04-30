// Array Methods :----------------------------------------------------------------





// forEach :-) arr.forEach(some function definition or name);

/*
    `forEach()` ek array method hai JavaScript mein. Yeh method ek function ko ek ek karke har array element par apply karta hai. Yeh function ko array ke har element ke liye ek baar call karta hai, aur aap function mein us element ko istemal kar sakte hain. `forEach()` ke istemal se asal me array modify nahi hota hai, balki sirf har element par operation apply hota hai.   


    Yeh ek example hai forEach() ka istemal karne ka :-

    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach(function(number) {
    console.log(number * 2);
    });

    Is example mein, forEach() method har ek number ko double karke print karta hai.
*/ 

// let arr = [1, 2, 3, 4, 5];

// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);





// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function (el){
//     console.log(el);
// });





// let arr = [1, 2, 3, 4, 5];

// arr.forEach((el) => {
//     console.log(el);
// })





// let arr = [
//     {
//         name : 'Zeyaur',
//         marks : 95,
//     },
//     {
//         name : 'Rahman',
//         marks : 90,
//     },
//     {
//         name : 'Neyaj',
//         marks : 98,
//     },
// ];

// // console.log(arr);

// arr.forEach((student) => {
//     // console.log(student);
//     // console.log(student.name);
//     console.log(student.marks);
// });





// Map :-) let newArr = arr.map(some function definition or name);

/* 
    `map()` ek array method hai jo ek array ko iterate karta hai aur har element par kisi function ko call karta hai. Yeh function ek naya array return karta hai, jismein har element ko modify karne ke liye istemal kiya gaya function ka result hota hai. Isse asal me array ko modify nahi kiya jata hai, balki ek naya array banaya jata hai. Ye ek bahut hi powerful aur flexible tareeqa hai array ke har ek element par operations ko apply karne ka.
    
    
*/



// let num = [1,2,3,4,5];

// let newNum = num.map((el) => {
//     return el * 2;
// });

// console.log(newNum);





// let student = [
//     {
//         name : 'Zeyaur',
//         marks : 95,
//     },
//     {
//         name : 'Rahman',
//         marks : 90,
//     },
//     {
//         name : 'Neyaj',
//         marks : 98,
//     },
// ];

// let gpa = student.map((el)=>{
//     return el.marks /10;
// });

// console.log(gpa);





// Filter :-) let newArr = arr.filter(some function definition or name);

/*
    `filter()` bhi ek array method hai JavaScript mein. Yeh method ek naya array return karta hai, jo asal me array ke un elements ko contain karta hai jo di gayi condition ko satisfy karte hain. Matlab, agar aap ek array mein se kuch elements ko filter karna chahte hain jinke liye koi condition true ho, to aap `filter()` ka istemal kar sakte hain.


    Yeh ek example hai filter() ka istemal karne ka :-

    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter(function(number) {
        return number % 2 === 0;
    });
    console.log(evenNumbers); // Output: [2, 4]

    Is example mein, `filter()` method numbers array se un `numbers` ko filter karta hai jo even (2 se divide hokar remainder 0 hone wale) hain, aur phir un numbers ko ek naye array mein store karke return karta hai.
*/


// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let ans = nums.filter ((el) => {
//     return el % 2 == 0; // Even -> true, odd -> false
// })
// console.log(ans);





// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let ans = nums.filter ((el) => {
//     return el % 2 != 0; // Odd -> true, even -> false
// })
// console.log(ans);





// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let ans = nums.filter ((el) => {
//     return el < 5; // element less than 5
// })
// console.log(ans);





// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let ans = nums.filter ((el) => {
//     return el > 5; // element greater than 5
// })
// console.log(ans);





// Every :-) AND logic ki tarah kaam karta hai agar ek bhi false ho to false return karta hai.

/*
    `every()` bhi ek array method hai JavaScript mein. Yeh method array ke har ek element ke liye di gayi condition ko check karta hai. Agar har ek element condition ko satisfy karta hai, to `every()` true return karta hai, agar kisi bhi element condition ko satisfy nahi karta, to false return karta hai.

    Yeh ek example hai every() ka istemal karne ka :-

    const numbers = [2, 4, 6, 8, 10];
    const allEven = numbers.every(function(number) {
    return number % 2 === 0;
    });
    console.log(allEven); // Output: true

    Is example mein, every() method numbers array ke har ek number ke liye check karta hai ki vo even hai ya nahi. Kyunki har number even hai, isliye every() true return karta hai. Agar kisi ek number bhi odd hota, to every() false return karta.
*/


// const numbers = [2, 4, 6, 8, 11];
// const allEven = numbers.every(function(number) {
// return number % 2 === 0;
// });
// console.log(allEven); // Output: false






// Some :-) OR logic ki tarah kaam karta hai agar ek bhi true hota hai to true return karta hai.

/* 
    `some()` bhi ek array method hai JavaScript mein. Yeh method array ke har ek element ke liye di gayi condition ko check karta hai. Agar kisi bhi element condition ko satisfy karta hai, to `some()` true return karta hai. Agar koi bhi element condition ko satisfy nahi karta, to false return karta hai.

    Yeh ek example hai `some()` ka istemal karne ka :-

    const numbers = [1, 2, 3, 4, 5];
    const hasEvenNumber = numbers.some(function(number) {
    return number % 2 === 0;
    });
    console.log(hasEvenNumber); // Output: true

    Is example mein, some() method numbers array ke har ek number ke liye check karta hai ki vo even hai ya nahi. Kyunki kuch numbers even hain, isliye some() true return karta hai. Agar sabhi numbers odd hote, to some() false return karta.
*/


// const numbers = [1, 2, 3, 4, 5];
// const hasEvenNumber = numbers.some(function(number) {
// return number % 2 === 0;
// });
// console.log(hasEvenNumber); // Output: true





// Reduce :-) 

/*
    reduce() bhi ek array method hai JavaScript mein. Yeh method ek single value ko generate karne ke liye array ke har element par ek function ko apply karta hai, aur ek cumulative result ko maintain karta hai.

    Yeh ek example hai reduce() ka istemal karne ka :-

    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
    }, 0);
    console.log(sum); // Output: 15

    Is example mein, reduce() method numbers array ke har ek number ko accumulate karke unka sum return karta hai. Initial value (jo yahan 0 hai) accumulator ke roop mein istemal hota hai. Is tarah, yeh ek single value (sum) return karta hai.
*/


// let nums = [1, 2, 3, 4, 5];

// let finalVal = nums.reduce((res, el) => res + el);
// console.log(finalVal);





// let nums = [1, 2, 3, 4, 5];

// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//     return res + el
// });
// console.log(finalVal);





// Reduce :-) Finding Maximum in an array.

// let arr = [1, 4, 6, 9, 15, 2, 8];

// let max = - 1;

// for(let i=0; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }

// console.log(max);





// let arr = [1, 4, 6, 9, 15, 2, 8, 58, 45, 12];

// let max = arr.reduce((max, el) => {
//     if(max <el){
//         return el;
//     }
//     else {
//         return max;
//     }
// });

// console.log(max);





// Prcatice Question :-) Check if all numbers in our array are multipli cation of 10 or not.

// let nums = [10, 20, 30, 40, 50];

// let ans = nums.every((el) => el % 10 == 0);

// console.log(ans);





// Practice Question :-) Create a function to find the min number in an array.

// let nums = [5, 4, 9, 7, 2, 10];

// let min = nums.reduce((min, el) => {
//     if(min < el){
//         return min;
//     }
//     else {
//         return el;
//     }
// });

// console.log(min);





// let nums = [10, 20, 30, 40, 5, 8, 50];

// function getMin(nums){
//     let min = nums.reduce((min, el) => {
//     if(min < el){
//         return min;
//     }
//     else {
//         return el;
//     }
// });
//     return min;
// }

// console.log(getMin(nums));





// Default Parameters :-) Giving the default value to the arguments.

// function sum(a, b = 3){
//     return a + b;
// }

// console.log(sum(2)); // 5





// function sum(a = 3, b){
//     return a + b;
// }

// console.log(sum(2, 5)); // 5





// Spread :-) Expands an iterable int multiple values.

/* 
    Spread operator JavaScript mein ek important concept hai. Yeh ellipsis (...) ke roop mein likha jata hai. Spread operator ek iterable object ke elements ko expand karke use karta hai. Yeh commonly arrays ke elements ko expand karne mein aur function calls mein arguments ko pass karne mein istemal hota hai.


    Yeh kuch examples hain spread operator ke istemal ke :-

    1. Arrays mein istemal :-
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5]; // arr1 ke elements ko expand karke arr2 mein add kiya gaya
    console.log(arr2); // Output: [1, 2, 3, 4, 5]


    2. Objects mein istemal :-
    const obj1 = {a: 1, b: 2, c: 3};
    const obj2 = {...obj1, d: 4, e: 5}; // obj1 ke elements ko expand karke obj2 mein add kiya gaya
    console.log(obj2); // Output: {a: 1, b: 2, c: 3, d: 4, e: 5}

    3. Function calls me istemal :-
    function add(a, b, c) {
    return a + b + c;
    }
    const numbers = [1, 2, 3];
    console.log(add(...numbers)); // Output: 6

    Spread operator ka istemal data copying mein aur code readability aur maintainability ko badhane mein madad karta hai.
*/





// Spread (Array Literals) :-)

// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];
// console.log(newArr);


// let chars = [..."Zeyaur"];
// console.log(chars);


// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];
// let nums = [...even, ...odd];
// console.log(nums);





// Spread (Object Literals) :-)

// const data = {
//     name: "Zeyaur",
//     age: 23,
//     city: "Bhopal"
// };
// const dataCopy = {...data, id : 786, country : "India"};
// console.log(dataCopy);






// let arr = [1, 2, 3, 4, 5]; // Value
// let obj1 = {...arr};  // Object -> key : value
// let obj2 = {..."Hello"};
// console.log(obj1);
// console.log(obj2);





// Rest :-)

/*
        
    Rest parameter JavaScript mein ek aur important concept hai. Yeh bhi ellipsis (...) ke roop mein likha jata hai, lekin spread operator se thoda alag hai. Rest parameter ek function definition mein istemal hota hai aur isse function ke arguments ko ek array mein collect kiya jata hai.

    Yeh ek example hai rest parameter ke istemal ka :-

    function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
    }

    console.log(sum(1, 2, 3, 4, 5)); // Output: 15

    Iss example mein `...numbers` rest parameter hai. Jab bhi sum function ko call kiya jata hai, saare arguments ek array mein collect ho jate hain aur numbers variable mein store ho jate hain.

    Rest parameter ka istemal functions mein flexible parameter lists ko handle karne mein madad karta hai, jaise ki functions jo anant arguments accept karte hain.
*/


// function sum (...args) {    // arguments
//     for(let i=0; i<args.length; i++) {
//         console.log("You gave us : ", args[i] );
//     }
// }
// sum(1)
// sum(2)
// sum(3)
// sum(4)





// function min(){
//     console.log(arguments);
//     console.log(arguments.length);
// }






// Destructuring function :-)

/* 
    Destructuring ek JavaScript feature hai jo arrays ya objects se values ko extract karke variables ko assign karta hai. Yeh code ko concise banata hai aur specific values ko easily access karne mein madad karta hai.

    Yeh kuch examples hain destructuring ke istemal ke :-

    1. Array Destructuring :-

    const numbers = [1, 2, 3, 4, 5];
    const [first, second] = numbers;
    console.log(first); // Output: 1
    console.log(second); // Output: 2

    2. Object Destructuring :-

    const person = {
    name: 'John',
    age: 30,
    country: 'USA'
    };
    const { name, age } = person;
    console.log(name); // Output: John
    console.log(age); // Output: 30

    3. Function Parameters Destructuring :-

    function greet({ name, age }) {
    console.log(`Hello ${name}, you are ${age} years old.`);
    }
    const person = {
    name: 'Alice',
    age: 25
    };
    greet(person); // Output: Hello Alice, you are 25 years old.


    Destructuring ka istemal variables ko initialize karne mein, functions se values extract karne mein, aur nested data structures ke elements ko access karne mein hota hai. Yeh code ko readable aur concise banata hai. 
*/


// let names = ["Tony", "Bruce", "Peter", "Steve", "John", "Harry"];

// let [winner, runnerup, ...others] = names;

// console.log(winner); // Output: Tony
// console.log(runnerup); // Output: Bruce
// console.log(others); // Output: ["Peter", "Steve", "John", "Harry"]





// const student = {
//     name: 'John',
//     age: 30,
//     country: 'USA',
//     username: 'john@example.com',
//     password: 'abcd@123',
// };

// let {username: user, password: secret,city: place = 'New York'} = student;

// console.log(user);
// console.log(secret);
// console.log(place);