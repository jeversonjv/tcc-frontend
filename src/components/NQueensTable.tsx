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
  NumberInput,
  NumberInputField,
  FormLabel,
  InputLeftElement,
  InputGroup,
  Text,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { QueenIcon } from "./QueenIcon";

const NQueensTable: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <TableContainer>
        <Table colorScheme="whiteAlpha" variant="simple">
          <Thead>
            <Tr>
              <Th>Número de Rainhas</Th>
              <Th>Status</Th>
              <Th>Tempo de Processamento</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              cursor="pointer"
              role="link"
              transition="backdrop-filter 0.2s"
              _hover={{
                backdropFilter: "brightness(1.15)",
              }}
              onClick={() => router.push(`/nqueen/${1}`)}
            >
              <Td fontWeight="bold" color="gray.200">
                15 <QueenIcon boxSize="18px" />
              </Td>
              <Td>
                <Badge colorScheme="green">Resolvido</Badge>
              </Td>
              <Td color="gray.200">200.5 ms</Td>
              <Td isNumeric>
                <ChevronRightIcon color="gray.400" boxSize={5} />
              </Td>
            </Tr>
            <Tr
              cursor="pointer"
              transition="backdrop-filter 0.2s"
              _hover={{
                backdropFilter: "brightness(1.15)",
              }}
            >
              <Td fontWeight="bold" color="gray.200">
                15 <QueenIcon boxSize="18px" />
              </Td>
              <Td>
                <Badge colorScheme="green">Resolvido</Badge>
              </Td>
              <Td color="gray.200">200.5 ms</Td>
              <Td isNumeric>
                <ChevronRightIcon color="gray.400" boxSize={5} />
              </Td>
            </Tr>
            <Tr
              cursor="pointer"
              transition="backdrop-filter 0.2s"
              _hover={{
                backdropFilter: "brightness(1.15)",
              }}
            >
              <Td fontWeight="bold" color="gray.200">
                15 <QueenIcon boxSize="18px" />
              </Td>
              <Td>
                <Badge colorScheme="green">Resolvido</Badge>
              </Td>
              <Td color="gray.200">200.5 ms</Td>
              <Td isNumeric>
                <ChevronRightIcon color="gray.400" boxSize={5} />
              </Td>
            </Tr>
            <Tr
              cursor="pointer"
              transition="backdrop-filter 0.2s"
              _hover={{
                backdropFilter: "brightness(1.15)",
              }}
            >
              <Td fontWeight="bold" color="gray.200">
                15 <QueenIcon boxSize="18px" />
              </Td>
              <Td>
                <Badge colorScheme="green">Resolvido</Badge>
              </Td>
              <Td color="gray.200">200.5 ms</Td>
              <Td isNumeric>
                <ChevronRightIcon color="gray.400" boxSize={5} />
              </Td>
            </Tr>
            <Tr
              cursor="not-allowed"
              transition="backdrop-filter 0.2s"
              _hover={{
                backdropFilter: "brightness(1.15)",
              }}
            >
              <Td fontWeight="bold" color="gray.200">
                10 <QueenIcon boxSize="18px" />
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
                justifyContent="space-between"
              >
                <Text maxW="45%">
                  Insira o número N de rainhas que serão posicionadas em um
                  tabuleiro NxN sem que uma rainha mate a outra.
                </Text>
                <Box>
                  <FormLabel htmlFor="numQueens">Número de Rainhas</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<QueenIcon color="gray.300" />}
                    />
                    <NumberInput
                      variant="filled"
                      focusBorderColor="blue.500"
                      name="numQueens"
                      id="numQueens"
                      min={4}
                    >
                      <NumberInputField
                        pl="32px"
                        bg="gray.900"
                        _hover={{ bg: "gray.900" }}
                      />
                    </NumberInput>
                    <Button
                      ml={5}
                      bg="blue.200"
                      _hover={{ bg: "blue.300" }}
                      color="blue.800"
                    >
                      Resolver
                    </Button>
                  </InputGroup>
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default NQueensTable;
