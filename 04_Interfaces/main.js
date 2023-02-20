"use strict";
var user1 = {
    name: "John",
    age: 30
};
var user2 = {
    name: "Jana"
};
//---------------------------------------------
var user1_A = {
    name: "John",
    age: 30
};
var user2_A = {
    name: "John"
};
var user1_B = {
    name: "John",
    age: 30
};
var user2_B = {
    // age missing
    name: "John"
};
var user1_C = {
    name: "John",
    age: 30
};
var user2_C = {
    // age is no more missing, it is optional
    name: "John"
};
// --------------------------------------------
// Auto completion
console.log(user1_C.age);
var user1_D = {
    name: "John",
    age: 30,
    getMessage: function () {
        return "Hello +".concat(this.name);
    }
};
var user2_D = {
    // age is no more missing, it is optional
    name: "John",
    getMessage: function () {
        return "Hello +".concat(this.name);
    }
};
console.log(user2_D.getMessage());
//---
var user1_new = {
    name: "John",
    age: 30,
    getMessage: function () {
        return "Hello +".concat(this.name);
    }
};
console.log("user1_new.age= ", user1_new.age);
console.log("user1_new.name= ", user1_new.name);
console.log("user1_new.getMessage()= ", user1_new.getMessage());
