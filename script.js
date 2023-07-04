
var studentRecords = [];

// Function to add a student record
function addStudent() {
  // Get the form inputs
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var grade = document.getElementById('grade').value;
  var degree = document.getElementById('degree').value;
  var email = document.getElementById('email').value;

  // Create a new student object
  var student = {
    name: name,
    age: age,
    grade: grade,
    degree: degree,
    email: email
  };

  // Add the student object to the student records array
  studentRecords.push(student);

  // Clear the form inputs
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('grade').value = '';
  document.getElementById('degree').value = '';
  document.getElementById('email').value = '';

  // Call the displayStudents function to update the table
  displayStudents();
}

// Function to display the student records in the table
function displayStudents() {
  var tableBody = document.getElementById('studentList');
  tableBody.innerHTML = '';

  // Loop through the student records and create table rows
  for (var i = 0; i < studentRecords.length; i++) {
    var student = studentRecords[i];

    // Create a new row
    var row = document.createElement('tr');

    // Create table data cells for each property
    var idCell = document.createElement('td');
    idCell.textContent = i + 1;
    row.appendChild(idCell);

    var nameCell = document.createElement('td');
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    var ageCell = document.createElement('td');
    ageCell.textContent = student.age;
    row.appendChild(ageCell);

    var gradeCell = document.createElement('td');
    gradeCell.textContent = student.grade;
    row.appendChild(gradeCell);

    var degreeCell = document.createElement('td');
    degreeCell.textContent = student.degree;
    row.appendChild(degreeCell);

    var emailCell = document.createElement('td');
    emailCell.textContent = student.email;
    row.appendChild(emailCell);

    var actionsCell = document.createElement('td');
    actionsCell.innerHTML = `
      <button onclick="editStudent(${i})">Edit</i></button>
      <button onclick="deleteStudent(${i})">Delete</button>
    `;
    row.appendChild(actionsCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  }
}
// Function to delete a student record
function deleteStudent(index) {
    // Remove the student record from the array
    studentRecords.splice(index, 1);
  
    // Call the displayStudents function to update the table
    displayStudents();
  }
  
  // Event listener for the form submit event
  document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addStudent();
  });

  // Event listener for the search input
document.getElementById('searchInput').addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var filteredRecords = studentRecords.filter(function(student) {
      return (
        student.name.toLowerCase().includes(searchValue) ||
        student.email.toLowerCase().includes(searchValue) ||
        student.degree.toLowerCase().includes(searchValue)
      );
    });
    displayFilteredStudents(filteredRecords);
  });

  // Function to display filtered student records in the table
function displayFilteredStudents(filteredRecords) {
    var tableBody = document.getElementById('studentList');
    tableBody.innerHTML = '';
  
    // Loop through the filtered records and create table rows
    for (var i = 0; i < filteredRecords.length; i++) {
      var student = filteredRecords[i];
  
      // Create a new row
      var row = document.createElement('tr');
  
      // Create table data cells for each property
      var idCell = document.createElement('td');
      idCell.textContent = i + 1;
      row.appendChild(idCell);
  
      var nameCell = document.createElement('td');
      nameCell.textContent = student.name;
      row.appendChild(nameCell);
  
      var ageCell = document.createElement('td');
      ageCell.textContent = student.age;
      row.appendChild(ageCell);
  
      var gradeCell = document.createElement('td');
      gradeCell.textContent = student.grade;
      row.appendChild(gradeCell);
  
      var degreeCell = document.createElement('td');
      degreeCell.textContent = student.degree;
      row.appendChild(degreeCell);
  
      var emailCell = document.createElement('td');
      emailCell.textContent = student.email;
      row.appendChild(emailCell);
  
      var actionsCell = document.createElement('td');
      actionsCell.innerHTML = `<button onclick="editStudent(${i})">Edit</button>
    //   <button onclick="deleteStudent(${i})">Delete</button>`;
      row.appendChild(actionsCell);
  
      // Append the row to the table body
      tableBody.appendChild(row);
    }
  }
  // Function to edit a student record
function editStudent(index) {
    // Get the student record from the array
    var student = studentRecords[index];
  
    // Set the form inputs with the student record values
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('grade').value = student.grade;
    document.getElementById('degree').value = student.degree;
    document.getElementById('email').value = student.email;
  
    // Remove the student record from the array
    studentRecords.splice(index, 1);
  
    // Call the displayStudents function to update the table
    displayStudents();
  }