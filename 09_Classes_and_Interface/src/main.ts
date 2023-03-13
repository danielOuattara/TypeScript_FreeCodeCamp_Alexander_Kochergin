// InterFaces + Classes

interface userInterface {
  getFullName(): string;
}

class User implements userInterface {
  private firstName: string;
  lastName: string;
  protected birthDate: string;
  readonly nationality: string;
  static maxWife: number;
  static readonly minWife: number = 1;

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

  static getInfos() {
    console.log(`Men in Qatar my have up to ${this.maxWife}`);
  }
}

const user_1 = new User("John", "Doe", "01 Jan 1900", "chinese");

console.log(user_1.getFullName()); // X Incorrect,static method call

User.maxWife = 4;
console.log(User.maxWife); // 4
console.log(User.minWife); // 1

User.getInfos();

console.log("----------------------------");
//--------------------------------------------------------------

// Inheritance in TypeScript

class Admin extends User {
  private editor: string;

  constructor(
    firstName: string,
    lastName: string,
    birthDate: string,
    nationality: string,
    editor: string,
  ) {
    super(firstName, lastName, birthDate, nationality);
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
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
  "Journal of Code",
);
console.log(admin.getEditor());

console.log(admin.nationality); // Accessible
console.log(admin.lastName); // Accessible

console.log("----------------------------");
//--------------------------------------------------------------

// Class + InterFace + Inheritance

class SuperAdmin extends User {
  constructor(
    firstName: string,
    lastName: string,
    birthDate: string,
    nationality: string,
    private _editor: string,
  ) {
    super(firstName, lastName, birthDate, nationality);
  }

  get editor() {
    return this._editor;
  }

  set editor(value) {
    this._editor = value;
  }
}

const superAdmin = new SuperAdmin(
  "John",
  "Doe",
  "01 Jan 1900",
  "chinese",
  "Journal of Code",
);
console.log(superAdmin);
console.log(superAdmin.editor);
superAdmin.editor = "cleaner";
console.log(superAdmin);
console.log("superAdmin.getEditor = ", superAdmin.editor);

console.log(superAdmin.nationality); // Accessible
console.log(superAdmin.lastName); // Accessible

console.log("----------------------------");
