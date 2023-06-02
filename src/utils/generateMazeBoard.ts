function isValidPath(matrix: number[][]): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const directions: [number, number][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const visited: boolean[][] = [];

  // Initialize visited matrix
  for (let i = 0; i < rows; i++) {
    visited.push(new Array(cols).fill(false));
  }

  const dfs = (row: number, col: number): boolean => {
    if (row === rows - 1 && col === cols - 1) {
      // Reached the last position
      return true;
    }

    visited[row][col] = true;

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        matrix[newRow][newCol] === 1 &&
        !visited[newRow][newCol]
      ) {
        if (dfs(newRow, newCol)) {
          return true;
        }
      }
    }

    return false;
  };

  return dfs(0, 0);
}

export function generateMazeBoard(rows: number, cols: number): number[][] {
  const board: number[][] = [];

  for (let i = 0; i < rows; i++) {
    const row: number[] = [];

    for (let j = 0; j < cols; j++) {
      const isWall: boolean = Math.random() < 0.5;
      row.push(isWall ? 0 : 1);
    }

    board.push(row);
  }

  board[0][0] = 1;
  board[rows - 1][cols - 1] = 1;

  if (!isValidPath(board)) {
    return generateMazeBoard(rows, cols);
  }

  return board;
}
