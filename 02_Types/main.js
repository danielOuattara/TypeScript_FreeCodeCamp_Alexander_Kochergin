var hello = "world";
// hello = "bonjour"; // X Incorrect: hello is a constant
// implicit variable inference
var greetings = "bonjour";
greetings = "foo"; // Correct, let give something changeable
greetings = " true"; // Correct
greetings = true; // X Incorrect
// explicit variable inference
var greetings2 = "Hello again";
//greetings2 = [] // X Incorrect
