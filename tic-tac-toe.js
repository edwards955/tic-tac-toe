let gameBoard = [
    ['X', 'O', 'X'],
    ['X', 'X', 'O'],
    ['O', 'O', 'X']
]

const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return {getName, getMarker};
}