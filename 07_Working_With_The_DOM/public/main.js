"use strict";
//---------------------------------------------
// Recall Type Assertion / Type Casting
var page = "1";
var pageNumber = page;
// ---------------------------------------------
/* Working with the DOM
-------------------------
Note:
 - TypeScript has a lot of types for handling DOM out of the box
 - Element in TypeScript is the highest class in hierarchy
 - HTML Event is also in th highest class in hierarchy
 */
var someElement = document.querySelector(".foo"); // not specific
// console.log(someElement.)  // auto completion should be available
console.log(someElement.value); // Incorrect: You have to be more specific: try again !
// here the solution: precise the type of element using type assertion.
var someElement_2 = document.querySelector(".foo"); // if it is an input element, for example
console.log(someElement_2.value); // Cool !
console.log(someElement_2.focus()); // Cool !
console.log(someElement_2.blur()); // Cool !
var someElement_2_bis = document.querySelector(".foo");
console.log(someElement_2_bis.href); // Cool !
console.log(someElement_2_bis.innerHTML); // Cool !
var someElement_2_ter = document.querySelector(".foo"); // if it is an input element, for example
console.log(someElement_2_ter.style); // Cool !
console.log(someElement_2_ter.onmouseover); // Cool !
//-----------------------------------------------
// Adding a Listener
var someElement_3 = document.querySelector(".foo");
someElement_3.addEventListener("blur", function (event) {
    console.log(event.target.value);
});
//---
var someElement_4 = document.querySelector(".foo");
someElement_4.addEventListener("blur", function (event) {
    var target = event.target;
    console.log(target.value);
});
//---
var someElement_5 = document.querySelector(".foo");
someElement_5 === null || someElement_5 === void 0 ? void 0 : someElement_5.addEventListener("blur", function (event) {
    var eventTarget = event.target;
    console.log(eventTarget.value);
});
//---
var someElement_6 = document.querySelector(".foo"); // if it is an input element, for example
someElement_6.addEventListener("blur", function (event) {
    console.log(event.target.value);
});
//---
var someElement_7 = document.querySelector(".foo"); // if it is an input element, for example
someElement_7.addEventListener("blur", function (event) {
    var eventTarget = event.target;
    console.log(eventTarget.value);
});
//---
var someElement_8 = document.querySelector(".foo"); // if it is an input element, for example
someElement_8.addEventListener("mouseover", function (event) {
    var eventTarget = event.target;
    console.log(eventTarget.value);
});
//---
var someElement_9 = document.querySelector(".foo"); // if it is an input element, for example
someElement_9.addEventListener("copy", function (event) {
    var eventTarget = event.target;
    console.log(eventTarget.value);
});
//---
var someElement_10 = document.querySelector(".foo"); // if it is an input element, for example
someElement_10.addEventListener("copy", function (event) {
    console.log(event.target.value);
});
