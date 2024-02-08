import { Box, Button, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
interface Props {
  children: ReactNode;
  limit: number;
}
const ExpandableText = ({ children, limit }: Props) => {
  console.log(children);
  if (limit >= (children as string).length) return <Text>{children}</Text>;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };
  if (isExpanded) {
    return (
      <Box>
        <Text>
          {children}{" "}
          <Button height={7} width={20} colorScheme={"yellow"} onClick={toggle}>
            show less
          </Button>
        </Text>
      </Box>
    );
  } else {
    return (
      <Box>
        <Text>
          {(children as string).substring(0, limit)}...{" "}
          <Button height={7} width={24} colorScheme={"yellow"} onClick={toggle}>
            show more
          </Button>
        </Text>
      </Box>
    );
  }
};

export default ExpandableText;
