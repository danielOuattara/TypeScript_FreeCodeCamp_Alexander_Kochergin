// generic T datatype

const addId_00 = (obj) => {
  const id = Date.now().toString(16);
  return { ...obj, id };
};

const user_00 = {
  name: "Jack",
};

const result_00 = addId_00(user_00); // hover on addId and see

console.log(result_00);

//-----------------------------------------------

const addId0 = (obj: { name: string }) => {
  const id = Date.now().toString(16);
  return { ...obj, id };
};

const user0 = {
  name: "Jack",
};

const result0 = addId0(user0); // hover on addId and see

console.log(result0);

//-------------------------------------------------

/* use generic
/* ------------
/*
/* define a generic: <T>
/* All generic data type are written inside  <  and > 
*/

const addId = <T>(obj: T) => {
  const id = Date.now().toString(16);
  return { ...obj, id };
};

const user = {
  name: "Jack",
};

const result = addId(user); // hover on addId and see

console.log(result);

//----------------------------------------------------

const addId_2 = <T>(obj: T) => {
  const id = Date.now().toString(16);
  return { ...obj, id };
};

interface UserInterface {
  name: string;
}
const user_2: UserInterface = {
  name: "Jack",
};

const result_2 = addId_2(user_2); // hover on addId_2 and see

console.log(result_2);

//----------------------------------------------------

const addId_3 = <T extends object>(obj: T) => {
  const id = Date.now().toString(16);
  return { ...obj, id };
};

interface UserInterface {
  name: string;
}
const user_3: UserInterface = {
  name: "Jack",
};

// const result_3_a = addId_3<UserInterface>("foo"); //  X Incorrect
const result_3_b = addId_3<UserInterface>(user_3); //  Correct

console.log(result_3_b);

//------------------------------------------------------

// Generics
