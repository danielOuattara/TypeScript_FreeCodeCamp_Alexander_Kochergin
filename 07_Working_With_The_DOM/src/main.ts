//---------------------------------------------
// Recall Type Assertion / Type Casting

let page: any = "1";
let pageNumber = page as string;

// ---------------------------------------------

/* Working with the DOM
-------------------------
Note: 
 - TypeScript has a lot of types for handling DOM out of the box
 - Element in TypeScript is the highest class in hierarchy   
 - HTML Event is also in th highest class in hierarchy
 */

const someElement = document.querySelector(".foo"); // not specific

// console.log(someElement.)  // auto completion should be available

console.log(someElement.value); // Incorrect: You have to be more specific: try again !

// here the solution: precise the type of element using type assertion.
const someElement_2 = document.querySelector(".foo") as HTMLInputElement; // if it is an input element, for example
console.log(someElement_2.value); // Cool !
console.log(someElement_2.focus()); // Cool !
console.log(someElement_2.blur()); // Cool !

const someElement_2_bis = document.querySelector(".foo") as HTMLAnchorElement;
console.log(someElement_2_bis.href); // Cool !
console.log(someElement_2_bis.innerHTML); // Cool !

const someElement_2_ter = document.querySelector(".foo") as HTMLHtmlElement; // if it is an input element, for example
console.log(someElement_2_ter.style); // Cool !
console.log(someElement_2_ter.onmouseover); // Cool !

//-----------------------------------------------

// Adding a Listener

const someElement_3 = document.querySelector(".foo");
someElement_3.addEventListener("blur", (event) => {
  console.log(event.target.value);
});

//---

const someElement_4 = document.querySelector(".foo");
someElement_4.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});

//---

const someElement_5 = document.querySelector(".foo");
someElement_5?.addEventListener("blur", (event) => {
  const eventTarget = event.target as HTMLInputElement;
  console.log(eventTarget.value);
});

//---

const someElement_6 = document.querySelector(".foo") as HTMLInputElement; // if it is an input element, for example
someElement_6.addEventListener("blur", (event) => {
  console.log(event.target.value);
});

//---

const someElement_7 = document.querySelector(".foo") as HTMLInputElement; // if it is an input element, for example
someElement_7.addEventListener("blur", (event) => {
  const eventTarget = event.target as HTMLInputElement;
  console.log(eventTarget.value);
});

//---

const someElement_8 = document.querySelector(".foo") as HTMLInputElement; // if it is an input element, for example
someElement_8.addEventListener("mouseover", (event) => {
  const eventTarget = event.target as HTMLInputElement;
  console.log(eventTarget.value);
});

//---

const someElement_9 = document.querySelector(".foo") as HTMLInputElement; // if it is an input element, for example
someElement_9.addEventListener("copy", (event) => {
  const eventTarget = event.target as HTMLInputElement;
  console.log(eventTarget.value);
});

//---

const someElement_10 = document.querySelector(".foo") as HTMLInputElement; // if it is an input element, for example
someElement_10.addEventListener("copy", (event) => {
  console.log((event.target as HTMLInputElement).value);
});
