interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName:string): string
}
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}.${lastName}`
}

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): void;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor({firstName, lastName}: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): void {
    this.firstName;
  }
}

const teacher1: Teacher = {
  firstName: 'arwa',
  lastName: 'Mahmoud',
  fullTimeEmployee: false,
  location: 'Mansoura',
  yearsOfExperience: 2,
  contract: true,
}
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);