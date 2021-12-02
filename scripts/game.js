function startNewGame() {

    if (players[0].name === '' || players[1].name === '') {
        gameErrorsOutputElement.classList.add('error');
        gameErrorsOutputElement.textContent = 'Please set custom player names for both players!';
        console.log(gameErrorsOutputElement);
        return;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}

function switchPlayer() {
    activePlayer === 0 ? activePlayer++ : activePlayer--;
    activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {

    if (event.target.tagName !== 'LI') {
        return;
    }

    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled');
    switchPlayer();
}