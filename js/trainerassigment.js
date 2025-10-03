let trainerAssignments = [
      { id: 1, studentName: 'Raja', trainer: 'Jayashree' },
      { id: 2, studentName: 'Rajesh', trainer: 'Selva' },
      { id: 3, studentName: 'Charles', trainer: 'Mukund' }
    ];

    function renderTrainerTable() {
      const tbody = document.querySelector("#trainerTable tbody");
      tbody.innerHTML = '';
      trainerAssignments.forEach(assignment => {
        tbody.innerHTML += `
          <tr>
            <td>${assignment.studentName}</td>
            <td>${assignment.trainer}</td>
            <td>
              <button class="btn btn-sm btn-info" onclick="editTrainer(${assignment.id})">Edit Trainer</button>
            </td>
          </tr>
        `;
      });
    }

    document.getElementById('assignTrainerForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const studentName = document.getElementById('studentName').value.trim();
      const trainerName = document.getElementById('trainerName').value.trim();
      if (studentName && trainerName) {
        trainerAssignments.push({ id: Date.now(), studentName, trainer: trainerName });
        renderTrainerTable();
        this.reset();
      }
    });

    function editTrainer(id) {
      const assignment = trainerAssignments.find(a => a.id === id);
      if (assignment) {
        const newTrainer = prompt("Enter new trainer name:", assignment.trainer);
        if (newTrainer) { assignment.trainer = newTrainer; renderTrainerTable(); }
      }
    }

    function searchTrainer() {
      const input = document.getElementById("searchTrainer").value.toLowerCase();
      document.querySelectorAll("#trainerTable tbody tr").forEach(row => {
        const student = row.cells[0].textContent.toLowerCase();
        const trainer = row.cells[1].textContent.toLowerCase();
        row.style.display = (student.includes(input) || trainer.includes(input)) ? "" : "none";
      });
    }

    window.onload = renderTrainerTable;