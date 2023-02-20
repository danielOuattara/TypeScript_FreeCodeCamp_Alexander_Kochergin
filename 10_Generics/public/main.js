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
var addId_00 = function (obj) {
    var id = Date.now().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user_00 = {
    name: "Jack"
};
var result_00 = addId_00(user_00); // hover on addId and see
console.log(result_00);
//-----------------------------------------------
var addId0 = function (obj) {
    var id = Date.now().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user0 = {
    name: "Jack"
};
var result0 = addId0(user0); // hover on addId and see
console.log(result0);
//-------------------------------------------------
/* use generic
/* ------------
/*
/* define a generic: <T>
/* All generic data type are written inside  <  and >
*/
var addId = function (obj) {
    var id = Date.now().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user = {
    name: "Jack"
};
var result = addId(user); // hover on addId and see
console.log(result);
//----------------------------------------------------
var addId_2 = function (obj) {
    var id = Date.now().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user_2 = {
    name: "Jack"
};
var result_2 = addId_2(user_2); // hover on addId_2 and see
console.log(result_2);
//----------------------------------------------------
var addId_3 = function (obj) {
    var id = Date.now().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user_3 = {
    name: "Jack"
};
// const result_3_a = addId_3<UserInterface>("foo"); //  X Incorrect
var result_3_b = addId_3(user_3); //  Correct
console.log(result_3_b);
//------------------------------------------------------
// Generics
