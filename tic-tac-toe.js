const display = document.querySelectorAll('.cell');

const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return {getName, getMarker};
}

const GameBoard = () => {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    const getBoard = () => board;

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

    return {markBoard, updateBoard, getBoard};
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
        if (board.getBoard()[x][y] === '') {
            board.markBoard(getCurrentPlayer().getMarker(), x, y);
            changePlayerTurn();
        } else {
            alert('This position is already filled. Choose another!');
        }
    }

    const checkForWinner = () => {
        if (board.getBoard()[0][0] === board.getBoard()[0][1]
            && board.getBoard()[0][1] === board.getBoard()[0][2]) {
            return true;
        }
        else if (board.getBoard()[1][0] === board.getBoard()[1][1]
            && board.getBoard()[1][1] === board.getBoard()[1][2]) {
            return true;
        }
        else if (board.getBoard()[2][0] === board.getBoard()[2][1]
            && board.getBoard()[2][1] === board.getBoard()[2][2]) {
            return true;
        }
        else if (board.getBoard()[0][0] === board.getBoard()[1][0]
            && board.getBoard()[1][0] === board.getBoard()[2][0]) {
            return true;
        }
        else if (board.getBoard()[0][1] === board.getBoard()[1][1]
            && board.getBoard()[1][1] === board.getBoard()[2][1]) {
            return true;
        }
        else if (board.getBoard()[0][2] === board.getBoard()[1][2]
            && board.getBoard()[1][2] === board.getBoard()[2][2]) {
            return true;
        }
        else if (board.getBoard()[0][0] === board.getBoard()[1][1]
            && board.getBoard()[1][1] === board.getBoard()[2][2]) {
            return true;
        }
        else if (board.getBoard()[0][2] === board.getBoard()[1][1]
            && board.getBoard()[1][1] === board.getBoard()[2][0]) {
            return true;
        } else {
            return false;
        }
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