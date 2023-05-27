import Head from "next/head";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  Container,
  Heading,
} from "@chakra-ui/react";

import NQueensTable from "@/components/NQueensTable";
import SudokuTable from "@/components/SudokuTable";

export default function Home() {
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
              <NQueensTable />
            </Card>
          </Box>

          <Box mt="100px">
            <Heading mb={5}>Sudoku</Heading>
            <Card bg="gray.800">
              <SudokuTable />
            </Card>
          </Box>
        </Container>
      </main>
    </>
  );
}
