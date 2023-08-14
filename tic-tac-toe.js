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
    ];

    const markBoard = (marker, x, y) => {
        _board[x][y] = marker;
    }

    return {markBoard};
})();