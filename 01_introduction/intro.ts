//Write a better global code, make you organize ervery in advance

class Person {
  firstName: string;
  lastName: string;

  constructor(fName: string, lName: string) {
    this.firstName = fName;
    this.lastName = lName;
  }
  getFulName(): string {
    return `this.firstName this.lastName`;
  }
}

const person = new Person("Daniel", "Ouattara");
person.getFulName();


const a = "1";
console.log(a.foo())  // X Incorrect