// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the start quiz button, quiz section, answer buttons, and result paragraph
    const startQuizButton = document.getElementById('startQuiz');
    const quizSection = document.getElementById('quiz');
    const answers = document.querySelectorAll('.answer');
    const result = document.getElementById('result');

    // Show the quiz section when the start quiz button is clicked
    startQuizButton.addEventListener('click', () => {
        quizSection.style.display = 'block'; // Display the quiz section
    });

    // Add event listeners to each answer button
    answers.forEach(answer => {
        answer.addEventListener('click', () => {
            // Check if the clicked answer is correct
            if (answer.textContent === 'Knight') {
                result.textContent = 'Correct!'; // Show "Correct!" if the answer is correct
                result.classList.add('text-success'); // Add success class for styling
                result.classList.remove('text-danger'); // Remove danger class if present
            } else {
                result.textContent = 'Try again!'; // Show "Try again!" if the answer is incorrect
                result.classList.add('text-danger'); // Add danger class for styling
                result.classList.remove('text-success'); // Remove success class if present
            }
        });
    });
});
