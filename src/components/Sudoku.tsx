import { Card, Table, Tbody, Td, Tr } from "@chakra-ui/react";
import styles from "../styles/Sudoku.module.css";

interface SudokuProps {
  board: number[][];
}

const Sudoku: React.FC<SudokuProps> = ({ board }) => {
  const verifyNumbers = (number: number) => {
    return number === 0 ? "" : number;
  };

  return (
    <Card
      bg="gray.900"
      maxW="531px"
      border="2px solid var(--chakra-colors-whiteAlpha-400)"
    >
      <Table colorScheme="whiteAlpha" variant="simple">
        <Tbody>
          <Tr>
            <Td p="0">
              <Table colorScheme="whiteAlpha">
                <Tbody>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[0][0])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[0][1])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[0][2])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[1][0])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[1][1])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[1][2])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[2][0])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[2][1])}
                    </Td>
                    <Td
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[2][2])}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Td>
            <Td
              p="0"
              borderLeft="2px solid var(--chakra-colors-whiteAlpha-400)"
            >
              <Table colorScheme="whiteAlpha">
                <Tbody>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[0][3])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[0][4])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[0][5])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[1][3])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[1][4])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[1][5])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[2][3])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[2][4])}
                    </Td>
                    <Td
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[2][5])}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Td>
            <Td
              p="0"
              borderLeft="2px solid var(--chakra-colors-whiteAlpha-400)"
            >
              <Table colorScheme="whiteAlpha">
                <Tbody>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[0][6])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[0][7])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[0][8])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[1][6])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[1][7])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[1][8])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[2][6])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[2][7])}
                    </Td>
                    <Td
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[2][8])}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Td>
          </Tr>
          <Tr borderTop="2px solid var(--chakra-colors-whiteAlpha-400)">
            <Td p="0">
              <Table colorScheme="whiteAlpha">
                <Tbody>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[3][0])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[3][1])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[3][2])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[4][0])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[4][1])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[4][2])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[5][0])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[5][1])}
                    </Td>
                    <Td
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[5][2])}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Td>
            <Td
              p="0"
              borderLeft="2px solid var(--chakra-colors-whiteAlpha-400)"
            >
              <Table colorScheme="whiteAlpha">
                <Tbody>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[3][3])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[3][4])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[3][5])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[4][3])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[4][4])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[4][5])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[5][3])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[5][4])}
                    </Td>
                    <Td
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[5][5])}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Td>
            <Td
              p="0"
              borderLeft="2px solid var(--chakra-colors-whiteAlpha-400)"
            >
              <Table colorScheme="whiteAlpha">
                <Tbody>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[3][6])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[3][7])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[3][8])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[4][6])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[4][7])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[4][8])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[5][6])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[5][7])}
                    </Td>
                    <Td
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[5][8])}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Td>
          </Tr>
          <Tr borderTop="2px solid var(--chakra-colors-whiteAlpha-400)">
            <Td p="0">
              <Table colorScheme="whiteAlpha">
                <Tbody>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[6][0])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[6][1])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[6][2])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[7][0])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[7][1])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[7][2])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[8][0])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[8][1])}
                    </Td>
                    <Td
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[8][2])}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Td>
            <Td
              p="0"
              borderLeft="2px solid var(--chakra-colors-whiteAlpha-400)"
            >
              <Table colorScheme="whiteAlpha">
                <Tbody>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[6][3])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[6][4])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[6][5])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[7][3])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[7][4])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[7][5])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[8][3])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[8][4])}
                    </Td>
                    <Td
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[8][5])}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Td>
            <Td
              p="0"
              borderLeft="2px solid var(--chakra-colors-whiteAlpha-400)"
            >
              <Table colorScheme="whiteAlpha">
                <Tbody>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[6][6])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[6][7])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[6][8])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[7][6])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[7][7])}
                    </Td>
                    <Td
                      borderBottom="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[7][8])}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[8][6])}
                    </Td>
                    <Td
                      borderRight="2px dashed var(--chakra-colors-whiteAlpha-200)"
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[8][7])}
                    </Td>
                    <Td
                      fontWeight="bold"
                      color="gray.200"
                      className={styles.tableTd}
                    >
                      {verifyNumbers(board[8][8])}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Card>
  );
};

export default Sudoku;
