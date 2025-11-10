import {inspect} from 'util';

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements  DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }

    [inspect.custom]() {
        return `Director`
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }

    [inspect.custom]() {
        return `Teacher`
    }
}

function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === 'number') {
        if (salary < 500) {
            return new Teacher();
        }
    }
    return new Director();
}



function isDirector(employee: Teacher | Director): employee is Director{
    return employee instanceof Director
}

function executeWork(employee: Teacher | Director): string {
    if ( isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }

}
type Subjects = 'Math' | 'History' 
function teachClass(todayClass: Subjects): string {
    if(todayClass === 'Math'){
        return `Teaching Math`
    }
    else {
        return `Teaching History`
    }
}
