  let students = [
      { id: 1, name: 'Sathish', course: 'Java', feeStatus: 'Paid', trainer: 'Jayashree' },
      { id: 2, name: 'Moorthy', course: 'Python', feeStatus: 'Unpaid', trainer: 'Selva' },
      { id: 3, name: 'Suresh', course: 'React', feeStatus: 'Paid', trainer: 'Mukund' }
    ];

    function renderStudentTable() {
      const tbody = document.querySelector("#studentTable tbody");
      tbody.innerHTML = '';
      students.forEach(student => {
        const feeClass = student.feeStatus === 'Paid' ? 'badge-paid' : 'badge-unpaid';
        tbody.innerHTML += `
          <tr>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td><span class="${feeClass}">${student.feeStatus}</span></td>
            <td>${student.trainer}</td>
            <td>
              <button class="btn btn-sm btn-info" onclick="editStudent(${student.id})">Edit</button>
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
        students.push({ id: Date.now(), name, course, feeStatus: 'Unpaid', trainer: 'Not Assigned' });
        renderStudentTable();
        this.reset();
      }
    });

    function editStudent(id) {
      const student = students.find(s => s.id === id);
      const newName = prompt("Enter new name:", student.name);
      const newCourse = prompt("Enter new course:", student.course);
      if (newName && newCourse) {
        student.name = newName;
        student.course = newCourse;
        renderStudentTable();
      }
    }

    function deleteStudent(id) {
      if (confirm("Are you sure you want to delete this student?")) {
        students = students.filter(s => s.id !== id);
        renderStudentTable();
      }
    }

    function searchStudent() {
      const input = document.getElementById("searchStudent").value.toLowerCase();
      document.querySelectorAll("#studentTable tbody tr").forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        const course = row.cells[1].textContent.toLowerCase();
        row.style.display = (name.includes(input) || course.includes(input)) ? "" : "none";
      });
    }

    window.onload = renderStudentTable;