document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const guessButton = document.getElementById('guessButton');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(document.getElementById('userGuess').value);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.textContent = 'Please enter a valid number between 1 and 100.';
        } else {
            if (userGuess > randomNumber) {
                feedback.textContent = 'Too high! Try again.';
            } else if (userGuess < randomNumber) {
                feedback.textContent = 'Too low! Try again.';
            } else {
                feedback.textContent = `Congratulations! You guessed the number ${randomNumber}.`;
                attemptsDisplay.textContent = `It took you ${attempts} attempts.`;
                guessButton.disabled = true;
            }
        }
    });
});
