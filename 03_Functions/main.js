"use strict";
/* VIDEO TIME: 17:27'  */
var getFullName = function (fName, lName) {
    return "".concat(fName, " ").concat(lName);
};
console.log(getFullName("John", "Doe")); // OK
console.log(getFullName(true, 2)); // Accepted but Non sense
//-------------------------------------------------------
var getFullName2 = function (fName, lName) {
    return "".concat(fName, " ").concat(lName);
};
// console.log(getFullName2(true, 2)); // X Incorrect
console.log(getFullName2("John", "Doe")); // Correct
//-------------------------------------------------------
var getFullName3 = function (fName, lName) {
    return "".concat(fName, " ").concat(lName);
};
// console.log(getFullName3(true, 2)); // X Incorrect
console.log(getFullName3("John", "Doe")); // Correct
