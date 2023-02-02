"use strict";
//---------------------------------------------
// Void
// Accepatble syntax
const doSometing = () => {
    console.log("Do someting");
};
// Recommanded syntax, be specific
const doSometing2 = () => {
    console.log("Do someting");
};
let foo = undefined;
// ---------------------------------------------
// Any - Avoid at any cost ! Please !
let foo2 = true;
foo2 = "OK";
foo2.bar(); // ???, Not good
//-----------------------------------------------
// Never
const doSometing3 = () => {
    console.log("Do someting");
    throw "Never";
};
//------------------------------------------------
// Unknown
let variableAny = 10;
let variableUnknown = 10;
let string_1 = variableAny;
let string_2 = variableUnknown; // X Incorrect
console.log(variableAny.foo()); // acceptable, even if no meaning
console.log(variableUnknown.foo()); // X Incorrect
//-------------------------------------------------
// Type Assertion: converting one type to another
let variableAny2 = 10;
let variableUnknown2 = 10;
let string_12 = variableAny;
let string_22 = variableUnknown; // as => assertion/converting operator
console.log(variableAny.foo()); // acceptable, even if no meaning
console.log(variableUnknown.foo()); // X Incorrect
let pageNumber = "1";
let numericPageNumber = pageNumber;
