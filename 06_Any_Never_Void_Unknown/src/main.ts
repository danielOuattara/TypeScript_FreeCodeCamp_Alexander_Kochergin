//--------------------------------------------
// Void

// Acceptable syntax
const doSomething = () => {
  console.log("Do something");
};

// Recommended syntax, be specific
const doSomething2 = (): void => {
  console.log("Do something");
};

let foo: void = undefined;

// ---------------------------------------------
// Any - Avoid at any cost ! Please !

let foo2: any = true;
foo2 = "OK";
foo2.bar(); // ???, Not good

//-----------------------------------------------
// Never

const doSomething3 = (): never => {
  console.log("Do something");
  throw "Never";
};

//------------------------------------------------

// Unknown

let variableAny: any = 10;
let variableUnknown: unknown = 10;

let var_1: string = variableAny;

var_1 = "Hello";

let var_2: string = variableUnknown; // X Incorrect
var_2 = "Hello";

console.log(variableAny.foo()); // acceptable, even if no meaning
console.log(variableUnknown.foo()); // X Incorrect

//-------------------------------------------------

// Type Assertion: converting one type to another

let variableAny2: any = 10;
let variableUnknown2: unknown = 10;

let var_11: string = variableAny;
var_11 = "hello";

let var_22: string = variableUnknown as string; // as => assertion/converting operator
var_22 = "Hello again";

let pageNumber: string = "1";

let numericPageNumber: number = pageNumber as unknown as number;
