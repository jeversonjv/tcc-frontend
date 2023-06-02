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
import { useRouter } from 'next/router';
import React from 'react';

const SudokuDetails: React.FC = () => {
  const router = useRouter();
  
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
            <Card bg="gray.800">
              {router.query.id}
            </Card>
          </Box>
        </Container>
      </main>
    </>
  );
}

export default SudokuDetails;