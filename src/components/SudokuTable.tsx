import { ChevronRightIcon, AddIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Button,
  useToast
} from "@chakra-ui/react";
import Sudoku from "./Sudoku";

import { generateSudokuBoard } from "../utils/generateSudokuBoard";
import { useEffect, useState } from "react";
import RowTableEmpty from "./RowTableEmpty";
import axios from "axios";
import { useRouter } from "next/router";
import { getEnv } from "@/utils/getEnv";

export type SudokuData = {
  id: string;
  numberOfQueens: number;
  processing: {
    status: string;
    totalTimeProcess: number;
  }
}

type Prop = {
  sudokuData: SudokuData[];
  fetchSudokuData: () => Promise<void>;
}

const SudokuTable: React.FC<Prop> = ({ sudokuData, fetchSudokuData }: Prop) => {
  const apiBaseUrl = getEnv('API_BASE_URL', 'http://localhost:3000/api/v1');
  const toast = useToast();
  const router = useRouter();
  const [board, setBoard] = useState<number[][]>();

  useEffect(() => {
    setBoard(generateSudokuBoard());
  }, []);

  const generateNewBoard = () => {
    setBoard(generateSudokuBoard());
  };

  const renderRows = (rows: SudokuData[]) => {
    if (!rows.length) return <RowTableEmpty />;

    return rows.map((row) => (
      row.processing?.status === "COMPLETED" ? renderCompletedRow(row) : renderPendingRow(row)
    ));
  }

  const renderCompletedRow = (row: SudokuData) => {
    return (
      <Tr
        cursor="pointer"
        transition="backdrop-filter 0.2s"
        _hover={{
          backdropFilter: "brightness(1.15)",
        }}
        onClick={() => router.push(`/sudoku/${row.id}`)}
      >
        <Td fontWeight="bold" color="gray.200">
          {row.id.split("-")[0]}
        </Td>
        <Td>
          <Badge colorScheme="green">Resolvido</Badge>
        </Td>
        <Td color="gray.200">{row.processing?.totalTimeProcess.toFixed(2)} ms</Td>
        <Td isNumeric>
          <ChevronRightIcon color="gray.400" boxSize={5} />
        </Td>
      </Tr>
    );
  }

  const renderPendingRow = (row: SudokuData) => {
    return (
      <Tr
        cursor="not-allowed"
        transition="backdrop-filter 0.2s"
        _hover={{
          backdropFilter: "brightness(1.15)",
        }}
      >
        <Td fontWeight="bold" color="gray.200">
          {row.id.split("-")[0]}
        </Td>
        <Td>
          <Badge
            colorScheme="purple"
            display="flex"
            width="95px"
            justifyContent="space-between"
            alignItems="center"
          >
            Pendente{" "}
            <Spinner
              speed="0.75s"
              emptyColor="gray.300"
              size="sm"
              mr={1}
            />
          </Badge>
        </Td>
        <Td color="gray.200">-</Td>
        <Td isNumeric>
          <ChevronRightIcon color="gray.400" boxSize={5} />
        </Td>
      </Tr>
    );
  }

  const createRecordSudoku = async () => {
    try {
      const response = await axios.post(`${apiBaseUrl}/sudoku`, {
        sudoku: board,
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.status === 201) {
        await fetchSudokuData();
      }

      toast({
        title: "Registro criado com sucesso",
        description: "O registro foi criado com sucesso.",
        status: "success",
        isClosable: true,
        duration: 5000,
        position: "top-right",
      })

    } catch (error) {
      toast({
        title: "Erro ao criar registro",
        description: "Ocorreu um erro ao criar o registro, tente novamente mais tarde.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      })
    }
  }


  return (
    <>
      <TableContainer>
        <Table colorScheme="whiteAlpha" variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Status</Th>
              <Th>Tempo de Processamento</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {renderRows(sudokuData)}
          </Tbody>
        </Table>
      </TableContainer>
      <Accordion border="none" allowToggle>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  bg={isExpanded ? "gray.750" : "gray.800"}
                  mt={isExpanded ? "-2px" : 0}
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="right"
                    color={isExpanded ? "gray.200" : "blue.300"}
                    fontSize={16}
                    fontWeight="bold"
                  >
                    {isExpanded ? "Fechar" : "Adicionar"}
                  </Box>
                  {isExpanded ? (
                    <CloseIcon color="gray.500" boxSize="12px" ml={2} />
                  ) : (
                    <AddIcon color="blue.300" boxSize="15px" ml={2} />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                color="gray.200"
                p={4}
                display="flex"
                flexDir="column"
                alignItems="center"
              >
                <Text maxW="45%" mb={5}>
                  Gere tabuleiros Sudoku 9x9 para serem resolvidos.
                </Text>
                {board && <Sudoku board={board} />}
                <Box mt={5} display={'flex'}>
                  <Button
                    mr={5}
                    bg="teal.200"
                    _hover={{ bg: "teal.400" }}
                    color="teal.800"
                    onClick={generateNewBoard}
                  >
                    Gerar
                  </Button>
                  <AccordionButton padding={0}>
                    <Button
                      bg="blue.200"
                      _hover={{ bg: "blue.300" }}
                      color="blue.800"
                      onClick={createRecordSudoku}
                    >
                      Resolver
                    </Button>
                  </AccordionButton>
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default SudokuTable;
