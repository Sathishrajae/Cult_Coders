  let students = JSON.parse(localStorage.getItem("students")) || [];
  let assignCount = parseInt(localStorage.getItem("assignCount")) || 0;

  function loadStudents() {
    let tbody = document.getElementById("studentBody");
    tbody.innerHTML = "";
    students.forEach((s) => {
      tbody.innerHTML += `
        <tr>
          <td>${s.name}</td>
          <td>${s.course}</td>
          <td class="${s.fees.toLowerCase()==="paid" ? "fees-paid" : "fees-pending"}">${s.fees}</td>
          <td>${s.counsellor || "Not Assigned"}</td>
        </tr>`;
    });
  }

  function updateStats() {
    document.getElementById("studentCount").innerText = students.length;
    document.getElementById("feesCollected").innerText =
      students.filter(s => s.fees.toLowerCase() === "paid").length * 50000;
    document.getElementById("placementCount").innerText =
      students.filter(s => s.counsellor && s.counsellor !== "Not Assigned").length;
    document.getElementById("usageCount").innerText = assignCount;
  }

  document.getElementById("searchBar").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    document.querySelectorAll("#studentBody tr").forEach(row => {
      row.style.display = row.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
  });

  loadStudents();
  updateStats();