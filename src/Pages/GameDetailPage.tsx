import { Params, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, VStack } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { error, data } = useGame(slug as string);
  return (
    <Box>
      <Heading>{data?.name}</Heading>
      <Box
        dangerouslySetInnerHTML={{ __html: data?.description as string }}
      ></Box>
    </Box>
  );
};

export default GameDetailPage;
