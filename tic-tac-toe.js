const display = document.querySelectorAll('.cell');

const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return {getName, getMarker};
}

const GameBoard = () => {
    const board = [
        ['X', 'O', 'X'],
        ['X', 'X', 'O'],
        ['O', 'O', 'X']
    ]

    const markBoard = (marker, x, y) => {
        board[x][y] = marker;
        updateBoard();
    }

    const updateBoard = () => {
        let position = 0;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                display[position].textContent = board[i][j];
                position++;
            }
        }
    }

    return {markBoard, updateBoard};
};

const GameController = () => {
    const playerOne = Player('Player 1', 'X');
    const playerTwo = Player('Player 2', 'O');
    const board = GameBoard();
    board.updateBoard();
    let currentPlayer = playerOne;

    const changePlayerTurn = () => {
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    }

    const getCurrentPlayer = () => currentPlayer;

    const playRound = (x, y) => {
        board.markBoard(getCurrentPlayer().getMarker(), x, y);
        changePlayerTurn();
    }

    return {getCurrentPlayer, playRound}
}

let game = GameController();
display.forEach((cell) => {
    cell.addEventListener('click', () => {
        let x = Number(cell.getAttribute('data-x'));
        let y = Number(cell.getAttribute('data-y'));
        game.playRound(x, y);
    })
});