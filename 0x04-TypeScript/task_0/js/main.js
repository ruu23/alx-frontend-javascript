var student1 = {
    firstName: "Arwa",
    lastName: "Mahmoud",
    age: 21,
    location: "Mansoura",
};
var student2 = {
    firstName: "Anas",
    lastName: "Mahmoud",
    age: 25,
    location: "Cairo",
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';
table.style.background = 'pink';
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
    firstNameCell.style.border = "1px solid black";
    locationCell.style.border = "1px solid black";
    firstNameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
});
document.body.appendChild(table);
