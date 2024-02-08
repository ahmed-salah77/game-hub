import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}
const DefinitionItems = ({ term, children }: Props) => {
  return (
    <Box marginTop={5}>
      <Heading as="dt" color={"gray.600"} fontSize={"1.5rem"}>
        {term}
      </Heading>
      <Box as="dd">{children}</Box>
    </Box>
  );
};

export default DefinitionItems;
