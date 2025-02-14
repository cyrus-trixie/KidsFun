const numberOfPeople=document.getElementById('numberOfPeople');
const budgetCalc1Output=document.getElementById('budgetCalc1Output');
const checkboxes = document.querySelectorAll("input[type='checkbox']");

// Function to calculate total cost
function calculateTotalCost() {
  let totalCost = 0;

  // Loop through checkboxes and calculate the total cost
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
        totalCost += numberOfPeople.value * parseInt(checkbox.value);
    }
  });

  // Display the total cost
  budgetCalc1Output.textContent = totalCost;
}

// Add event listeners
numberOfPeople.addEventListener("input", calculateTotalCost);
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", calculateTotalCost)
);
