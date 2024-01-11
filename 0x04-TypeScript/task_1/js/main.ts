interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any;
};

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number
};

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

interface IprintTeacher{
    (firstName:string, lastName:string):string;
};

const printTeacher:IprintTeacher = (firstName, lastName) =>{
    return `${firstName[0]}. ${lastName}`;
};

interface IStudentClass {

    firstName: string;
    lastName: string;
    
    workOnHomework(): string;
    displayName(): string;
    
    }

class StudentClass implements IStudentClass{
    firstName: string;
    lastName: string;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

const  student1 = new StudentClass("Praise", "Oyekanmi");
console.log(student1.workOnHomework())
console.log(student1.displayName())
