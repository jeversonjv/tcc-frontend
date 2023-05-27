function testSudokuBoard(board: number[][]): boolean {
  board = board.map(row => row.slice());

  const size = board.length;
  const boxSize = Math.sqrt(size);

  function findEmpty(): [number, number] | null {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i][j] === 0) {
          return [i, j];
        }
      }
    }
    return null;
  }

  function isValid(num: number, row: number, col: number): boolean {
    for (let i = 0; i < size; i++) {
      // Check row
      if (board[row][i] === num) {
        return false;
      }
      // Check column
      if (board[i][col] === num) {
        return false;
      }
      // Check box
      const boxRow = Math.floor(row / boxSize) * boxSize + Math.floor(i / boxSize);
      const boxCol = Math.floor(col / boxSize) * boxSize + (i % boxSize);
      if (board[boxRow][boxCol] === num) {
        return false;
      }
    }
    return true;
  }

  function solve(): boolean {
    const emptyCell = findEmpty();
    if (!emptyCell) {
      return true;
    }
    const [row, col] = emptyCell;
    for (let num = 1; num <= size; num++) {
      if (isValid(num, row, col)) {
        board[row][col] = num;
        if (solve()) {
          return true;
        }
        board[row][col] = 0;
      }
    }
    return false;
  }

  if (solve()) {
    return true;
  } else {
    return false;
  }
}

export function generateSudokuBoard(): number[][] {
  const size = 9;
  const boxSize = 3;

  // Initialize empty board
  const board = new Array(size);
  for (let i = 0; i < size; i++) {
    board[i] = new Array(size).fill(0);
  }

  // Fill board randomly
  fillCell(0, 0);

  // Remove cells randomly until board is still solvable
  let cellsRemoved = 0;
  while (cellsRemoved < 54) {
    let row, col;
    do {
      row = Math.floor(Math.random() * size);
      col = Math.floor(Math.random() * size);
    } while (board[row][col] === 0);

    const temp = board[row][col];
    board[row][col] = 0;

    // Check if board is still solvable
    let tempBoard = [];
    for (let i = 0; i < size; i++) {
      tempBoard[i] = board[i].slice();
    }
    if (!testSudokuBoard(tempBoard)) {
      board[row][col] = temp;
    } else {
      cellsRemoved++;
    }
  }

  return board;

  function fillCell(row: number, col: number): boolean {
    // If we've filled the last cell, return true
    if (col === size) {
      col = 0;
      row++;
      if (row === size) {
        return true;
      }
    }
  
    // Generate set of possible numbers for current cell
    const possibleNumbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
    // Remove numbers that are already in the current row, column, or box
    for (let i = 0; i < size; i++) {
      possibleNumbers.delete(board[row][i]);
      possibleNumbers.delete(board[i][col]);
    }
    const boxRow = Math.floor(row / boxSize) * boxSize;
    const boxCol = Math.floor(col / boxSize) * boxSize;
    for (let i = 0; i < boxSize; i++) {
      for (let j = 0; j < boxSize; j++) {
        possibleNumbers.delete(board[boxRow + i][boxCol + j]);
      }
    }
  
    // Convert set to array and shuffle it
    const possibleNumbersArray = Array.from(possibleNumbers);
    for (let i = possibleNumbersArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [possibleNumbersArray[i], possibleNumbersArray[j]] = [possibleNumbersArray[j], possibleNumbersArray[i]];
    }
  
    // Try each possible number
    for (const num of possibleNumbersArray) {
      board[row][col] = num;
      if (fillCell(row, col + 1)) {
        return true;
      }
    }
  
    // If we've tried all possible numbers and none worked, backtrack and try again
    board[row][col] = 0;
    return false;
  }
  
}
