import React from 'react';
import { Box } from '@chakra-ui/react';
import { QueenIcon } from './QueenIcon';

function generateChessboard(size: number): number[][] {
  const board: number[][] = [];

  for (let row = 0; row < size; row++) {
    const newRow: number[] = [];

    for (let col = 0; col < size; col++) {
      newRow.push((row + col) % 2);
    }

    board.push(newRow);
  }

  return board;
}

const getSize = (size: number): string => {
  if (size <= 4) {
    return 'xs';
  }

  if (size <= 8) {
    return 'sm';
  }

  if (size <= 16) {
    return 'xl';
  }

  return '2xl';
}

type Props = {
  numberOfQueens: number;
  queensPositions: number[][];
}

const Chessboard: React.FC<Props> = ({ numberOfQueens, queensPositions }) => {
  const board = generateChessboard(numberOfQueens);

  return (
    <Box marginTop={5} display="grid" gridTemplateColumns={`repeat(${numberOfQueens}, 1fr)`} gridTemplateRows={`repeat(${numberOfQueens}, 1fr)`} w={getSize(numberOfQueens)} h={getSize(numberOfQueens)}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Box
            key={`${rowIndex}-${colIndex}`}
            bg={cell === 0 ? 'blackAlpha.400' : 'gray.700'}
            borderWidth={1}
            borderColor="blackAlpha.700"
            height="100%"
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {queensPositions[rowIndex][colIndex] === 1 && <QueenIcon boxSize="35px" color={'whiteAlpha.700'} />}
          </Box>
        ))
      )}
    </Box>
  );
};

export default Chessboard;