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

// public, private, protected, static

class User2 {
  private firstName: string;
  private lastName: string;
  protected birthDate: string;
  readonly nationality: string;

  constructor(
    fName: string,
    lName: string,
    b_Date: string,
    nationality: string
  ) {
    this.firstName = fName;
    this.lastName = lName;
    this.birthDate = b_Date;
    this.nationality = nationality;
  }

  static getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user_2 = new User2("John", "Doe", "01 Jan 1900", "chinese");

console.log(user_2.getFullName()); // X Incorrect,static method call
console.log(user_2.firstName); // X Incorrect , private atttribte

//------------------------------------------------------------

// InterFaces + Classes

interface userInterface {
  getFullName(): string;
}

class User3 implements userInterface {
  private firstName: string;
  lastName: string;
  protected birthDate: string;
  readonly nationality: string;
  static readonly minWife: number = 1;

  constructor(
    fName: string,
    lName: string,
    b_Date: string,
    nationality: string
  ) {
    this.firstName = fName;
    this.lastName = lName;
    this.birthDate = b_Date;
    this.nationality = nationality;
  }

  static getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user_3 = new User3("John", "Doe", "01 Jan 1900", "chinese");

console.log(user_3.getFullName()); // X Incorrect,static method call
console.log(user_3.firstName); // X Incorrect , private atttribute
console.log(User3.getFullName()); // Correct

//--------------------------------------------------------------

// Inheritance in TypeScript

class Admin extends User3 {
  private editor: string;

  constructor(
    firstName: string,
    lastName: string,
    birthDate: string,
    nationality: string,
    my_editor: string
  ) {
    super(firstName, lastName, birthDate, nationality);
    this.editor = my_editor;
  }

  setEditor(editor: string): void {
    this.editor = editor;
  }
}

const admin = new Admin(
  "John",
  "Doe",
  "01 Jan 1900",
  "chinese",
  "Jouranl of Code"
);
console.log(admin);

console.log(admin.nationality); // Accessible
console.log(admin.lastName); // Accessible
