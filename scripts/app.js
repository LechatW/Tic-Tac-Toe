let editedPlayer = 0;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameErrorsOutputElement = document.getElementById('game-errors');
const gameAreaElement = document.getElementById('active-game');

const editPlayerOneBtnElement = document.getElementById('edit-player-1-btn');
const editPlayerTwoBtnElement = document.getElementById('edit-player-2-btn');

const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const confirmConfigBtnElement = document.getElementById('confirm-config-btn');

const startGameBtnElement = document.getElementById('start-game-btn');

editPlayerOneBtnElement.addEventListener('click', openPlayerConfig);
editPlayerTwoBtnElement.addEventListener('click', openPlayerConfig);
cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);
startGameBtnElement.addEventListener('click', startNewGame);

