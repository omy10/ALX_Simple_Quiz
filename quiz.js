// Step 1: Define the function named checkAnswer
function checkAnswer() {
    // Step 2: Declare the correct answer
    const correctAnswer = "4";
  
    // Step 3: Get the user's selected answer using querySelector
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
  
    // Check if an option is selected to avoid errors
    if (!selectedOption) {
      document.getElementById('feedback').textContent = "Please select an answer before submitting.";
      return;
    }
  
    // Step 4: Store the selected value in a variable
    const userAnswer = selectedOption.value;
  
    // Step 5: Compare user answer to correct answer
    if (userAnswer === correctAnswer) {
      document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
      document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
  }
  
  // Step 6: Add event listener to the submit button
  document.getElementById('submit-answer').addEventListener('click', checkAnswer);
  