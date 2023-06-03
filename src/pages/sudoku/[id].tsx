import Head from "next/head";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  Container,
  Heading,
  Text
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import axios from 'axios';
import Sudoku from "@/components/Sudoku";

const SudokuDetails: React.FC = () => {
  const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:3000/api/v1';
  const router = useRouter();
  const [totalTimeToProcess, setTotalTimeToProcess] = React.useState<number>(0);
  const [board, setBoard] = React.useState<number[][]>();

  useEffect(() => {

    const getGetails = async () => {
      try {
        const { data } = await axios.get(`${apiBaseUrl}/sudoku/${router.query.id}`);
        setBoard(data.processing?.result);
        setTotalTimeToProcess(data.processing?.totalTimeToProcess.toFixed(2));
      } catch(e) {
        setBoard([]);
      }
    }

    if (router.isReady)
      getGetails();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady])
  
  return (
    <>
      <Head>
        <title>Sudoku</title>
      </Head>
      <main>
        <Container maxWidth={1100} paddingY={20}>
          <Breadcrumb mb={5}>
            <BreadcrumbItem fontWeight="bold" color="blue.500">
              <BreadcrumbLink href="/" >Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem fontWeight="bold" color="blue.500" isCurrentPage>
              <BreadcrumbLink>Sudoku</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box>
            <Heading mb={5}>Sudoku</Heading>
            <Card bg="gray.800" padding={5} mb={5}>
              <Text color="gray.400" fontWeight={'bold'}> Tempo de processamento </Text>
              <Text color={'whiteAlpha.900'} fontWeight="bold" fontSize={20}> {totalTimeToProcess} ms </Text>
            </Card>
            <Card bg="gray.800" padding={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              { board ? <Sudoku board={board} /> : <p>Carregando...</p> }
            </Card>
          </Box>
        </Container>
      </main>
    </>
  );
}

export default SudokuDetails;