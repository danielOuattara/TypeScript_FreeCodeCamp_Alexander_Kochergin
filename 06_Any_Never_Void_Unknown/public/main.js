"use strict";
//--------------------------------------------
// Void
// Acceptable syntax
var doSomething = function () {
    console.log("Do something");
};
// Recommended syntax, be specific
var doSomething2 = function () {
    console.log("Do something");
};
var foo = undefined;
// ---------------------------------------------
// Any - Avoid at any cost ! Please !
var foo2 = true;
foo2 = "OK";
foo2.bar(); // ???, Not good
//-----------------------------------------------
// Never
var doSomething3 = function () {
    console.log("Do something");
    throw "Never";
};
//------------------------------------------------
// Unknown
var variableAny = 10;
var variableUnknown = 10;
var var_1 = variableAny;
var_1 = "Hello";
var var_2 = variableUnknown; // X Incorrect
var_2 = "Hello";
console.log(variableAny.foo()); // acceptable, even if no meaning
console.log(variableUnknown.foo()); // X Incorrect
//-------------------------------------------------
// Type Assertion: converting one type to another
var variableAny2 = 10;
var variableUnknown2 = 10;
var var_11 = variableAny;
var_11 = "hello";
var var_22 = variableUnknown; // as => assertion/converting operator
var_22 = "Hello again";
var pageNumber = "1";
var numericPageNumber = pageNumber;
