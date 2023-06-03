import React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  board: number[][];
  rows: number;
  cols: number;
  resultPaths?: number[][];
}

const MazeSolverBoard: React.FC<Props> = ({ board, rows, cols, resultPaths }) => {
  console.log(board, rows, cols, resultPaths)
  const getCellColor = (cell: number, i: number, y: number): string => {
    if (i === 0 && y === 0) {
      return 'green.400';
    }
  
    if (i === rows - 1 && y === cols - 1) {
      return 'red.400';
    }

    if(resultPaths && resultPaths.find((path) => path[0] === i && path[1] === y)) {
      return 'blue.400';
    }

    if (cell === 0) {
      return 'black.500';
    } else {
      return 'gray.700';
    }
  }

  if (!board) {
    return null;
  }

  return (
    <Box p={4} display="flex" flexDirection={'column'} alignItems={"center"} justifyContent={"center"}>
      <Box display="grid" gridTemplateColumns={`repeat(${cols}, 1fr)`} gridGap={0} w="lg" h={"65vh"}>
        {board.flatMap((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Box
              key={`${rowIndex}-${colIndex}`}
              bg={getCellColor(cell, rowIndex, colIndex)}
              borderWidth={1}
              borderColor="blackAlpha.400"
              h="100%"
              w="100%"
            />
          ))
        )}
      </Box>
    </Box>
  );
};

export default MazeSolverBoard;