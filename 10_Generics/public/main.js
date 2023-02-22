"use strict";
// generic T datatype
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const addId_00 = (obj) => {
//   return { ...obj, id: Date.now().toString(16) };
// };
// const user_00 = {
//   name: "Jack",
// };
// const result_00 = addId_00(user_00); // hover on addId and see
// console.log("result_00 = ", result_00);
//-----------------------------------------------
var addId0 = function (obj) {
    return __assign(__assign({}, obj), { id: Date.now().toString(16) });
};
var user0 = {
    name: "Jack"
};
var result0 = addId0(user0); // hover on addId and see
console.log("result_0 = ", result0);
//-------------------------------------------------
/* use generic
/* ------------
/*
/* define a generic: <T>
/* All generic data type are written inside  <  and >
*/
var addId = function (obj) {
    return __assign(__assign({}, obj), { id: Date.now().toString(16) });
};
var user = {
    name: "Jack"
};
var result = addId(user); // hover on addId and see
console.log("result = ", result);
//----------------------------------------------------
var addId_2 = function (obj) {
    return __assign(__assign({}, obj), { id: Date.now().toString(16) });
};
var user_2 = {
    name: "Jack"
};
var result_2 = addId_2(user_2); // hover on addId_2 and see
console.log("result_2 = ", result_2);
//----------------------------------------------------
// our function expect specifically an object
// So we are setting the default generic type here
var addId_3 = function (obj) {
    return __assign(__assign({}, obj), { id: Date.now().toString(16) });
};
var user_3 = {
    name: "Jack"
};
// const result_3_a = addId_3<UserInterface>("foo"); //  X Incorrect
var result_3_b = addId_3(user_3); //  Correct
console.log(result_3_b);
//------------------------------------------------------
// Generics for  Interfaces:
// generics allow us to provide different datatype to the same structure
var addId_4 = function (obj) {
    return __assign(__assign({}, obj), { id: Date.now().toString(16) });
};
var user_4 = {
    name: "Jack",
    data: {
        meta: "foo"
    }
};
var user_4_bis = {
    name: "John Doe",
    data: ["foo", "boo"]
};
var result_4 = addId_4(user_4); //  Correct
console.log("result_4 = ", result_4);
var result_4_bis = addId_4(user_4_bis); //  Correct
console.log("result_4_bis = ", result_4_bis);
//--------------------------------------------------------
// passing several data types
var addId_5 = function (obj) {
    return __assign(__assign({}, obj), { id: Date.now().toString(16) });
};
var user_5 = {
    name: "Jack",
    data: {
        meta: "foo"
    },
    meta: "bar"
};
var user_5_bis = {
    name: "John Doe",
    data: ["foo", "boo"],
    meta: "bar"
};
var result_5 = addId_5(user_5); //  Correct
console.log("result_5 = ", result_5);
var result_5_bis = addId_5(user_5_bis); //  Correct
console.log("result_5_bis = ", result_5_bis);
