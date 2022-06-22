//---------------------------------------------
// Void

// Accepatble syntax
const doSometing = () => {
  console.log("Do someting");
};

// Recommanded syntax, be specific
const doSometing2 = (): void => {
  console.log("Do someting");
};

let foo: void = undefined;

// ---------------------------------------------
// Any - Avoid at any cost ! Please !

let foo2: any = true;
foo2 = "OK";
foo2.bar(); // ???, Not good

//-----------------------------------------------
// Never

const doSometing3 = (): never => {
  console.log("Do someting");
  throw "Never";
};

//------------------------------------------------

// Unknown

let variableAny: any = 10;
let variableUnknown: unknown = 10;

let string_1: string = variableAny;
let string_2: string = variableUnknown; // X Incorrect

console.log(variableAny.foo()); // acceptable, even if no meaning
console.log(variableUnknown.foo()); // X Incorrect

//-------------------------------------------------

// Type Assertion: converting one type to another

let variableAny2: any = 10;
let variableUnknown2: unknown = 10;

let string_12: string = variableAny;
let string_22: string = variableUnknown as string; // as => assertion/converting operator

console.log(variableAny.foo()); // acceptable, even if no meaning
console.log(variableUnknown.foo()); // X Incorrect

let pageNumber: string = "1";

let numericPageNumber: number = pageNumber as unknown as number;
