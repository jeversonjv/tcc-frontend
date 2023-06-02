import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { generateMazeBoard } from '@/utils/generateMazeBoard';

const MazeSolverBoard: React.FC = () => {
  const [board, setBoard] = useState<number[][]>([]);
  const rows = 15;
  const cols = 15;

  const generateMaze = () => {
    const newBoard = generateMazeBoard(rows, cols);
    setBoard(newBoard);
  };

  const getCellColor = (cell: number, i: number, y: number): string => {
    if (i === 0 && y === 0) {
      return 'green.400';
    }
  
    if (i === rows - 1 && y === cols - 1) {
      return 'red.400';
    }

    if (cell === 0) {
      return 'black.500';
    } else {
      return 'gray.700';
    }
  }

  return (
    <Box p={4} display="flex" flexDirection={'column'} alignItems={"center"} justifyContent={"center"} marginTop="10">
      <Box display="grid" gridTemplateColumns={`repeat(${cols}, 1fr)`} gridGap={0} w="lg" h={"65vh"}>
        {board.flatMap((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Box
              key={`${rowIndex}-${colIndex}`}
              bg={getCellColor(cell, rowIndex, colIndex)}
              borderWidth={1}
              borderColor="gray.400"
              h="100%"
              w="100%"
            />
          ))
        )}
      </Box>
      <Button mb={4} onClick={generateMaze} marginTop="10">
        Generate Maze
      </Button>
    </Box>
  );
};

export default MazeSolverBoard;