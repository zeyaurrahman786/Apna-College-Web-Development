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






