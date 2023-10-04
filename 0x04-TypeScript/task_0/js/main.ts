interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const astudent: Student = {
    firstName: "Sheldon",
    lastName: "Cooper",
    age: 32,
    location: "Chicago",
}

const bstudent: Student = {
    firstName: "Howard",
    lastName: "Wolowitz",
    age: 30,
    location: "Illinois",
}
const studentsList: Array<Student> = [
    astudent,
    bstudent,
];
const renderTable = (studentsList: Array<Student>): void =>  {
    // create table tag
    const table = document.createElement('table');
    const headRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headRow);
  
    // insert headers
    headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');
  
    for (const student of studentsList) {
      const studentRow = document.createElement('tr')
      studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
      studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
      table.insertAdjacentElement('beforeend', studentRow);
    }
  
    document.body.insertAdjacentElement('beforeend', table);
  }
  
  renderTable(studentsList);