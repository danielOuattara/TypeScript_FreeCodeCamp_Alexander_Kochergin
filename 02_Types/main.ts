const hello = "world";

// hello = "bonjour"; // X Incorrect: hello is a constant

// implicit variable inference
let greetings = "bonjour";
greetings = "foo"; // Correct, let give something changeable
greetings = " true"; // Correct
greetings = true; // X Incorrect

// explicit variable inference

let greetings2: string = "Hello again";
//greetings2 = [] // X Incorrect