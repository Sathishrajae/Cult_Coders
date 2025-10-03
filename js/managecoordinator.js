 const form = document.getElementById("counsellorForm");
    const table = document.getElementById("counsellorTable").getElementsByTagName("tbody")[0];
    let editingRow = null;

    // Load counsellors from localStorage
    let counsellors = JSON.parse(localStorage.getItem("counsellors")) || [];
    renderTable();

    // Save or Update Counsellor
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const specialization = document.getElementById("specialization").value;
      const status = document.getElementById("active").value === "True" ? "✅ Active" : "❌ Inactive";

      if (editingRow !== null) {
        counsellors[editingRow] = { name, specialization, status };
        editingRow = null;
        alert("Counsellor updated successfully!");
      } else {
        counsellors.push({ name, specialization, status });
        alert("New counsellor added successfully!");
      }

      localStorage.setItem("counsellors", JSON.stringify(counsellors));
      renderTable();
      form.reset();
    });

    // Edit/Delete Buttons
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("edit-btn")) {
        let rowIndex = e.target.dataset.index;
        let c = counsellors[rowIndex];
        document.getElementById("name").value = c.name;
        document.getElementById("specialization").value = c.specialization;
        document.getElementById("active").value = c.status.includes("Active") ? "True" : "False";
        editingRow = rowIndex;
      }

      if (e.target.classList.contains("delete-btn")) {
        let rowIndex = e.target.dataset.index;
        if (confirm("Are you sure you want to delete " + counsellors[rowIndex].name + "?")) {
          counsellors.splice(rowIndex, 1);
          localStorage.setItem("counsellors", JSON.stringify(counsellors));
          renderTable();
        }
      }
    });

    function renderTable() {
      table.innerHTML = "";
      counsellors.forEach((c, i) => {
        let row = table.insertRow();
        row.innerHTML = `
          <td>${c.name}</td>
          <td>${c.specialization}</td>
          <td class="${c.status.includes('Active') ? 'active' : 'inactive'}">${c.status}</td>
          <td>
            <button class="edit-btn" data-index="${i}">Edit</button>
            <button class="delete-btn" data-index="${i}">Delete</button>
          </td>
        `;
      });
    }