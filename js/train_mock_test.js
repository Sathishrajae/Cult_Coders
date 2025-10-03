  function uploadScore(button) {
      const row = button.parentNode.parentNode; 
      const scoreCell = row.querySelector(".score");

      let currentScore = scoreCell.textContent === "--" ? "" : scoreCell.textContent;
      let newScore = prompt("Enter score for " + row.cells[0].textContent, currentScore);

      if (newScore !== null && newScore.trim() !== "") {
        scoreCell.textContent = newScore;
        button.textContent = "Edit Score"; 
      }
    }

    function submitScores() {
      alert("Mock test scores submitted successfully!");
      window.location.href = "./trainer_placement.html"; // Redirect to placemen
      }