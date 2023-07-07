//---------------------------------------

// Working with the Class

class User {
  firstName: string;
  lastName: string;

  constructor(fName: string, lName: string) {
    this.firstName = fName;
    this.lastName = lName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user_1 = new User("John", "Doe");

console.log(user_1.getFullName());
console.log(user_1.firstName);

//------------------------------------------------------------

// public, private, protected, static, abstract, ...

class User2 {
  firstName: string;
  private lastName: string;
  protected birthDate: string;
  readonly nationality: string;
  static readonly gender: string = "Male";

  constructor(
    firstName: string,
    lastName: string,
    birthDate: string,
    nationality: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.nationality = nationality;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  whoIam() {
    console.log(`${this.getFullName()}, I'am ${this.nationality} citizen.`);
  }
}

const user_2 = new User2("John", "Doe", "01 Jan 1900", "russian");

console.log(user_2.getFullName());
console.log(user_2.firstName);
// console.log(user_2.lastName); // X Incorrect , private attribute
// console.log(user_2.birthDate); // X Incorrect , protected attribute

user_2.whoIam();
//user_2.nationality = "peruvian"; // X NO : Cannot assign to 'nationality' because it is a read-only property.ts(2540)

console.log(User2.gender); // -> Male
//------------------------------------------------------------
