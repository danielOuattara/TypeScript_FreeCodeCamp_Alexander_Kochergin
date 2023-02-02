"use strict";
//---------------------------------------
// Working with the Class
class User {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const user_1 = new User("John", "Doe");
console.log(user_1.getFullName());
console.log(user_1.firstName);
//------------------------------------------------------------
// public, private, protected, static
class User2 {
    constructor(fName, lName, b_Date, nationality) {
        this.firstName = fName;
        this.lastName = lName;
        this.birthDate = b_Date;
        this.nationality = nationality;
    }
    static getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const user_2 = new User2("John", "Doe", "01 Jan 1900", "chinese");
console.log(user_2.getFullName()); // X Incorrect,static method call
console.log(user_2.firstName); // X Incorrect , private atttribte
class User3 {
    constructor(fName, lName, b_Date, nationality) {
        this.firstName = fName;
        this.lastName = lName;
        this.birthDate = b_Date;
        this.nationality = nationality;
    }
    static getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
User3.minWife = 1;
const user_3 = new User3("John", "Doe", "01 Jan 1900", "chinese");
console.log(user_2.getFullName()); // X Incorrect,static method call
console.log(user_2.firstName); // X Incorrect , private atttribute
console.log(User3.getFullName()); // Correct
//--------------------------------------------------------------
// Inheritance in TypeScript
class Admin extends User3 {
    constructor(firstName, lastName, birthDate, nationality, my_editor) {
        super(firstName, lastName, birthDate, nationality);
        this.editor = my_editor;
    }
    setEditor(editor) {
        this.editor = editor;
    }
}
const admin = new Admin("John", "Doe", "01 Jan 1900", "chinese", "Jouranl of Code");
console.log(admin);
console.log(admin.nationality); // Accessible
console.log(admin.lastName); // Accessible
