interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1 : Student = {
  firstName: "Arwa",
  lastName: "Mahmoud",
  age: 21,
  location: "Mansoura",
};

const student2 : Student = {
  firstName: "Anas",
  lastName: "Mahmoud",
  age: 25,
  location: "Cairo",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table')
const tbody = document.createElement('tbody')

table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';
table.style.background = 'pink';

table.appendChild(tbody)

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr')

  const firstNameCell = document.createElement('td')
  firstNameCell.textContent = student.firstName

  const locationCell = document.createElement('td')
  locationCell.textContent = student.location

  row.appendChild(firstNameCell)
  row.appendChild(locationCell)

  tbody.appendChild(row)

  firstNameCell.style.border = "1px solid black";
  locationCell.style.border = "1px solid black";
  firstNameCell.style.padding = "5px";
  locationCell.style.padding = "5px";
});

document.body.appendChild(table)