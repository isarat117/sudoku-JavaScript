
const puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];

const solveSudoku=(board)=> {
    const isSafe=(row, col, num)=> {
      for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num || board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === num) {
          return false;
        }
      }
      return true;
    }
  
    const solve=() =>{
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (board[row][col] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (isSafe(row, col, num)) {
                board[row][col] = num;
                if (solve()) {
                  return true;
                }
                board[row][col] = 0; 
              }
            }
            return false; 
          }
        }
      }
      return true; 
    }
  
    if (solve()) {
      return board; 
    } else {
      return "Bu Sudoku bulmacası çözülemez.";
    }
  }

  function printSudoku(board) {
    for (let row = 0; row < 9; row++) {
      let rowString = '';
      for (let col = 0; col < 9; col++) {
        rowString += board[row][col] + ' ';
        if ((col + 1) % 3 === 0 && col < 8) {
          rowString += '| ';
        }
      }
      console.log(rowString);
      if ((row + 1) % 3 === 0 && row < 8) {
        console.log('---------------------');
      }
    }
  }
  
  const solvedPuzzle = solveSudoku(puzzle);
  printSudoku(solvedPuzzle);
  

  

  