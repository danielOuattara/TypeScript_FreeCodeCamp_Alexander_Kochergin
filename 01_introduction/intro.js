//Write a better global code, make you organize ervery in advance
var Person = /** @class */ (function () {
    function Person(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    Person.prototype.getFulName = function () {
        return "this.firstName this.lastName";
    };
    return Person;
}());
var person = new Person("Daniel", "Ouattara");
person.getFulName();
var a = "1";
console.log(a.foo()); // X Incorrect
