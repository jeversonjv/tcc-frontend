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
import { getEnv } from "@/utils/getEnv";
import axios from "axios";
import MazeSolverBoard from "@/components/Maze";

const MazeDetails: React.FC = () => {
  const apiBaseUrl = getEnv('API_BASE_URL', 'http://localhost:3000/api/v1' );
  const router = useRouter();
  const [totalTimeToProcess, setTotalTimeToProcess] = React.useState<number>(0);
  const [board, setBoard] = React.useState<number[][]>();
  const [resultPaths, setResultPaths] = React.useState<number[][]>();

  useEffect(() => {

    const getGetails = async () => {
      try {
        const { data } = await axios.get(`${apiBaseUrl}/maze-resolver/${router.query.id}`);
        setBoard(data.input);
        setResultPaths(data.processing?.result);
        setTotalTimeToProcess(data.processing?.totalTimeToProcess.toFixed(2));
      } catch(e) {
        setBoard([[]]);
      }
    }

    if (router.isReady)
      getGetails();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady])
  
  return (
    <>
      <Head>
        <title>Maze</title>
      </Head>
      <main>
        <Container maxWidth={1100} paddingY={20}>
          <Breadcrumb mb={5}>
            <BreadcrumbItem fontWeight="bold" color="blue.500">
              <BreadcrumbLink onClick={() => router.push('/')} >Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem fontWeight="bold" color="blue.500" isCurrentPage>
              <BreadcrumbLink>Maze</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box>
            <Heading mb={5}>Maze Solver</Heading>
            <Card bg="gray.800" padding={5} mb={5}>
              <Text color="gray.400" fontWeight={'bold'}> Tempo de processamento </Text>
              <Text color={'whiteAlpha.900'} fontWeight="bold" fontSize={20}> {totalTimeToProcess} ms </Text>
            </Card>
            <Card bg="gray.800" padding={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              { board ? <MazeSolverBoard board={board} rows={board.length} cols={board[0]?.length} resultPaths={resultPaths} /> : <p>Carregando...</p> }
            </Card>
          </Box>
        </Container>
      </main>
    </>
  );
}

export default MazeDetails;