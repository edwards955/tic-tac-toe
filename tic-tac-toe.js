const display = document.querySelectorAll('.cell');

const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return {getName, getMarker};
}

const gameBoard = (() => {
    const _board = [
        ['X', 'O', 'X'],
        ['X', 'X', 'O'],
        ['O', 'O', 'X']
    ]

    const markBoard = (marker, x, y) => {
        _board[x][y] = marker;
        updateBoard();
    }

    const updateBoard = () => {
        let position = 0;
        for (let i = 0; i < _board.length; i++) {
            for (let j = 0; j < _board[i].length; j++) {
                display[position].textContent = _board[i][j];
                position++;
            }
        }
    }

    return {markBoard, updateBoard};
})();

gameBoard.updateBoard();