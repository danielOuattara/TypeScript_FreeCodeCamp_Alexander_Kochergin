"use strict";
//---------------------------------------
// Working with the Class
var User = /** @class */ (function () {
    function User(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    User.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return User;
}());
var user_1 = new User("John", "Doe");
console.log(user_1.getFullName());
console.log(user_1.firstName);
//------------------------------------------------------------
// public, private, protected, static, abstract, ...
var User2 = /** @class */ (function () {
    function User2(firstName, lastName, birthDate, nationality) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.nationality = nationality;
    }
    User2.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return User2;
}());
var user_2 = new User2("John", "Doe", "01 Jan 1900", "chinese");
console.log(user_2.getFullName());
console.log(user_2.firstName); // X Incorrect , private attribute
// console.log(user_2.birthDate); // X Incorrect , private attribute
// console.log(user_2.birthDate); // X Incorrect , protected attribute
//------------------------------------------------------------
