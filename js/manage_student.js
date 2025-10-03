  const searchBox = document.getElementById("searchBox");
    const courseFilter = document.getElementById("courseFilter");
    const feesFilter = document.getElementById("feesFilter");
    const table = document.getElementById("studentTable");
    const tbody = table.getElementsByTagName("tbody")[0];

    searchBox.addEventListener("keyup", function () {
      let query = searchBox.value.toLowerCase();
      let rows = tbody.getElementsByTagName("tr");
      for (let row of rows) {
        row.style.display = row.innerText.toLowerCase().includes(query) ? "" : "none";
      }
    });

    courseFilter.addEventListener("change", function () {
      let selected = courseFilter.value.toLowerCase();
      let rows = tbody.getElementsByTagName("tr");
      for (let row of rows) {
        let course = row.cells[2].innerText.toLowerCase();
        row.style.display = (selected === "all courses" || course === selected) ? "" : "none";
      }
    });

    feesFilter.addEventListener("change", function () {
      let selected = feesFilter.value.toLowerCase();
      let rows = tbody.getElementsByTagName("tr");
      for (let row of rows) {
        let fees = row.cells[3].innerText.toLowerCase();
        row.style.display = (selected === "all fees status" || fees === selected) ? "" : "none";
      }
    });

    function setAssignListeners() {
      document.querySelectorAll(".assign-btn").forEach(button => {
        button.addEventListener("click", function () {
          let studentName = this.closest("tr").cells[1].innerText;
          alert("Redirecting to Assign Counsellor page for " + studentName);
          window.location.href = "Counsellor_Man.html";
        });
      });
    }

    function setDeleteListeners() {
      document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function () {
          let row = this.closest("tr");
          let studentName = row.cells[1].innerText;
          if (confirm("Are you sure you want to delete " + studentName + "?")) {
            row.remove();
          }
        });
      });
    }

    document.getElementById("addStudentBtn").addEventListener("click", function () {
      let id = prompt("Enter Student ID (e.g., SLA-004):");
      let name = prompt("Enter Student Name:");
      let course = prompt("Enter Course:");
      let fees = prompt("Enter Fees Status (Paid/Pending):");
      if (id && name && course && fees) {
        let row = tbody.insertRow();
        row.innerHTML = `
          <td>${id}</td>
          <td>${name}</td>
          <td>${course}</td>
          <td class="status-${fees.toLowerCase()}">${fees}</td>
          <td>Not Assigned</td>
          <td>
            <button class="btn assign-btn">Assign</button>
            <button class="btn delete-btn">Delete</button>
          </td>
        `;
        setAssignListeners();
        setDeleteListeners();
      }
    });

    setAssignListeners();
    setDeleteListeners();