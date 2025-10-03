
function approveStudent(button) {
    const row = button.closest("tr");
    const studentName = row.cells[0].textContent;
    const statusCell = row.querySelector(".status");

    if (statusCell.textContent !== "Approved") {
        statusCell.textContent = "Approved";
        statusCell.classList.remove("not-approved");
        statusCell.classList.add("approved");

        const list = document.getElementById("approvedStudents");
        let li = document.createElement("li");
        li.textContent = studentName;
        list.appendChild(li);

        alert(studentName + " has been approved for placement.");
    } else {
        alert(studentName + " is already approved!");
    }
}

function notApproveStudent(button) {
    const row = button.closest("tr");
    const studentName = row.cells[0].textContent;
    const statusCell = row.querySelector(".status");

    statusCell.textContent = "Not Approved";
    statusCell.classList.remove("approved");
    statusCell.classList.add("not-approved");

    alert(studentName + " has NOT been approved.");
}