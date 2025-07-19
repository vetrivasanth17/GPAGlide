document.getElementById('add-semester').addEventListener('click', () => {
  const container = document.getElementById('semester-container');

  const div = document.createElement('div');
  div.classList.add('semester-input');
  div.innerHTML = `
    <label>Semester GPA:</label>
    <input type="number" step="0.01" class="gpa" required>
    <label>Credits:</label>
    <input type="number" class="credits" required>
  `;

  container.appendChild(div);
});

document.getElementById('cgpa-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const gpas = document.querySelectorAll('.gpa');
  const credits = document.querySelectorAll('.credits');

  let totalGradePoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < gpas.length; i++) {
    const gpa = parseFloat(gpas[i].value);
    const credit = parseFloat(credits[i].value);

    if (isNaN(gpa) || isNaN(credit) || credit <= 0) {
      document.getElementById('cgpaResult').innerText = "Please enter valid GPA and credit values.";
      return;
    }

    totalGradePoints += Math.floor(gpa * credit); 
    totalCredits += credit;
  }

  if (totalCredits === 0) {
    document.getElementById('cgpaResult').innerText = "Total credits must be greater than 0.";
    return;
  }

  const cgpa = totalGradePoints / totalCredits;
  document.getElementById('cgpaResult').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
});
