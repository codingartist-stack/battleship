//usually 10 x 10
function Gameboard(size) {
  let board = [];
  const initialize = () => {
    for (let i = 0; i < size; i++) {
      board[i] = [];
      for (let j = 0; j < size; j++) {
        board[i][j] = [];
      }
    }
  };

  initialize();

  return board;
}

module.exports = Gameboard;
