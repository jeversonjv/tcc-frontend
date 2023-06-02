import Head from "next/head";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  Container,
  Heading
} from "@chakra-ui/react";

import NQueensTable from "@/components/NQueensTable";
import SudokuTable from "@/components/SudokuTable";
import MazeTable, { MazeData } from "@/components/MazeTable";
import axios from 'axios';
import { useEffect, useState } from "react";
import MazeSolverBoard from "@/components/Maze";

export default function Home() {
  const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:3000/api/v1';

  const [nQueens, setNQueens] = useState<[] | null>(null);
  const [sudoku, setSudoku] = useState<[] | null>(null);
  const [mazeSolver, setMazeSolver] = useState<MazeData[] | null>(null);

  const fetchNQueenData = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/n-queen`);
      setNQueens(response.data);
    } catch (error) {
      setNQueens([]);
    }
  };

  const fetchSudokuData = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/sudoku`);
      setSudoku(response.data);
    } catch (error) {
      setSudoku([]);
    }
  };

  const fetchMazeSolverData = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/maze-resolver`);
      setMazeSolver(response.data);
    } catch (error) {
      setSudoku([]);
    }
  };

  useEffect(() => {
    Promise.all([
      fetchNQueenData(),
      fetchSudokuData(),
      fetchMazeSolverData()
    ]);

    const intervalId = setInterval(() => {
      Promise.all([
        fetchNQueenData(),
        fetchSudokuData(),
        fetchMazeSolverData()
      ]);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Complexidade</title>
      </Head>
      <main>
        <Container maxWidth={1100} paddingY={20}>
          <Breadcrumb mb={5}>
            <BreadcrumbItem fontWeight="bold" color="blue.500" isCurrentPage>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box>
            <Heading mb={5}>N-Queen</Heading>
            <Card bg="gray.800">
              {nQueens ? <NQueensTable nQueensData={nQueens} fetchNQueenData={fetchNQueenData} /> : <p>Carregando...</p>}
            </Card>
          </Box>

          <Box mt="100px">
            <Heading mb={5}>Sudoku</Heading>
            <Card bg="gray.800">
              {sudoku ? <SudokuTable sudokuData={sudoku} fetchSudokuData={fetchSudokuData} /> : <p>Carregando...</p>}
            </Card>
          </Box>

          <Box mt="100px">
            <Heading mb={5}>Maze Solver</Heading>
            <Card bg="gray.800">
              {mazeSolver ? <MazeTable mazeData={mazeSolver} /> : <p>Carregando...</p>}
            </Card>
          </Box>
        </Container>
      </main>
    </>
  );
}
