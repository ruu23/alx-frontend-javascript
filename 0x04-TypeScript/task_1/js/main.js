var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ".").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        this.firstName;
    };
    return StudentClass;
}());
var teacher1 = {
    firstName: 'arwa',
    lastName: 'Mahmoud',
    fullTimeEmployee: false,
    location: 'Mansoura',
    yearsOfExperience: 2,
    contract: true,
};
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
