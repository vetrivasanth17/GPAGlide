// Grade-to-point mapping
const gradeToPoint = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5,
  "RA": 0,
  "SA": 0,
  "W": 0
};

// Function to add a new subject row
function addSubject() {
  const container = document.getElementById("subjects-container");

  const div = document.createElement("div");
  div.className = "subject-row";

  div.innerHTML = `
    <label>Grade:
      <select class="grade">
        <option value="O">O</option>
        <option value="A+">A+</option>
        <option value="A">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="RA">RA</option>
        <option value="SA">SA</option>
        <option value="W">W</option>
      </select>
    </label>
    <label>Credit:
      <input type="number" class="credit" min="0" />
    </label>
  `;

  container.appendChild(div);
}

// Function to calculate GPA
function calculateGPA() {
  const grades = document.querySelectorAll(".grade");
  const credits = document.querySelectorAll(".credit");

  let totalGradePoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i].value;
    const credit = parseFloat(credits[i].value);

    if (isNaN(credit) || credit <= 0) {
      continue;
    }

    const gradePoint = gradeToPoint[grade];
    totalGradePoints += gradePoint * credit;
    totalCredits += credit;
  }

  const resultDiv = document.getElementById("gpa-result");

  if (totalCredits === 0) {
    resultDiv.textContent = "Please enter valid credits.";
    resultDiv.style.display = "block";
    return;
  }

  const gpa = (totalGradePoints / totalCredits).toFixed(2);
  resultDiv.textContent = `Your GPA is: ${gpa}`;
  resultDiv.style.display = "block";
}
