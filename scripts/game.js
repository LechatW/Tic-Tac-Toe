function startNewGame() {

    if (players[0].name === '' || players[1].name === '') {
        gameErrorsOutputElement.classList.add('error');
        gameErrorsOutputElement.textContent = 'Please set custom player names for both players!';
        console.log(gameErrorsOutputElement);
        return;
    }

    gameAreaElement.style.display = 'block';
}