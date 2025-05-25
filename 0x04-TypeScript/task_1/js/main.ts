// firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperience(number) this attribute is optional
// location(string) this attribute should always be defined
// Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract: boolean;
}

interface Directors {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  numberOfReports: number;
}
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(teacher3);
console.log(director1);

// Write a function printTeacher:

// It accepts two arguments firstName and lastName
// It returns the first letter of the firstName and the full lastName
// Example: printTeacher("John", "Doe") -> J. Doe
// Write an interface for the function named printTeacherFunction.

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Write a Class named StudentClass:
// The constructor accepts firstName(string) and lastName(string) arguments
// The class has a method named workOnHomework that return the string Currently working
// The class has a method named displayName. It returns the firstName of the student
// The constructor of the class should be described through an Interface
// The class should be described through an Interface

interface StudentInterface {
  workOnHomework: () => string;
  displayName: () => string;
}

interface StudentClass {
  new (firstName: string, lastName: string): StudentInterface;
}

class Student implements StudentInterface {
  constructor(
    private firstName: string,
    private lastName: string,
  ) {}

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}
