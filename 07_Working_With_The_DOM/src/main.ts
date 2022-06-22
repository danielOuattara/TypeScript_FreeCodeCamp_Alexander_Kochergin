//---------------------------------------------
// Recall Type Assertion / Type Casting

let page: any = "1";
let paegeNumber = page as string;

// ---------------------------------------------

// Working with the DOM

const someElement = document.querySelector(".foo");
// console.log(someElement.value); // What ?  Yes ! cool!  You have to be more specific: try again !

const someElement_2 = document.querySelector(".foo") as HTMLInputElement; // if it is an input element, for example
console.log(someElement_2.value); // Cool !
// element is the highest class in hierachy

//-----------------------------------------------

// Adding a Listener

const someElement_3 = document.querySelector(".foo");
someElement_3?.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});

const someElement_4 = document.querySelector(".foo") as HTMLInputElement; // if it is an input element, for example
someElement_4.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});
