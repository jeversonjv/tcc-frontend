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

const NQueenDetails: React.FC = () => {
  const router = useRouter();
  
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
            <Card bg="gray.800">
              {router.query.id}
            </Card>
          </Box>
        </Container>
      </main>
    </>
  );
}

export default NQueenDetails;