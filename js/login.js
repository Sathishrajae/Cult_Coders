document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const role = document.getElementById('role').value;

    if (email === "" || password === "" || role === "") {
        alert("Please fill all fields!");
        return;
    }

    if (role === "student") {
        window.location.href = "student.html ";
    } else if (role === "trainer") {
        window.location.href = "trainer_attendance.html";
    } else if (role === "admin") {
        window.location.href = "Admin.html";
    }
    else if (role === "Coordinator") {
        window.location.href = "Coordinator.html";
    }
    else {
        alert("Invalid role selected!");
    }
});

