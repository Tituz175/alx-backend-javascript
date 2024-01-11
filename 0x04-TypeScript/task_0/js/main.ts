interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

let student1: Student = { firstName: 'Praise', lastName: 'Oyekanmi', age: 20, location: 'USA' };
let student2: Student = { firstName: 'Eri', lastName: 'Oyekanmi', age: 2, location: 'USA' };

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableBody = document.createElement('tbody');
table.appendChild(tableBody);

studentsList.forEach((item) => {
    tableBody.innerHTML += `<tr><td>${item.firstName}</td><td>${item.location}</td></tr>`
});

document.body.appendChild(table);
