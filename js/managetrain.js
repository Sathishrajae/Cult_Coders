    const form = document.getElementById("trainerForm");
    const table = document.getElementById("trainerTable").getElementsByTagName("tbody")[0];
    let editingIndex = null;

    // Load trainers from localStorage
    let trainers = JSON.parse(localStorage.getItem("trainers")) || [];
    renderTable();

    // Add or Update Trainer
    form.addEventListener("submit", function (e) {
        e.preventDefault();

    const trainer = {
        name: document.getElementById("name").value,
    expertise: document.getElementById("expertise").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    status: document.getElementById("status").value === "active" ? "✅ Active" : "❌ Inactive"
      };

    if (editingIndex !== null) {
        trainers[editingIndex] = trainer;
    editingIndex = null;
    alert("Trainer updated successfully!");
      } else {
        trainers.push(trainer);
    alert("Trainer added successfully!");
      }

    localStorage.setItem("trainers", JSON.stringify(trainers));

      // ✅ Redirect after saving
      setTimeout(() => {
        window.location.href = "Admin.html";
      }, 600);
    });

    // Edit/Delete
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("edit-btn")) {
        let i = e.target.dataset.index;
    let t = trainers[i];
    document.getElementById("name").value = t.name;
    document.getElementById("expertise").value = t.expertise;
    document.getElementById("email").value = t.email;
    document.getElementById("phone").value = t.phone;
    document.getElementById("status").value = t.status.includes("Active") ? "active" : "inactive";
    editingIndex = i;
      }

    if (e.target.classList.contains("delete-btn")) {
        let i = e.target.dataset.index;
    if (confirm("Delete trainer " + trainers[i].name + "?")) {
        trainers.splice(i, 1);
    localStorage.setItem("trainers", JSON.stringify(trainers));
    renderTable();
        }
      }
    });

    // Render table
    function renderTable() {
        table.innerHTML = "";
      trainers.forEach((t, i) => {
        let row = table.insertRow();
    row.innerHTML = `
    <td>${t.name}</td>
    <td>${t.expertise}</td>
    <td>${t.email}</td>
    <td>${t.phone}</td>
    <td>${t.status}</td>
    <td>
        <button class="edit-btn" data-index="${i}">Edit</button>
        <button class="delete-btn" data-index="${i}">Delete</button>
    </td>
    `;
      });
    }