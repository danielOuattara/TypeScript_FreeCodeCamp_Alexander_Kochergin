const user1 = {
  name: "John",
  age: 30,
};

const user2 = {
  name: "Jana",
};

//---------------------------------------------
const user1_A: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 30,
};

const user2_A: {
  // age missing
  name: string;
  age: number;
} = {
  name: "John",
};

//---------------------------------------------
// Interfaces

interface User {
  name: string;
  age: number;
}

const user1_B: User = {
  name: "John",
  age: 30,
};

const user2_B: User = {
  // age missing
  name: "John",
};

//---------------------------------------------
// Interfaces + optional properties

interface User2 {
  name: string;
  age?: number;
}

const user1_C: User2 = {
  name: "John",
  age: 30,
};

const user2_C: User2 = {
  // age is no more missing, it is optional
  name: "John",
};

// --------------------------------------------
// Auto completion

console.log(user1_C.age);

// --------------------------------------------
// Function in interfaces

interface User3 {
  name: string;
  age?: number;
  getMessage(): string;
}

const user1_D: User3 = {
  name: "John",
  age: 30,
  getMessage() {
    return `Hello +${this.name}`;
  },
};

const user2_D: User3 = {
  // age is no more missing, it is optional
  name: "John",
  getMessage() {
    return `Hello +${this.name}`;
  },
};

console.log(user2_D.getMessage());

//------

interface User4 {
  name: string;
  age?: number;
  getMessage?(): string;
}

//---

const user1_new: User4 = {
  name: "John",
  age: 30,
  getMessage() {
    return `Hello +${this.name}`;
  },
};

console.log("user1_new.age= ", user1_new.age);
console.log("user1_new.name= ", user1_new.name);
console.log("user1_new.getMessage()= ", user1_new.getMessage!());

//---

// -----------------------------------------------------
// Bonus: 1 interface naming convention

interface IUser {
  name: string;
  age?: number;
  getMessage(): string;
}

//---

interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

//---

interface UserI {
  name: string;
  age?: number;
  getMessage(): string;
}
