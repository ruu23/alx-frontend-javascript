interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: Number;
  location: string;
  [key: string]: any;
};

interface Director extends Teacher{
    numberOfReports: number;
}

interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return`${firstName.charAt(0)}.${lastName}`;
};

interface StudentConstructor{
    firstName: string;
    lastName: string;
}

interface studentInterface{
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements studentInterface{
    firstName:string;
    lastName:string;
    constructor({firstName, lastName}: StudentConstructor){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework():string {
        return 'Currently working'
    }
    displayName():string {
        return this.firstName
    }
}
