import { Td, Tr } from "@chakra-ui/react";

const RowTableEmpty: React.FC = () => {
  return (
    <Tr>
      <Td fontWeight="bold" color="gray.200" colSpan={3} textAlign={"center"}>
        Sem dados para exibir
      </Td>
    </Tr>
  );
}

export default RowTableEmpty;