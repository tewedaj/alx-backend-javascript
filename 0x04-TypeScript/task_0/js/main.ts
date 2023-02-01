interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

var firstStudent: Student = {
    firstName: "Tewedaj",
    lastName: "Getahun",
    age: 21,
    location: 'Addis Abeba' 
};

var secondStudent: Student  = {
    firstName: "Bethal",
    lastName: "Gashawe",
    age: 20,
    location: 'Addis Abeba' 
};

var studentsList: Student[] = [firstStudent, secondStudent];

var table = document.createElement('table');
document.body.appendChild(table);

studentsList.map((item: Student) => {
    var row = document.createElement('tr');
    table.appendChild(row);
    var column1 = document.createElement('td');
    column1.innerHTML = item.firstName;
    row.appendChild(column1);
    var column2 = document.createElement('td');
    column2.innerHTML = item.location;
    row.appendChild(column2);

    return row;
});

