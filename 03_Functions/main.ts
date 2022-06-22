const getFullName = (fName, lName) => {
  return `${fName} ${lName}`;
};

console.log(getFullName("John", "Doe"));

//-------------------------------------------------------

const getFullName2 = (fName: string, lName: string) => {
  return `${fName} ${lName}`;
};

// console.log(getFullName2(true, 2)); // X Incorrect
console.log(getFullName2("John", "Doe")); // Correct

//-------------------------------------------------------

const getFullName3 = (fName: string, lName: string): string => {
  return `${fName} ${lName}`;
};

// console.log(getFullName3(true, 2)); // X Incorrect
console.log(getFullName3("John", "Doe")); // Correct
