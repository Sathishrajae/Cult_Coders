    function markAttendance(button, status) {
      const td = button.parentNode;
      td.innerHTML = `<span class="${status.toLowerCase()}">${status}</span>`; 
    }

    function redirectToPlacement() {
      alert("Attendance submitted successfully!");
      window.location.href = "trainer_mocktest.html"; // Redirect page
    }