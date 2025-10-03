let students = [
  { id: 1, name: 'Alice', course: 'Python', feesStatus: true, trainer: 'John' },
  { id: 2, name: 'Bob', course: 'Java', feesStatus: false, trainer: null },
];

function renderStudents() {
  const tbody = document.querySelector("#studentTable tbody");
  tbody.innerHTML = '';
  students.forEach((student) => {
    tbody.innerHTML += `
      <tr>
        <td>${student.name}</td>
        <td>${student.course}</td>
        <td>
          <span class="badge ${student.feesStatus ? 'badge-success' : 'badge-warning'}">
            ${student.feesStatus ? 'Paid' : 'Pending'}
          </span>
        </td>
        <td>${student.trainer || '<span class="badge badge-secondary">No Trainer</span>'}</td>
        <td>
          <button class="btn btn-sm btn-primary" onclick="toggleFee(${student.id})">Toggle Fee</button>
          <button class="btn btn-sm btn-info" onclick="assignTrainer(${student.id})">Assign Trainer</button>
          <button class="btn btn-sm btn-danger" onclick="deleteStudent(${student.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

document.getElementById('addStudentForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('studentName').value.trim();
  const course = document.getElementById('studentCourse').value.trim();
  if (name && course) {
    const newStudent = {
      id: Date.now(),
      name,
      course,
      feesStatus: false,
      trainer: null,
    };
    students.push(newStudent);
    renderStudents();
    this.reset();
  }
});

function toggleFee(id) {
  const student = students.find(s => s.id === id);
  if (student) {
    student.feesStatus = !student.feesStatus;
    renderStudents();
  }
}

function assignTrainer(id) {
  const trainerName = prompt("Enter trainer name:");
  const student = students.find(s => s.id === id);
  if (student && trainerName) {
    student.trainer = trainerName;
    renderStudents();
  }
}

function deleteStudent(id) {
  if (confirm("Are you sure you want to delete this student?")) {
    students = students.filter(s => s.id !== id);
    renderStudents();
  }
}

function searchStudent() {
  const input = document.getElementById("searchStudent").value.toLowerCase();
  const rows = document.querySelectorAll("#studentTable tbody tr");
  rows.forEach(row => {
    const nameCell = row.cells[0].textContent.toLowerCase();
    row.style.display = nameCell.includes(input) ? "" : "none";
  });
}



