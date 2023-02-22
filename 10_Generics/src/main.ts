// generic T datatype

// const addId_00 = (obj) => {
//   return { ...obj, id: Date.now().toString(16) };
// };

// const user_00 = {
//   name: "Jack",
// };

// const result_00 = addId_00(user_00); // hover on addId and see
// console.log("result_00 = ", result_00);

//-----------------------------------------------

const addId0 = (obj: { name: string }) => {
  return { ...obj, id: Date.now().toString(16) };
};

const user0 = {
  name: "Jack",
};

const result0 = addId0(user0); // hover on addId and see

console.log("result_0 = ", result0);

//-------------------------------------------------

/* use generic
------------
define a generic: <T>
All generic data type are written inside  <  and > 
*/

const addId = <T>(obj: T) => {
  return { ...obj, id: Date.now().toString(16) };
};

const user = {
  name: "Jack",
};

const result = addId(user); // hover on addId and see

console.log("result = ", result);

//----------------------------------------------------

const addId_2 = <T>(obj: T) => {
  return { ...obj, id: Date.now().toString(16) };
};

interface UserInterface_2 {
  name: string;
}

const user_2: UserInterface_2 = {
  name: "Jack",
};

const result_2 = addId_2<UserInterface_2>(user_2); // hover on addId_2 and see
console.log("result_2 = ", result_2);

const result_2_b = addId_2("foo"); //  X Incorrect
console.log("result_2_b = ", result_2_b);
//----------------------------------------------------

// now our function expect specifically an object
// So we are setting the default generic type here

const addId_3 = <T extends object>(obj: T) => {
  return { ...obj, id: Date.now().toString(16) };
};

interface UserInterface_3 {
  name: string;
}
const user_3: UserInterface_3 = {
  name: "Jack",
};

// const result_3_a = addId_3<UserInterface>("foo"); //  X Incorrect
const result_3_b = addId_3<UserInterface_3>(user_3); //  Correct

console.log(result_3_b);

//------------------------------------------------------

// Generics for  Interfaces:
//---------------------------

// generics allow us to provide different datatype to the same structure

const addId_4 = <T extends object>(obj: T) => {
  return { ...obj, id: Date.now().toString(16) };
};

// to make interface generic: add <T> after name
interface UserInterface_4<T> {
  name: string;
  data: T;
}

const user_4: UserInterface_4<{ meta: string }> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
};

const user_4_bis: UserInterface_4<string[]> = {
  name: "John Doe",
  data: ["foo", "boo"],
};

const result_4 = addId_4<UserInterface_4<{ meta: string }>>(user_4); //  Correct
console.log("result_4 = ", result_4);

const result_4_bis = addId_4<UserInterface_4<string[]>>(user_4_bis); //  Correct
console.log("result_4_bis = ", result_4_bis);

//--------------------------------------------------------
//
// passing several data types
//----------------------------

const addId_5 = <T extends object>(obj: T) => ({
  ...obj,
  id: Date.now().toString(16),
});

// to make interface multi generics: add <T, V> after name
interface UserInterface_5<T, V> {
  name: string;
  data: T;
  zeta: V;
}

const user_5: UserInterface_5<{ meta: string }, string> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
  zeta: "bar",
};

const user_5_bis: UserInterface_5<string[], string> = {
  name: "John Doe",
  data: ["foo", "boo"],
  zeta: "bar",
};

const result_5 = addId_5<UserInterface_5<{ meta: string }, string>>(user_5); //  Correct
console.log("result_5 = ", result_5);

const result_5_bis = addId_5<UserInterface_5<string[], string>>(user_5_bis); //  Correct
console.log("result_5_bis = ", result_5_bis);

/* 
As exercise read documents including Typescript functions , class, ...etc 
description like in ramda package */
