// Event Listeners for Elements :-) =================================================================


// let p = document.querySelector('p');

// p.addEventListener('click', function (){
//     console.log("Clicked");
// })






// let div = document.querySelector('div');

// div.addEventListener("mouseenter", function (){
//     console.log("Mouse inside box");
// }) 






// this in Event Listeners :-) =================================================================

// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let btn = document.querySelector("button");

// function changeColor () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "green";
// }

// h1.addEventListener('click', changeColor);
// h3.addEventListener('click', changeColor);
// p.addEventListener('click', changeColor);
// btn.addEventListener('click', changeColor);








// Keyboard Events :-) =================================================================

// let btn = document.querySelector("button");

// btn.addEventListener("click", function (event){
//     console.log(event);
//     console.log("Button was clicked");
// })


// btn.addEventListener("dblclick", function (event){
//     console.log(event);
//     console.log("Button was clicked");
// })








// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//     console.log("key = ", event.key);
//     console.log("code = ", event.code);
//     console.log("Key was pressed");
// });

// inp.addEventListener("keyup", function (event) {
//     console.log(event);
//     console.log("Key was released");
// });








// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//     console.log("code = ", event.code); // ArrowUp, ArrowDown, ArrowLeft, ArrowRight

//     if(event.code == "ArrowUp") {
//         console.log("Character moves forward");
//     }

//     else if(event.code == "ArrowDown") {
//         console.log("Character moves backward");
//     }

//     else if(event.code == "ArrowLeft") {
       
//         console.log("Character moves left");
//     }
//     else if(event.code == "ArrowRight") {
//         console.log("Character moves Right");
//     }
// });









// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//     console.log("code = ", event.code); // ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)

//     if(event.code == "KeyU") {
//         console.log("Character moves Up");
//     }

//     else if(event.code == "KeyD") {
//         console.log("Character moves down");
//     }

//     else if(event.code == "KeyL") {
       
//         console.log("Character moves left");
//     }
//     else if(event.code == "KeyR") {
//         console.log("Character moves Right");
//     }
// });













// Form Events :-) =================================================================

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event){
//     event.preventDefault();
//     console.log("Form Submit");
//     // alert("Form Submit");
// });









// Extractinng Form Data :-) =================================================

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event){
//     event.preventDefault();
    
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`${user.value}, your password is set to ${pass.value}`);
// });










// let form = document.querySelector("form");

// form.addEventListener("submit", function (event){
//     event.preventDefault();
//     console.dir(form);
    
//     let user = this.elements[0]; // form.elements[0]
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`${user.value}, your password is set to ${pass.value}`);
// });












// More Events :-) =================================================================

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event){
//     event.preventDefault();
    
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function (){
//     console.log("input changed");
//     console.log("Final value = ", this.value);
// });











// let form = document.querySelector("form");

// form.addEventListener("submit", function (event){
//     event.preventDefault();
    
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function (){
//     console.log("change event");
//     console.log("Final value = ", this.value);
// });

// user.addEventListener("input", function (){
//     console.log("input event fired");
//     console.log("Final value = ", this.value);
// });











let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function (){
    console.log(inp.value);
    p.innerText = inp.value;
});