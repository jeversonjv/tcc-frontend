import Head from "next/head";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  Container,
  Heading,
  Select,
  Text
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { getEnv } from "@/utils/getEnv";
import axios from "axios";
import Chessboard from "@/components/Chessboard";
import { QueenIcon } from "@/components/QueenIcon";

const NQueenDetails: React.FC = () => {
  const apiBaseUrl = getEnv('API_BASE_URL', 'http://localhost:3000/api/v1' );
  const router = useRouter();
  const [totalTimeToProcess, setTotalTimeToProcess] = React.useState<number>(0);
  const [result, setResult] = React.useState<number[][][]>();
  const [numberOfQueens, setNumberOfQueens] = React.useState<number>(0);
  const [currentSolution, setCurrentSolution] = React.useState<number>(0);

  useEffect(() => {

    const getGetails = async () => {
      try {
        const { data } = await axios.get(`${apiBaseUrl}/n-queen/${router.query.id}`);
        setResult(data.processing?.result);
        setNumberOfQueens(data.numberOfQueens);
        setTotalTimeToProcess(data.processing?.totalTimeToProcess.toFixed(2));
      } catch(e) {
        setResult([[]]);
      }
    }

    if (router.isReady)
      getGetails();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady])
  
  return (
    <>
      <Head>
        <title>N-Queen</title>
      </Head>
      <main>
        <Container maxWidth={1100} paddingY={20}>
          <Breadcrumb mb={5}>
            <BreadcrumbItem fontWeight="bold" color="blue.500">
              <BreadcrumbLink onClick={() => router.push('/')} >Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem fontWeight="bold" color="blue.500" isCurrentPage>
              <BreadcrumbLink>N-Queen</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box>
            <Heading mb={5}>N-Queen</Heading>
            <Card bg="gray.800" padding={5} mb={5} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
              <Box>
                <Text color="gray.400" fontWeight={'bold'}> Quantidade de rainhas <QueenIcon boxSize="20px" margin={0} padding={0} />  </Text>
                <Text color={'whiteAlpha.900'} fontWeight="bold" fontSize={20}> {numberOfQueens} </Text>
              </Box>
              <Box>
                <Text color="gray.400" fontWeight={'bold'}> Tempo de processamento </Text>
                <Text color={'whiteAlpha.900'} fontWeight="bold" fontSize={20}> {totalTimeToProcess} ms </Text>
              </Box>
              <Box>
                <Text color="gray.400" fontWeight={'bold'}> Selecione a solução </Text>
                <Select  bg='gray.200' value={currentSolution} onChange={(e) => setCurrentSolution(e.target.value as unknown as number)}>
                  {result && result.map((_, index) => (
                    <option key={index} value={index}> {index + 1} </option>
                  ))}
                </Select>
              </Box>
            </Card>
            <Card bg="gray.800" padding={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              {result && <Chessboard numberOfQueens={numberOfQueens} queensPositions={result[currentSolution]} />}
            </Card>
          </Box>
        </Container>
      </main>
    </>
  );
}

export default NQueenDetails;