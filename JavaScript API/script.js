// API :----------------------------------------------------------------

/**
    JavaScript API ka matlab hota hai "JavaScript Application Programming Interface." Ye ek set hoti hai jo JavaScript language ke through third-party applications ya services ke saath interaction karne ki permission deti hai. Ye APIs commonly use hoti hain web development mein, jahan ye browser ke features aur functionality ko access karne ke liye use hoti hain. Jaise ki DOM manipulation, AJAX requests, browser events handling, audio/video control, graphics rendering, etc. API ke through, developers ko browsers ke capabilities ko extend karne aur websites ya web applications ko dynamic banane ka mauka milta hai.
*/



/**
    DOM (Document Object Model) ka matlab hota hai "Document Object Model." Ye ek API hota hai jismein ek HTML document ko JavaScript mein access karne ke liye use hoti hain. Ye API ke through, developers ko HTML document ko JavaScript mein access karne ke liye use hoti hain.
*/









// JSON :----------------------------------------------------------------

/*
    JSON (JavaScript Object Notation) ka matlab hota hai "JavaScript Object Notation." Ye ek format hota hai jismein JavaScript objects ko JSON format mein convert karne ke liye use hoti hain. Ye JSON format ke through, developers ko JavaScript objects ko JSON format mein convert karne ke liye use hoti hain.


    JSON ka matlab hota hai "JavaScript Object Notation." Ye ek lightweight data interchange format hota hai, jo ki readable aur easy-to-parse hota hai. JSON originally JavaScript mein object literal syntax ka extension tha, lekin ab ye independent format hai aur kisi bhi programming language mein use kiya ja sakta hai.

    JSON ek text based format hai jo data ko store aur exchange karne ke liye use hota hai. Ye commonly APIs ke through data exchange ke liye istemal hota hai, jaise ki web services ya server se data retrieve karne ke liye.

    JSON ka structure simple hota hai, aur ye key-value pairs ko represent karta hai. Ye arrays, objects, strings, numbers, booleans, aur null values ko support karta hai. JSON ke data ko JavaScript mein parse karna aur JavaScript objects mein convert karna bahut aasan hota hai, aur isliye ye web development mein widespread istemal hota hai.

    Example :-

    {
        "name": "John",
        "age": 30,
        "city": "New York"
    }

    Is example mein, JSON object hai jisme "name", "age", aur "city" keys hain, aur unke corresponding values "John", 30, aur "New York" hain.

*/








// Accessing JSON data :- )

// let jsonRes = '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);





// let student = {
//     name : 'Zeyaur',
//     marks : 95,
// };

// console.log(JSON.stringify(student));







// Testing API requests :-)  {https://hoppscotch.io/}


// https://catfact.ninja/fact

// https://www.boredapi.com/api/activity

// https://dog.ceo/api/breeds/image/random







// Ajax (Asynchronous JavaScript and XML) :-)

/*
    AJAX ka matlab hota hai "Asynchronous JavaScript and XML." Ye ek technique hai jisse web pages ko asynchronous manner mein update kiya ja sakta hai bina page refresh kiye. AJAX ke through, web pages background mein server se data retrieve kar sakti hain aur phir us data ko dynamically update kar sakti hain, jisse users ko seamless experience milta hai.

    AJAX ka use mainly client-side scripting language jaise ki JavaScript ke saath kiya jata hai. Isme XMLHttpRequest object ka use hota hai jo server se data retrieve karne aur server par data ko update karne ke liye hota hai.

    AJAX ki madad se, web developers dynamic web content generate kar sakte hain jaise ki :-

    1. Real-time data updates :- Jaise ki chat applications ya social media feeds mein naye messages ya posts ko display karna.
    2. Form submission without page refresh :- Form data ko server par bhejne aur server se response ko dynamic taur par update karne ke liye.
    3. Auto-complete suggestions :- Search boxes mein auto-complete suggestions provide karna server se data retrieve karke.
    4. Lazy loading :- Web pages ke parts ko load karte waqt, content ko background mein retrieve karke users ko faster page loading experience provide karna.

    Overall, AJAX web development ko more interactive aur responsive banaata hai, aur users ko better experience deta hai.
*/








// Status Codes :-)

/*
    Status codes ka matlab hota hai "Status Codes." Ye ek set hoti hai jismein ek HTTP request ko server se response karne ke liye use hoti hain. Ye status codes ke through, developers ko HTTP request ko server se response karne ke liye use hoti hain.

    200 - OK 
    400 - Bad Request
    404 - Not Found
    500 - Internal Server Error
*/







// Add Information in URLs :-)

// https://www.google.com/search?q=harry+porter

// https://api.potterdb.com/v1/movies










// Http headers :-) header and value

/*
    HTTP headers ka matlab hota hai "HTTP Headers." Ye ek set hoti hai jismein ek HTTP request ko server se response karne ke liye use hoti hain. Ye headers ke through, developers ko HTTP request ko server se response karne ke liye use hoti hain.

    Ye headers ke through, developers ko HTTP request ko server se response karne ke liye use hoti hain.
*/









// Our First Request :-) using Fetch 


// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
// })
//    .then((response) => {
//     return response.json();
// })
// .then((data2) => {
//     console.log("data2 = ", data2.fact);
// })
// .catch((error) => {
//     console.log("ERROR! -", error);
// });








// Our First Request (using Fetch with async/await) :-)


// let url = "https://catfact.ninja/fact";
// async function getFacts () {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data.fact); 

//         let response2 = await fetch(url);
//         let data2 = await response2.json();
//         console.log(data2.fact); 
//     }
//     catch (error) {
//         console.log("ERROR! -", error);
//     }
//     console.log("Bye");
// }

// console.log(getFacts());








// Axios API :-) Library to make  HTTP requests

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     // console.log(fact);

//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";
// async function getFacts () {
//     try {
//         let response = await axios.get(url);
//         return response.data.fact;
//     }
//     catch (error) {
//         console.log("ERROR! -", error);
//         return "No facts found";
//     }
// }










// let btn = document.querySelector("button");

// let url = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     // console.log(link);
//     let img  = document.querySelector("img");
//     img.setAttribute("src", link);
//     console.log(link);
// });

// async function getImage () {
//     try {
//         let response = await axios.get(url);
//         return response.data.message;
//     }
//     catch (error) {
//         console.log("ERROR! -", error);
//         return "/";
//     }
// }









// Axios (Sending Headers) :-)

// const url = "https://icanhazdadjoke.com/";

// async function getJokes () {
//     try {
//         const config = {headers: {Accept: "application/json"}};
//         const response = await axios.get(url, config);
//         console.log(response.data.joke);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// console.log(getJokes());








// Axios (Updating Query Strings) :-)

// let url = "http://universities.hipolabs.com/search?name=";

// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);

//     let colArr = await getColleges(country);
//     show (colArr);
// });

// function show (colArr) {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of colArr){
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges (country) {
//     try {
//         let response = await axios.get(url + country);
//         return response.data;
//     }
//     catch (error) {
//         console.log("Error : ", error);
//         return [];
//     }
// }