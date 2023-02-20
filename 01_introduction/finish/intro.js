"use strict";
// Write a better global code, make you organized every in advance
var Person = /** @class */ (function () {
    function Person(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    Person.prototype.getFulName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person("Daniel", "Ouattara");
console.log(person.getFulName());
var a = "1";
// console.log(a.foo())  // X Incorrect
