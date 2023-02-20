"use strict";
// InterFaces + Classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(firstName, lastName, birthDate, nationality) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.nationality = nationality;
    }
    User.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    User.getInfos = function () {
        console.log("Men in Quatar my have up to ".concat(this.maxWife));
    };
    User.minWife = 1;
    return User;
}());
var user_1 = new User("John", "Doe", "01 Jan 1900", "chinese");
console.log(user_1.getFullName()); // X Incorrect,static method call
User.maxWife = 4;
console.log(User.maxWife); // 4
console.log(User.minWife); // 1
User.getInfos();
console.log("----------------------------");
//--------------------------------------------------------------
// Inheritance in TypeScript
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, birthDate, nationality, editor) {
        var _this = _super.call(this, firstName, lastName, birthDate, nationality) || this;
        _this.editor = editor;
        return _this;
    }
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    return Admin;
}(User));
var admin = new Admin("John", "Doe", "01 Jan 1900", "chinese", "Journal of Code");
console.log(admin.getEditor());
console.log(admin.nationality); // Accessible
console.log(admin.lastName); // Accessible
console.log("----------------------------");
//--------------------------------------------------------------
// Class + InterFace + Inheritance
var SuperAdmin = /** @class */ (function (_super) {
    __extends(SuperAdmin, _super);
    function SuperAdmin(firstName, lastName, birthDate, nationality, _editor) {
        var _this = _super.call(this, firstName, lastName, birthDate, nationality) || this;
        _this._editor = _editor;
        return _this;
    }
    Object.defineProperty(SuperAdmin.prototype, "editor", {
        get: function () {
            return this._editor;
        },
        set: function (value) {
            this._editor = value;
        },
        enumerable: false,
        configurable: true
    });
    return SuperAdmin;
}(User));
var superAdmin = new SuperAdmin("John", "Doe", "01 Jan 1900", "chinese", "Journal of Code");
console.log(superAdmin);
console.log(superAdmin.editor);
superAdmin.editor = "cleaner";
console.log(superAdmin);
console.log("superAdmin.getEditor = ", superAdmin.editor);
console.log(superAdmin.nationality); // Accessible
console.log(superAdmin.lastName); // Accessible
console.log("----------------------------");
